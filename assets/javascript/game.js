$(function () {
    console.log("ready");

    /*var phase = 0,
        playerCharacter = "",
        obiWan = $("#obiWan"),
        skywalker = $("#skywalker"),
        sidious = $("#sidious"),
        maul = $("#maul"),
        character = $("#character"),
        defender = $("#defender"),
        remaining = $("#remainingEnemies")

    if (phase === 0) {

        obiWan.on("click", function () {
            phase++;
            playerCharacter = "Obi Wan";
            console.log(playerCharacter);
            character.append(obiWan);
            remaining.append(skywalker);
            remaining.append(sidious);
            remaining.append(maul);
        });

        skywalker.on("click", function () {
            phase++;
            playerCharacter = "Luke Skywalker";
            console.log(playerCharacter);
            character.append(skywalker);
            remaining.append(obiWan);
            remaining.append(sidious);
            remaining.append(maul);
        });

        sidious.on("click", function () {
            phase++;
            playerCharacter = "Darth Sidious";
            console.log(playerCharacter);
            character.append(sidious);
            remaining.append(skywalker);
            remaining.append(obiWan);
            remaining.append(maul);
        });

        maul.on("click", function () {
            phase++;
            playerCharacter = "Darth Maul";
            console.log(playerCharacter);
            character.append(maul);
            remaining.append(skywalker);
            remaining.append(sidious);
            remaining.append(obiWan);
        });

    } else {

        obiWan.on("click", function () {
            console.log("Test");
        });
        skywalker.on("click", function () {
            console.log("Test");
        });
        sidious.on("click", function () {
            console.log("Test");
        });
        maul.on("click", function () {
            console.log("Test");
        });
    }*/

    /*
    var obiWan = $("#obiWan"),
        skywalker = $("#skywalker"),
        sidious = $("#sidious"),
        maul = $("#maul"),
        character = $("#character"),
        defender = $("#defender"),
        remaining = $("#remainingEnemies"),
        phase = 0,
        playerCharacter,
        defenderCharacter,
        defenderHP,
        defenderCP,
        playerHP,
        playerAP,
        originalPlayerAP = 0;

    function reset() {
        defender.empty();
        remaining.empty();
        character.empty();
        characters.append(obiWan);
        characters.append(skywalker);
        characters.append(sidious);
        characters.append(maul);
        phase = 0;
        player
        updateInfo();
    };

    function updateInfo() {
        $("#obiWan .health").text(obiWan.data("hp"));
        $("#skywalker .health").text(skywalker.data("hp"));
        $("#sidious .health").text(sidious.data("hp"));
        $("#maul .health").text(maul.data("hp"));
        console.log("updated info")
    };

    $(document).on("click", ".character", function () {
        if (phase == 0) {
            character.append(this);
            playerCharacter = $(this);
            playerHP = playerCharacter.data("hp");
            playerAP = playerCharacter.data("ap");
            originalPlayerAP = playerAP;
            var remainingChars = $("#characters .character");
            remaining.append(remainingChars);
            phase++;
        } else if (phase == 1) {
            defender.append(this);
            defenderCharacter = $(this);
            defenderHP = defenderCharacter.data("hp");
            defenderCP = defenderCharacter.data("cp");
            phase++;
        } else {
            console.log("characters already selected")
        };
    });

    $(document).on("click", "#attack", function () {
        if (phase == 0) {
            console.log(phase);
        } else if (phase == 1) {
            console.log(phase);
        } else {
            defenderHP -= playerAP;
            console.log(defenderHP);
            playerHP -= defenderCP;
            console.log(playerHP);
            updateInfo();
            console.log(playerAP);
            console.log(originalPlayerAP);
            playerAP += originalPlayerAP;
            console.log(playerAP);
        };
    });
    */

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

    var obiWan = new Character("Obi Wan Kenobi", 200, 10, 10, "./assets/images/ObiWan.jpg");
    var skywalker = new Character("Luke Skywalker", 150, 15, 15, "./assets/images/LukeSkywalker.png");
    var sidious = new Character("Darth Sidious", 100, 20, 20, "./assets/images/DarthSidious.jpg");
    var maul = new Character("Darth Maul", 175, 15, 15, "./assets/images/DarthMaul.png");
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
            baseAP = obiwan.ap;
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
            if (defender.hp < 0) {
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