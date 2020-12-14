/* EMAIL FORM HANDLING */

$('.form-button input').click(function(e){
  // do not submit form
  e.preventDefault();
  // save value if the form field is not blank or the default
  if( $('#email').val() !== '' && $('#email').val() !== 'Email' ){
    var val = $('#email').val();
    // add email address to message
    $('.form-message span').text(val);
    // show message (initially hidden in CSS)
    $('.form-message').fadeIn();
  }
})



//accordian for function section//
$('.durr').click(function(){

  if( $(this).hasClass('curr') ){
    // if current selection is open, close accordion
    $(this).next().removeClass('more');
    $('.dislamp').removeClass('close');
    $('.disflash').removeClass('close');


    // and then remove current status
    $(this).removeClass('curr');
  } else {
    // if current selection is not open
    // remove current class from all headings
    $('.durr').removeClass('curr');
    // add class to the current selection
    $(this).addClass('curr');
    // remove class from all accordion content
    $('.accordion-content').removeClass('more');
    $('.dislamp').removeClass('close');
    $('.disflash').removeClass('close');

    // add class to the current accordion content
    $(this).next().addClass('more');
    $('.dislamp').addClass('close');

  }
})

//accordian for function section//
$('.comp').click(function(){

  if( $(this).hasClass('curr') ){
    // if current selection is open, close accordion
    $(this).next().removeClass('more');
     $('.dislamp').removeClass('close');
    $('.disflash').removeClass('close');

    // and then remove current status
    $(this).removeClass('curr');
  } else {
    // if current selection is not open
    // remove current class from all headings
    $('comp').removeClass('curr');
    // add class to the current selection
    $(this).addClass('curr');
    // remove class from all accordion content
    $('.accordion-content').removeClass('more');
     $('.dislamp').removeClass('close');
    $('.disflash').removeClass('close');

    // add class to the current accordion content
    $(this).next().addClass('more');
    $('.disflash').addClass('close');

  }
})

$('.faq').click(function(){

  if( $(this).hasClass('curr') ){
    // if current selection is open, close accordion
    $(this).next().removeClass('morefaq');
     
    // and then remove current status
    $(this).removeClass('curr');
  } else {
    // if current selection is not open
    // remove current class from all headings
    $('comp').removeClass('curr');
    // add class to the current selection
    $(this).addClass('curr');
    // remove class from all accordion content
    $('.accordion-contentfaq').removeClass('morefaq');
     

    // add class to the current accordion content
    $(this).next().addClass('morefaq');
  }

})
   
//clears value="EMAIL"

   $('input').click(function(){
  $('#email').attr('value', '');
  })


//button disappear

   $('.form-button').click(function(){
  $('.form-button').addClass('form-message');
  })


   $('.function').mouseenter(function(){
  $('.quote').hide();
  })





 

