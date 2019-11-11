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

    backgroundColor : "rgb(72, 72, 73)",
    color: "rgb(64, 9, 231)",
    delay : function(el, i, j){return i * 500},


    autoplay : true,
});

playPause.play();


// /////////////////MODDAL///////////////////////////////
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })



