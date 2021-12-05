import React from 'react'
import Books from './Books.jsx'
import Header from './Header.jsx'   
import { useHistory } from "react-router";
import capitalize from '@mui/utils/capitalize';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../css/home.css'
import { connect } from 'react-redux';
function Home(props) {

    const[keyword,setKeyword]=React.useState("");
    const[page,setPage]=React.useState(1);

let bookArray=props.booklistData

let history=useHistory()

 const showDetails =(data)=>{
    history.push("/bookdetails",data)
    console.log("data pushed",data)

 }  
 
 const searchKey =(event)=>{ 
    setKeyword(capitalize(event.target.value))
   
}

const handleChange=(event,value)=>{
    console.log(value)
    setPage(value)

}

// console.log("keyword set",keyword)
    return (
        <div>
            <Header datafromHeader={(event)=>searchKey(event)}/>
           
            <Books whenclicked={(data)=>showDetails(data)} searchquery={keyword} page={page} /> 
            
            <div className="footer" >
            <Pagination page={page} onChange={handleChange} shape="rounded"  size="large" id="pagination" count={Math.round((bookArray.length)/8)} />
            </div>
           
        </div>
    )
}

const mapStateToProps=state=>{
    return{

        booklistData:state.reducer.booklist
    }
}


export default connect(mapStateToProps)(Home)
