import React from 'react'
import Header from './Header'
import '../css/orderplaced.css'
function Orderplaced() {
    return (
        <div><Header/>
            
            <div className="order-container">

                <div className="inner-div">
                        <div className="image-1">

                        </div>

                        <div className="success-message">
                            <p >Order Placed Successfully</p>
                        </div>
                        <div className="image-2">

                        </div>

                         <div className="details-box">
                             <p>hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</p>
                        </div> 

                        <div className="table-box">
                                <div className="row-1-box">
                                    <p>Email us</p>
                                    <p>Contact Us</p>
                                    <p>Address</p>
                                </div>

                                <div className="row-2-box">
                                    <div id="col"><p>admin@bookstore.com</p></div>
                                    <div id="col"><p>+91 8163475881</p></div>
                                    <div id="col"> <p>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</p></div>
                                </div>

                        </div>
                </div>


            </div>

                <footer>

                </footer>

        </div>
    )
}

export default Orderplaced
