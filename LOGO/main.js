

var playPause = anime({
    targets: "div.box",
    translateY: [
        {value : 140, duration : 700 },
        {value : 0, duration : 1000 },
    ],
    rotate :{
        value : "1turn",
        easing: "easeInOutSine",
    } ,

    backgroundColor : "#808080",
    delay : function(el, i, j){return i * 500},

    // 111111. below if set on "true" will pay automatically once page is open and if set on "false " will go w/event 22222 below to execute button control function
    autoplay : true,
});

playPause.play();


