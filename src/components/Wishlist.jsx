import React, { useEffect, useState } from 'react'
import Header from './Header'
import '../css/wishlist.css'
import { Getwishlist, removeWishitem } from '../services/dataservices'



function Wishlist() {
    const[wishlist,setWishlist]=useState([])

    useEffect(() => {
        loadWishlist()
       
    }, [])

    const deleteitem=(obj)=>{
        let product_id=obj.product_id._id
      
        removeWishitem(product_id).then((response)=>{
            console.log(response)
            loadWishlist()
        }).catch((error)=>{
            console.log(error)
        })

    }

    const loadWishlist=()=>{
        Getwishlist().then((response)=>{
            console.log(response)
            setWishlist(response.data.result)
        }).catch((error)=>{
            console.log((error))
        })


    }


    return (
        <div><Header/>
                <div className="path-wishlist">
                <p className="path-title-wishlist">
                    Home/ <span id="p_end">Wishlist</span></p>
                
            </div>
                <div className="wishlist-outercontainer">

                    <div className= "mywishlist-box"> 
                            <div className="wishlist-title">
                                <p id="wishlist-title"> My Wishlist({wishlist.length})</p>
                               
 
                            </div>

                            <div className="row_wishlistitem">
                           {wishlist.map((obj)=>{ return(<div key={obj._id} className="itemdetails-wishlist">
                                <div className="itemposter-wishlist">

                                </div>

                                <div className="book-details-wishlist">
                                    <p id="wishlistitem-title">{obj.product_id.bookName}</p>
                                    <p id="wishlistitem-author">{obj.product_id.author}</p>
                                    <p id="Price">Rs.{obj.product_id.price}</p> <span id="discount-price"> Rs.{obj.product_id.discountPrice + obj.product_id.price}</span>
                                </div>  
                                <div className="remove-from-wishlist" onClick={()=>deleteitem(obj)}>
                                        Remove
                                    </div>
                            </div>)})}

                            </div>

                           

                    </div>
                </div>


        </div>
    )
}

export default Wishlist
