import axios from 'axios';
let header = { headers: { 'x-access-token': localStorage.getItem('token') } }

export const  getBooks=async()=>{

// let response=await axios.get("http://localhost:3004/books")
let response=await axios.get("https://new-bookstore-backend.herokuapp.com/bookstore_user/get/book")
console.log("servicespage",response)
return response

}



export const addtoCart=async(product_id)=>{
console.log(header)
let response=await axios.post(`https://new-bookstore-backend.herokuapp.com/bookstore_user/add_cart_item/${product_id}`,null )
console.log("addtocart",response)
return response
}


export const getCartitems =async()=>{

    let response= await axios.get("https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items")
    return response
}

export const Quantity=async(qdata)=>{
    let cartItem_id=qdata.cartid
    let response = await axios.put(`https://new-bookstore-backend.herokuapp.com/bookstore_user/cart_item_quantity/${cartItem_id}`,qdata)
    console.log(response)
    return response
    }
    
export const Removeitem=async(cartItem_id)=>{

let response=await axios.delete(`https://new-bookstore-backend.herokuapp.com/bookstore_user/remove_cart_item/${cartItem_id}`)
return response
}


export const Getwishlist =async()=>{

    let response=await axios.get("https://new-bookstore-backend.herokuapp.com/bookstore_user/get_wishlist_items",header)
    return response
}

export const addtoWish=async(product_id)=>{
    let response=await axios.post(`https://new-bookstore-backend.herokuapp.com/bookstore_user/add_wish_list/${product_id}`,null)
    console.log("addtowishlist",response)
    return response
    }

    export const removeWishitem=async(product_id)=>{

        let response=await axios.delete(`https://new-bookstore-backend.herokuapp.com/bookstore_user/remove_wishlist_item/${product_id}`)
        return response
        }
        
    export const updateDetails=async(data)=>{

        let response=await axios.put('https://new-bookstore-backend.herokuapp.com/bookstore_user/edit_user',data)    
        return response
    
    }

    export const sendOrder=async(data)=>{

        let response=await axios.post("https://new-bookstore-backend.herokuapp.com/bookstore_user/add/order",data)
        return response

    }