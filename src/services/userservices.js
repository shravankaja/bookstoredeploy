import axios from 'axios';
//  let header = { headers: { 'Authorization': localStorage.getItem('token') } }

export const signUp=async(obj)=> {

    let response = await axios.post("https://new-bookstore-backend.herokuapp.com/bookstore_user/registration",obj)
    console.log(response)
    return response
}   

export const login=async(obj)=> {

    let response = await axios.post("https://new-bookstore-backend.herokuapp.com/bookstore_user/login",obj)
    console.log(response)
    return response
}


