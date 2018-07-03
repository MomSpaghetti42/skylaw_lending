 $(document).ready(function(){
    $(".menu-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $(".aye").on("click", function (event){
        var abc = $('.aye-field').attr('type');
        if (abc == "password") {$('.aye-field').attr('type', 'text');}
        else {$('.aye-field').attr('type', 'password');}
    });
    
    $('.menu-button').on("click", function (event){
        $(this).siblings(".respon-menu__nav").slideToggle();
    });
    $('.close-button').on("click", function (event){
        $('.main_block').css('filter','none');
        $('.blur').css('display','none');
    });
});

function openReg(){
    $('.main_block').css('filter','blur(5px)');
    $('#reg-modal').css('display','block');
};
function openToMe(){
    $('.main_block').css('filter','blur(5px)');
    $('#to_me').css('display','block');
};