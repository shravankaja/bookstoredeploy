import React from 'react'
import '../css/books.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Bookcard from '../components/Bookcard'
import { useEffect,useState } from 'react';
// import {getBooks } from '../services/dataservices.js'
import { connect } from 'react-redux';
import { fetchBooklist } from '../reducers/booklist/bookistActions';

function Books(props) {

let booksInPage=8  
let Reducerstate=props.booklistData.slice(0,booksInPage) ;
let keyword=props.searchquery
let page=props.page
if(page===2){
    Reducerstate=props.booklistData.slice(booksInPage,props.booklistData.length) 
}


const doSearch =(keyword)=>{
    Reducerstate=props.booklistData.filter((book)=>book.bookName===keyword )
    
  
   }


if (keyword!=""){


    doSearch(keyword)
    
}

    useEffect(() => {

     props.fetchBooklistdata()  
    }, [])




const whenclicked=(data)=>{

    props.whenclicked(data)
}


    return (
        <div className="books-container-main">
                <div className="books-container-inner">

                    <div className="books-titlebar">

                        <p id="title">Books</p> 
                        <div>
                        <Select className="sortmenu"
                        value="1"
                                >
                                <MenuItem value="1">Sort by relevance</MenuItem>
                                <MenuItem value="2">Sort by rating</MenuItem>

                        </Select>
                        </div>
                    </div>

                    <div  className="bookcard-container"  >

                        {  Reducerstate.length===0?<h1>Sorry,No books found!!</h1>:
                            Reducerstate.map((obj,index)=>{
                            return(
                                
                        <Bookcard  whenclicked={()=>whenclicked(obj)}   key={index} bookname={obj.bookName} rating={obj.rating} Author={obj.Author} price={obj.price} discountprice={obj.discountPrice} bookid={obj._id}/> )

                        })}
                                                   
                    </div>


                </div>
        
        </div>
    )
}

const mapStateToProps=state=>{
    return{

        booklistData:state.reducer.booklist
    }
}

const mapDispatchToProps=dispatch=>{ 
    return{

        fetchBooklistdata:  () => dispatch(fetchBooklist())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Books)
