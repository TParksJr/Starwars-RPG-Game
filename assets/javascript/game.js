$(function () {

    var player,
        defender,
        charArr = [],
        baseAP = 0,
        playerSelected = false,
        defenderSelected = false;

    var Character = function (name, hp, ap, cp, pic) {
        this.name = name;
        this.hp = hp;
        this.ap = ap;
        this.cp = cp;
        this.pic = pic,
            this.counterAttack = function counterAttack(target) {
                target.hp -= this.cp;
            },
            this.increaseAP = function increaseAP() {
                this.ap += baseAP;
            },
            this.attack = function attack(target) {
                target.hp -= this.ap;
                this.increaseAP();
            };
    };

    var obiWan = new Character("Obi Wan Kenobi", 200, 10, 10, "../../ObiWan.jpg");
    var skywalker = new Character("Luke Skywalker", 150, 15, 15, "../../LukeSkywalker.png");
    var sidious = new Character("Darth Sidious", 100, 20, 20, "../../DarthSidious.jpg");
    var maul = new Character("Darth Maul", 175, 15, 15, "../../DarthMaul.png");
    charArr.push(obiWan, skywalker, sidious, maul);

    function updateInfo() {
        $("#obiWan .name").text(obiWan.name);
        $("#obiWan .charCard").attr("src", obiWan.pic);
        $("#obiWan .health").text(obiWan.hp);
        $("#skywalker .name").text(skywalker.name);
        $("#skywalker .charCard").attr("src", skywalker.pic);
        $("#skywalker .health").text(skywalker.hp);
        $("#sidious .name").text(sidious.name);
        $("#sidious .charCard").attr("src", sidious.pic);
        $("#sidious .health").text(sidious.hp);
        $("#maul .name").text(maul.name);
        $("#maul .charCard").attr("src", maul.pic);
        $("#maul .health").text(maul.hp);
    };
    updateInfo();

    $(document).on("click", "#obiWan", function () {
        if (playerSelected === false && defenderSelected === false) {
            player = obiWan;
            baseAP = obiWan.ap;
            playerSelected = true;
            $("#character").append(this);
            var remainingChars = $("#characters .character");
            $("#remainingEnemies").append(remainingChars);
        } else if (playerSelected === true && defenderSelected === false) {
            defender = obiWan;
            defenderSelected = true;
            $("#defender").append(this);
        } else {
            alert("Characters already selected!");
        };
    });

    $(document).on("click", "#skywalker", function () {
        if (playerSelected === false && defenderSelected === false) {
            player = skywalker;
            baseAP = skywalker.ap;
            playerSelected = true;
            $("#character").append(this);
            var remainingChars = $("#characters .character");
            $("#remainingEnemies").append(remainingChars);
        } else if (playerSelected === true && defenderSelected === false) {
            defender = skywalker;
            defenderSelected = true;
            $("#defender").append(this);
        } else {
            alert("Characters already selected!");
        };
    });

    $(document).on("click", "#sidious", function () {
        if (playerSelected === false && defenderSelected === false) {
            player = sidious;
            baseAP = sidious.ap;
            playerSelected = true;
            $("#character").append(this);
            var remainingChars = $("#characters .character");
            $("#remainingEnemies").append(remainingChars);
        } else if (playerSelected === true && defenderSelected === false) {
            defender = sidious;
            defenderSelected = true;
            $("#defender").append(this);
        } else {
            alert("Characters already selected!");
        };
    });

    $(document).on("click", "#maul", function () {
        if (playerSelected === false && defenderSelected === false) {
            player = maul;
            baseAP = maul.ap;
            playerSelected = true;
            $("#character").append(this);
            var remainingChars = $("#characters .character");
            $("#remainingEnemies").append(remainingChars);
        } else if (playerSelected === true && defenderSelected === false) {
            defender = maul;
            defenderSelected = true;
            $("#defender").append(this);
        } else {
            alert("Characters already selected!");
        };
    });

    $(document).on("click", "#attack", function () {
        if (playerSelected === true && defenderSelected === true) {
            player.attack(defender);
            if (defender.hp < 1) {
                $("#defender").empty();
                defenderSelected = false;
                $("#alert").text(defender.name + " has been defeated! Select a new opponent.")
            } else {
                defender.counterAttack(player);
                updateInfo();
                $("#alert").text(player.name + " has attacked for " + player.ap + " damage! \n" + defender.name + " has counterattacked for " + defender.cp + "!");
            };
        } else {
            alert("Complete character selection first!");
        };
    });
});