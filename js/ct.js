(function ($) {
    "use strict";

    var input = $('.validate-input .ct-input-box');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .ct-input-box').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);


function Validation() {

    var field1 = $("#name").val();
    var field2 = $("#email").val();
    var field3 = $("#message").val();

    if (field1 == "") {
        alert('Please Fill Your Name');
        document.getElementById("nameField").focus();
        return false;
    }
    if (field2 == "") {
        alert('Please Fill Your Email');
        document.getElementById("emailField").focus();
        return false;
    }

    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSc8VcyrtpdQ6DoI5qH2OMU6vKZjOUH7htp_QIP1BhD-Db-lPg/formResponse?",
        data: {
            "entry.2005620554": field1,
            "entry.1045781291": field2,
            "entry.839337160": field3
        },
        type: "POST",
        dataType: "xml",
        success: function (d) {},
        error: function (x, y, z) {

            $('#success-msg').show();
            $('#form').trigger("reset");

        }
    });
    return false;
}