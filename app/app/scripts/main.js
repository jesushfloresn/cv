$(document).ready(function(){

  addAnimations();

  //---

  $('#ysImgModal').on('show.bs.modal', function (event) {
    var img = $(event.relatedTarget) // Button that triggered the modal
    var infoTxt = img.data('name') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Mostrando: ' + infoTxt);
    modal.find('#ysImgModalShow').attr('src', img.attr('src'));
  })

});


function addAnimations(){
  $('.ys-content-infoperfil').removeClass('ys-hidden').animateCss('zoomIn', function(){
    $('.ys-content-infoperfil .ys-row-photo img').addClass('animated bounceIn');
  });
  $('.ys-contentinfo').addClass('scrollflow -slide-left');
}


//---
$.fn.extend({
  animateCss: function (animationName, callback) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
      if (callback) {
        callback();
      }
    });
    return this;
  }
});
