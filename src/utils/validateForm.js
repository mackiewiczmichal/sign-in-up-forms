const validateForm = (values) =>{
    let formErrors = {}
    if(values.hasOwnProperty('fullName')){
        if(!values.fullName){
            formErrors.fullName = "Fullname is required"
        }else if(values.fullName.split(' ').length < 2){
            formErrors.fullName = "Missing last name"
        }
    }
    if(values.hasOwnProperty('email')){
        if(!values.email){
            formErrors.email = "Email is required"
        }else if(!/\S+@\S+\.\S+/.test(values.email)){
           formErrors.email = "Email is invalid"
        }
    }
    if(values.hasOwnProperty('password')){
        if(!values.password){
            formErrors.password = "Password is required"
        }
        else if(values.password.split('').length < 8){
            formErrors.password = "Password is too short"
        }
    }
    if(values.hasOwnProperty('password') && values.hasOwnProperty('passwordConfirm')){
        if(values.password !== values.passwordConfirm){
            formErrors.passwordConfirm = "Passwords does not match";
        }
    }

    
    return formErrors
}
export default validateForm;