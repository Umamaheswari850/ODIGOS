const validate = () => {
    //collecting values from input's to variables
    let username = document.contact.username.value;
    let mobile = document.contact.mobile.value;
    let email = document.contact.email.value;
    let message = document.contact.message.value;
    let user_status = mobile_status = email_status = message_status = false;
    let alphaExp = /^[A-Za-z]+$/
    let numExp = /^[0-9]+$/
    let emailExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    let messageExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    //validating the username
    if(username === ""){
        document.getElementById('usernote').innerHTML = "Name is Manadatory";
        user_status = false;
    }
    else{
        if(username.match(alphaExp)){
            document.getElementById('usernote').innerHTML = "";
            user_status = true;
        }
        else {
            document.getElementById('usernote').innerHTML = "Name in words please";
            user_status = false;
        }
    }
    //mobile number validation
    if(mobile === ""){
        document.getElementById('mobilenote').innerHTML = "Number is manadatory";
        mobile_status = false;
    }
    else{
        if(mobile.match(numExp)){
            if(mobile.length == 10){
                document.getElementById('mobilenote').innerHTML = "";
                mobile_status = true;
            }
            else{
                document.getElementById('mobilenote').innerHTML = "Enter 10 numbers only";
                mobile_status = false;
            }
        }
        else{
            document.getElementById('mobilenote').innerHTML = "plz enter numbers";
            mobile_status = false;
        }
    }

    if(email === ""){
        document.getElementById('emailnote').innerHTML = "Enter Your Mail";
        email_status = false;
    }
    else{
        if(email.match(emailExp)){
            document.getElementById('emailnote').innerHTML = "";
            email_status = true;
        }
        else{
            document.getElementById('emailnote').innerHTML = "Please Enter Your valid Mail";
            email_status = false;
        }
    }

    //based on requirement will pass the return value
    if(user_status === true && mobile_status === true && email_status === true && message_status === true){
        return true;
    }
    else{
        return false;
    }
}