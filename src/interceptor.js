import axios from 'axios'

axios.interceptors.request.use(req => {
    console.log(req.url)
   
    // if(req.url.includes('https://new-bookstore-backend.herokuapp.com/bookstore_user/login')){
    //     axios.interceptors.response.use(resp => {
    //        alert(resp.data.message)
    //         return resp;
    //     })
    // }

if(localStorage.getItem('token')!=undefined){

    if(req.url.includes('bookstore_user/add_cart_item/') || req.url.includes('bookstore_user/add/order') || req.url.includes('bookstore_user/remove_cart_item/')) {
        req.headers.token = localStorage.getItem('token')
        console.log(req)
        return req;
    }
    else if(req.url.includes('bookstore_user/cart_item_quantity/') || req.url.includes('/bookstore_user/get_cart_items') ||req.url.includes('bookstore_user/add_wish_list/') ||req.url.includes('bookstore_user/remove_wishlist_item/')||req.url.includes('bookstore_user/edit_user') ) {
        req.headers.token = localStorage.getItem('token')
        console.log(req)
        return req;
    }
    else {
        return req;
    }
    
    }else{
        alert("Invalid Username/Password Pleae try again")
     }    

       
    
})

axios.interceptors.response.use(resp => {
    if(resp.status!= 200) {
       alert("Error,Something Went Wrong")
    }
    console.log(resp)
    return resp;
})