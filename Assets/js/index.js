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

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name === "") {
            return false;
        }
    })
    
    skillbars();
});

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