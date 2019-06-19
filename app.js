
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
        var curr = ".game";
        if(mode != GAME) {
            hideCurrProj(curr);
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

    function hideCurrProj(c) {
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

});