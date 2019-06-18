
// after document.ready
$(function () {

    var mode = 0;
    const GAME = 0;
    const IA = 1;
    const CART = 2;
    const AES = 3;
    const DH = 4;

    // hide all projects at start except the game, which is the default.
    $(".ia").hide();
    $(".cart").hide();
    $(".aes").hide();
    $(".dh").hide();

    $("#game").click(function(event) {
        console.log(event);
        if(mode != GAME) {
            hideCurrProj();
            mode = GAME;
            $(".game").show();
        }
    })
    $("#ia").click(function (event) {
        console.log(event);
        if (mode != IA) {
            hideCurrProj();
            mode = IA;
            $(".ia").show();
        }
    })
    $("#cart").click(function (event) {
        console.log(event);
        if (mode != CART) {
            hideCurrProj();
            mode = CART;
            $(".cart").show();
        }
    })
    $("#aes").click(function (event) {
        console.log(event);
        if (mode != AES) {
            hideCurrProj();
            mode = AES;
            $(".aes").show();
        }
    })
    $("#dh").click(function (event) {
        console.log(event);
        if (mode != DH) {
            hideCurrProj();
            mode = DH;
            $(".dh").show();
        }
    })

    function hideCurrProj() {
        if(mode == GAME) {
            $(".game").hide();
        }
        else if(mode == IA) {
            $(".ia").hide();
        }
        else if(mode == CART) {
            $(".cart").hide();
        }
        else if(mode == AES) {
            $(".aes").hide();
        }
        else if(mode == DH) {
            $(".dh").hide();
        }
        else {
            console.log("Something went wrong. Mode does not correspond with an existing project.")
        }
    }

    function clearProject() {
        $(".project").empty();
    }

    function buildGame() {
        // first row: description of game
        var rows = $('<div class="row"><p>This is a game that I made in java. The player controls the cannon on top of the tower\
         and is try to defend against theinvaders. Click on the screen and the cannon will shoot in that direction.\
          The helicopters will constantly shoot at thetower, damaging it, and the enemies on the ground will walk towards\
           the tower and attack it when they reach it.</p></div>');

        // second row: in game screenshot from level 1
        rows.append($('<div class="row"><img src="screenshots/ingamelvl1.png"></div>'));

        // third row: description of shop
        rows.append($('<div class="row"><p> There are ten levels total and in between each level the player can buy upgrades in\
         a shop. Press on the name of an item to buy it.</p></div>'));

        // fourth row: screenshot of shop
        rows.append($('<div class="row"><img src="screenshots/gameshop.png" ></div ></div >'));

         $(".project").append(rows);
    }

    function buildInteractiveAlgorithms() {

    }

    function buildCart() {

    }

    function buildAES() {

    }

    function buildDH() {

    }
});