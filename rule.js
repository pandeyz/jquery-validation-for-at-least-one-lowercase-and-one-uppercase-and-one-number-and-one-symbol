http://javaninja.net/2015/06/jquery-validation-of-passwords-with-multiple-validations/

/**
 * Custom validator for contains at least one lower-case letter
 */
$.validator.addMethod("atLeastOneLowercaseLetter", function (value, element) {
    return this.optional(element) || /[a-z]+/.test(value);
}, "Must have at least one lowercase letter");
 
/**
 * Custom validator for contains at least one upper-case letter.
 */
$.validator.addMethod("atLeastOneUppercaseLetter", function (value, element) {
    return this.optional(element) || /[A-Z]+/.test(value);
}, "Must have at least one uppercase letter");
 
/**
 * Custom validator for contains at least one number.
 */
$.validator.addMethod("atLeastOneNumber", function (value, element) {
    return this.optional(element) || /[0-9]+/.test(value);
}, "Must have at least one number");
 
/**
 * Custom validator for contains at least one symbol.
 */
$.validator.addMethod("atLeastOneSymbol", function (value, element) {
    return this.optional(element) || /[!@#$%^&*()]+/.test(value);
}, "Must have at least one symbol");
Once the validators were created, now it was time to use them.

<script>
    $(function () {
        $("#change-password").validate({
            rules: {
                password: {
                    required: true,
                    atLeastOneLowercaseLetter: true,
                    atLeastOneUppercaseLetter: true,
                    atLeastOneNumber: true,
                    atLeastOneSymbol: true,
                    minlength: 8,
                    maxlength: 40
                }
            }
        });
    });
</script>
An alternative way to specify the rules is

$("#password").rules("add", {
    required: true,
    minlength: 8,
    maxlength:40,
    atLeastOneLowercaseLetter: true,
    atLeastOneUppercaseLetter: true,
    atLeastOneNumber: true,
    atLeastOneSymbol: true
});