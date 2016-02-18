


$(document).ready(function () {

    var form = $("#contact_form");
    var name = $("#name");
    var nameinfo = $("#nameInfo");
    var lastname = $("#lastname");
    var lastnameinfo = $("#lastnameInfo");
    var country = $("#country");
    var countryinfo = $("#countryInfo");
    var ciudad = $("#ciudad");
    var ciudadinfo = $("#ciudadInfo");
    var codpostal = $("#codpostal");
    var codpostalinfo = $("#codpostalInfo");
    var direccion = $("#direccion");
    var direccioninfo = $("#direccionInfo");
    var telephone = $("#telephone");
    var telephoneinfo = $("#telephoneInfo");
    var email = $("#email");
    var emailinfo = $("#emailInfo");
    var user = $("#user");
    var userinfo = $("#userInfo");
    var pass1 = $("#pass1");
    var pass2 = $("#pass2");
    var pass1info = $("#pass1Info");
    var pass2info = $("#pass2Info");

    name.blur(validateName);
    lastname.blur(validateLastname);
    country.blur(validateCountry);
    ciudad.blur(validateCiudad);
    codpostal.blur(validateCodpostal);
    direccion.blur(validateDireccion);
    telephone.blur(validateTelephone);
    email.blur(validateEmail);
    user.blur(validateUser);
    pass1.blur(validatePass1);
    pass2.blur(validatePass2);

    form.submit(function () {

        if (validateName() & validateLastname()  & validateCountry() & validateCiudad() & validateCodpostal()
                & validateDireccion() & validateTelephone() & validateEmail() & validateUser() & validatePass1() & validatePass2()) {

            return true;

        } else {

            return false;

        }

    });

    function validateName() {

        var regexp = /^[a-z ,.'-]+$/i;
        var a = $("#name").val();

        if (a == 0) {

            name.addClass("error");
            nameinfo.text("You have to write your name");
            nameinfo.removeClass("validate");

            return false;

        } else if (!regexp.test(a)) {

            name.addClass("error");
            nameinfo.text("Write the correct name.");
            nameinfo.removeClass("validate");

            return false;

        } else {

            name.removeClass("error");
            nameinfo.text("");

            $('#nameInfo').prepend('<img  src="img/validat.png" />')

            return true;

        }

    }


    function validateLastname() {

        var regexp = /^[a-z ,.'-]+$/i;
        var a = $("#lastname").val();

        if (a == 0) {

            lastname.addClass("error");
            lastnameinfo.text("You have to write your last name");
            lastnameinfo.removeClass("validate");

            return false;

        } else if (!regexp.test(a)) {

            lastname.addClass("error");
            lastnameinfo.text("Write the correct last name.");
            lastnameinfo.removeClass("validate");

            return false;

        } else {

            lastname.removeClass("error");
            lastnameinfo.text("");

            $('#lastnameInfo').prepend('<img  src="img/validat.png" />')

            return true;

        }

    }

    


    function validateCountry() {

        var a = $("#country").val();

        if (a == null || a == 0) {
            
            countryinfo.text("Select your country, please.");
            country.addClass("error");
            
            return false;
        }

        if (a > 0) {
            
            country.removeClass("error");
            countryinfo.text("");
            $('#countryInfo').prepend('<img  src="img/validat.png" />')
            
            return true;
        }


    }

    function validateCiudad() {

        var a = $("#ciudad").val();

        if (a.length < 1) {

            ciudad.addClass("error");
            ciudadinfo.text("Enter your city, please.");

            return false;

        } else {

            ciudad.removeClass("error");
            ciudadinfo.text("");
            $('#ciudadInfo').prepend('<img  src="img/validat.png" />')
            
            return true;

        }
    }


    function validateCodpostal() {

        var a = $("#codpostal").val();

        var regexp = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;

        if (!regexp.test(a)) {

            codpostal.addClass("error");
            codpostalinfo.text("Enter a valid postal code please.");

            return false;

        } else {

            codpostal.removeClass("error");            
            codpostalinfo.text("");
            $('#codpostalInfo').prepend('<img  src="img/validat.png" />')
            
            return true;

        }
    }

    function validateDireccion() {

        var a = $("#direccion").val();

        if (a.length < 1) {

            direccion.addClass("error");
            direccioninfo.text("Enter your address, please.");

            return false;

        } else {

            direccion.removeClass("error");
            direccioninfo.text("");
            $('#direccionInfo').prepend('<img  src="img/validat.png" />')
            
            return true;

        }
    }

    function validateTelephone() {

        var a = $("#telephone").val();
        //Prefijo internacional (+ seguido de 2 o 3 cifras), espacio en blanco y 9 cifras consecutivas
        var regexp = /^\+\d{2,3}\s\d{9}$/;
        if (a == 0) {

            telephone.addClass("error");
            telephoneinfo.text("Enter a telephone, please.");

            return false;

        } else if (!regexp.test(a)) {

            telephone.addClass("error");
            telephoneinfo.text("Enter a valid telephone please. Example: +34 666666666");

            return false;

        } else {

            telephone.removeClass("error");
            telephoneinfo.text("");
            $('#telephoneInfo').prepend('<img  src="img/validat.png" />')
            
            return true;

        }
    }

    function validateEmail() {

        var a = $("#email").val();
        // expression to validate email
        var regexp = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_­-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9­]+.[a-z]{2,4}$/;

        if (a == 0) {

            email.addClass("error");
            emailinfo.text("Enter a email, please.");

            return false;

        } else if (!regexp.test(a)) {

            email.addClass("error");
            emailinfo.text("Enter a valid email address please.");

            return false;

        } else {

            email.removeClass("error");
            emailinfo.text("");
            $('#emailInfo').prepend('<img  src="img/validat.png" />')
           
            return true;

        }
    }

    function validateUser() {

        var a = $("#user").val();
         // expression to validate username. Letters and numbers and 4-15 digits.
        var regexp = /^[a-z\d]{4,15}$/i;
        if (a == 0) {

            user.addClass("error");
            userinfo.text("The username can't be empty.");

            return false;

        } else if (!regexp.test(a)) {

            user.addClass("error");
            userinfo.text("Can only contain letters and numbers and 4-15 digits.");

            return false;

        } else {

            user.removeClass("error");
            userinfo.text("");
            $('#userInfo').prepend('<img  src="img/validat.png" />')
            
            return true;

        }
    }


    function validatePass1() {

        var a = $("#pass1").val();
        // expression to validate new pass. Must contain 6-12 digits and include a number.
        var regexp = /^(?=.*\d).{6,12}$/;
        if (a == 0) {

            pass1.addClass("error");
            pass1info.text("The password can't be empty.");

            return false;

        } else if (!regexp.test(a)) {

            pass1.addClass("error");
            pass1info.text("The password must contain 6-12 digits and include a number.");

            return false;

        } else {

            pass1.removeClass("error");
            pass1info.text("");
            $('#pass1Info').prepend('<img  src="img/validat.png" />')

            return true;

        }
    }

    function validatePass2() {

        var a = $("#pass2").val();
        
        // expression to validate confirm pass. Must contain 6-12 digits and include a number.
        var regexp = /^(?=.*\d).{6,12}$/;

        if (!regexp.test(a)) {

            pass2.addClass("error");
            pass2info.text("No text entered");

            return false;

        } else if (pass1.val() !== pass2.val()) {  // pass1 is equals pass2

            pass2.addClass("error");
            pass2info.text("Passwords do not match!");

            return false;

        } else {


            pass2.removeClass("error");
            pass2info.text("");
            $('#pass2Info').prepend('<img  src="img/validat.png" />')

            return true;
        }
    }




});
