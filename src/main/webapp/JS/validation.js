function validation() {
    var userName = document.regForm.fname.value;

    if (userName.trim().length <= 1) {
        alert("incorrect first name");
        //focus on element
        document.regForm.fname.focus();
        return false;
    }
    var pas1 = document.regForm.pwd1.value;
    var pas2 = document.regForm.pwd2.value;

    if (pas1.length < 8) {
        alert("Your password less then 8 symbols!");
        //focus on element
        document.regForm.pwd1.focus();
        return false;
    }
    if (pas1 != pas2) {
        alert("Your password 1 is not equal with password 2!");
        //focus on element
        document.regForm.pwd1.focus();
        return false;
    }
    //email
    var userName = document.regForm.email.value;

    if (email.trim().length <= 1) {
        alert("empty email");
        //focus on element
        document.regForm.email.focus();
        return false;
    }else {
        if(!validateEmail()){
            return false;
        }
    }

    return true;
}
function validateEmail() {
    var email = document.regForm.email.value();
    var pos1 = email.indexOf("@");
    var pos2 = email.lastIndexOf(".");//John.Jhonson@gmail.com
    if (pos < 1 || (pos2 - pos1 < 2)) {

        alert("Incorrect Email");
        document.regForm.focus();
        return false;
    }
    return true;
}