import React, { useEffect } from 'react'
import '../css/bookdetails.css'
import Header from './Header'
import { useLocation  } from "react-router-dom";
import {addtoCart ,addtoWish,getCartitems,Quantity,Getwishlist} from '../services/dataservices';
import { useHistory } from "react-router";
function Bookdetails() {

    const [addtobag, showButtons]=React.useState(false)
    const[cartlist,setCartlist]=React.useState([])
    const[fav,setfavView]=React.useState(false)
    const[wishlist,setWishlist]=React.useState([])
    const location = useLocation();
    console.log("Data recieved through push",location.state)

    let bookdata=location.state
    let bookid=bookdata._id
    console.log(bookid)

   


    useEffect(() => {
        loadcartitems()
        loadwishlist()

    }, [])


   const loadcartitems=()=>{
  
      getCartitems().then((response)=>{
            console.log(response,"cartlistloaded")
            setCartlist(response.data.result)
          
        }).catch((error)=>{
            console.log(error)
        }) 
        
    }

    useEffect(() => {
      cartCheck()
    }, [cartlist])

    let obj = cartlist.find(obj => obj.product_id._id ===bookid)
    
    
    

    const cartCheck = ()=>{
    
            console.log("searching...",obj)
    
        if(obj!=undefined){      
            console.log("Found a match in cart",obj)
            showButtons(true)
        }
    }

       
        const openAddtocart =()=>{       
        addtoCart(bookdata._id).then((response)=>{
            loadcartitems()
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }




const incrementcount=()=>{
    let cartid=obj._id
    let q=obj.quantityToBuy

    let qdata={
        "quantityToBuy":q+1,
        "cartid":cartid
      }
    Quantity(qdata).then((response)=>{
        console.log(response,"updated count")
        loadcartitems()
     }).catch((error)=>{
     console.log(error)
     })
}

const decrementcount=()=>{
    let cartid=obj._id
    let q=obj.quantityToBuy

    let qdata={
        "quantityToBuy":q-1,
        "cartid":cartid
      }

      if(q>1){
        Quantity(qdata).then((response)=>{
           console.log(response,"updated count")
           loadcartitems()
        }).catch((error)=>{
        console.log(error)
        })
        }else {
            alert("Quantity cannot be zero")
        }

    }

    const  addtoWishlist=()=>{
        addtoWish(bookdata._id).then((response)=>{
            console.log(response)
            loadwishlist()
        }).catch((error)=>{
            console.log(error)

        })
    }


    const loadwishlist=()=>{
        Getwishlist().then((response)=>{
            console.log(response)
            setWishlist(response.data.result)
        }).catch((error)=>{
            console.log((error))
        })


    }

    useEffect(() => {
    checkWishlist()
       
    }, [wishlist])

    let obj_w = wishlist.find(obj_w => obj_w.product_id._id ===bookid)
    const checkWishlist=()=>{
        console.log("searching...",obj_w)
    
        if(obj_w!=undefined){      
            console.log("Found a match in cart",obj_w)
            setfavView(true)
        }

    }
    let history=useHistory()
   const  gotoWishlist =()=>{
  
       history.push('/wish')
   }


    return (
    <div> <Header/>
        <div className="container-outer-bookdetail">
            <div className="bookdetail-container-inner">
                    <div className="bookdetail-titlebar">

                        <p className="path-title">
                           Home/ <span id="p_end">Book(01)</span>
                        </p>
                    </div>

                    <div className="content-box-bookdetail">

                        <div className="book-image-box">
                            <div className="border-image-box">
                                <div className="image-box-inner">
                                </div>

                            </div>

                            <div className="bottom-buttons">
                                {!addtobag?
                            <button data-testid ="addtobag"id="addtobag" onClick={openAddtocart}>ADD TO BAG</button>:
                                
                            <div id="addtocart">
                                <div className="less" onClick={decrementcount}>−</div>
                                <div className="countbox">{obj.quantityToBuy}</div>
                                <div className="more" onClick={incrementcount}>＋</div>

                            </div>}
                                    {!fav?<button id="wishlist" onClick={addtoWishlist}>❤ WISHLIST</button>:<button onClick={gotoWishlist} id="favourite">❤</button>}
                            </div>  
                        </div>



                        <div className="book-description-box"> 
                          
                            <div className="details-bybook">
                                <p id="title-book">{bookdata.bookName}</p>
                                <p id ="author-book">{bookdata.author}</p>
                                <div className="ratingbox-bookdetails">
                                    <span>4.3★</span> 
                                </div>
                                <span className="count-review-book">(20)</span>
                                <span className="Price-book">Rs.{bookdata.price}</span>
                                <span className="original-price-book">Rs.{bookdata.price + bookdata.discountPrice}</span>
                                <hr className="borderline"></hr>
                            </div>

                            <div className="details-para">
                                <ul id="ul-caption"><li>Book Detail</li></ul>
                                <p id="para-bookdescription"> {bookdata.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis omnis iste repellendus a id esse labore officiis, perferendis consequatur quisquam laudantium excepturi accusamus, provident molestiae aperiam asperiores quia dicta.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus, molestiae veritatis natus quidem similique, delectus dicta quo tenetur nam sequi fugit mollitia! Vero minima veniam nemo illo eos officia.</p>
                                <hr className="borderline"></hr>
                            </div>
                            
                            <div className="feedback">
                                <div className="feedback-title">
                                    <p>Customer Feedback</p>
                                </div>

                                <div className="rating-pad">
                                    <div className="overallrating">
                                       <p> Overall rating</p>

                                        <div id="stars">☆ ☆ ☆ ☆ ☆ </div>
                                    </div>

                                    <div className="writereview">
                                        Write your review
                                    </div>

                                    <div className="submitbutton">Submit</div>

                                </div>

                                

                            </div>

                        </div>
                        
                            
                           
                           
                    </div>


            </div>
        
            
        </div>
    </div>
    )
}

export default Bookdetails
