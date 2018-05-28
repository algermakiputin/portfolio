$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('1000');
            $('.filter').filter('.'+value).show('3000');
            
        }

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });

    $("#contact_form").submit(function(e) {

        var error = formValidate();

        if (error !== "") {
            $("#" + error).focus();
            return false;
        }
    })

    $("#contact_form input, #contact_form textarea").keypress(function() {
        $(this).parent().find(".error").fadeOut();
    })
    
    skillbars();

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#contact_image").css('background-image','../images/contact1_mobile.png');
    }
});

function formValidate () {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var error = "";

    if (name === "") {
        $("#name_msg").fadeIn();
        $("#name_error").text('Name is Required');
        error = "name";

    }if (name.length < 3) {

        if(error === "") {
            error = "name";
            $("#name_msg").fadeIn();
            $("#name_error").text('Minum of 2 characters');
        }

    }if (email === "") {
        $("#mail_msg").fadeIn();
        $("#email_error").html('Email is required');
        if(error === "")
            error = "email";
    }else if (!validateEmail(email)) {
        
      
    
        $("#email_error").html('Invalid Email');
        $("#mail_msg").fadeIn();
        error = "email";
            

    }if (message === "") {
        $("#message_msg").fadeIn();
        $("#message_error").text('Message is Required');
        if(error === "")
            error = "message";
    }

    return error;
}

function skillbars () {


    $('#s-html').simpleSkillbar({

            width: 85 // 80%,
    });

    $('#s-css').simpleSkillbar({
 
            width: 90 // 80%
    });

    $('#s-js').simpleSkillbar({
 
            width: 80 // 80%
    });

    $('#s-php').simpleSkillbar({
 
            width: 88 // 80%
    });

    $('#s-wordpress').simpleSkillbar({
 
            width: 80 // 80%
    });

    $('#s-seo').simpleSkillbar({
 
            width: 75 // 80%
    });

    $('#s-codeigniter').simpleSkillbar({
 
            width: 90 // 80%
    });

    $('#s-laravel').simpleSkillbar({
 
            width: 78 // 80%
    });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}