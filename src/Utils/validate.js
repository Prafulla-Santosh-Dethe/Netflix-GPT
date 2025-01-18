export const checkValidData = (email, password, name) =>{
    
    const isNameValid = /^[A-Z\s]+$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(password);

    // coz for signIn we are not providing name == undefined so if tehre is name then only chcek name related conditions
    if(name){
        if(!isNameValid && !isEmailValid && !isPasswordValid) return "Name in Capital-Letters & Email not valid & password also not valid"
        if(!isNameValid && !isEmailValid) return "Name in Capital-Letters & Email not valid"
        if(!isNameValid && !isPasswordValid) return "Name in Capital-Letters & password not valid"
        if(!isNameValid) return "Name should have Capital-Letters"
    }
    if(!isEmailValid && !isPasswordValid) return "Email & Password not valid"
    if(!isEmailValid) return "Email-ID not valid";
    if(!isPasswordValid) return "Password is not valid"
     
    // no error
    return null;


}