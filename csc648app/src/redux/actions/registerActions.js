import axios from "axios";

// Function to validate registration by dispatching the
// name, email, and password to the database
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
        
       if(res.data){
           dispatch({
               type: "true"
           })
       }
       else{
           dispatch({
               type: "false"
           })
       }

    }
    catch(e){
        console.log("REGISTER ERROR");
        console.log(e);
       
    }

}

export {validateRegister}

