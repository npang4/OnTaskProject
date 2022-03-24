import axios from 'axios'


const validateLogin = (email, password) => async dispatch => {
    console.log("ACTION: LOGIN");
    console.log(email);
    console.log(password);
    try {

        // call backend
        const res = await axios.get(`/api/login/login?email=${email}&password=${password}`);
        console.log("LOGIN WORKED");
        
        console.log(res.data)
        if(res.data){
            dispatch({
                type: 'login',
                payload: email
            })
        }
        else{
            dispatch({
                type: "false"
            })
        }
    }
    catch (e) {
        console.log("LOGIN ERROR")
        console.log(e)
    }
}

export {validateLogin}