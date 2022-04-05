import axios from "axios";

const validateRegister = (name, email, password) => async dispatch => {
    console.log("ACTION: REGISTER");
    console.log(name);
    console.log(email);
    console.log(password);

    // TODO: add boolean return true if register worked
    try{
        // call backend and add 
        const res = await axios.post(`/api/register?name=${name}&email=${email}&password=${password}`);
        console.log("REGISTER WORKED");
        console.log(res.data);

    }
    catch(e){
        console.log("REGISTER ERROR");
        console.log(e);
    }

}

export {validateRegister}

