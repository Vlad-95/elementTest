$(document).ready(function() {

    //открытие формы
    $('.feedback-btn').click(function() {
        $('.hidden-layer').fadeIn();
        $('.form').fadeIn();
    });

    //закрытие формы
    $('.form__close').click(function() {
        $('.hidden-layer').fadeOut();
        $('.form').fadeOut();
    });

    //Валидация формы    

    // поле с именем
    $('#name').bind('input', function(evt) {
        var target = evt.target;

        target.setCustomValidity('');

        //только английские буквы
        if ($(this).val().match(/[а-яА-Я0-9]/)) {
            
            target.setCustomValidity('Только английские буквы');
        } else {
            return true
        }
  
        target.reportValidity(); 
    });

    //поле с email
    $('#email').bind('input', function(evt) {
        var target = evt.target;

        target.setCustomValidity('');

        //только английские буквы
        if ($(this).val().match(/[а-яА-Я]/)) {
            
            target.setCustomValidity('Только английские буквы и цифры');
        } else {
            return true
        }
  
        target.reportValidity(); 
    });

    //отправка формы
    $('.form').on('submit', function() {
        $.ajax({
            url: "sender.php", 
            method: "POST",
            data: $('.form').serialize(),

            error: function () {
                $('.form input, .form textarea').val('');
            },
            success: function () {
                   
                $('.form input, .form textarea').val('');
                   setTimeout(function () {
                       $('.hidden-layer').fadeIn();
                       $('.thanks').fadeIn();
                   }, 1500);
                $('.thanks__close').click(function () {
                    $('.hidden-layer').fadeOut();
                    $('.thanks').fadeOut();
                    clearTimeout();
                });
            }
        });
    })

});