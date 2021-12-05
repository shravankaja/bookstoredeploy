import React from 'react'
import '../css/header.css'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useHistory } from "react-router";
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';


function Header(props) {

const [anchorEl, setAnchorEl] = React.useState(null);


    let history=useHistory()
        const gotocart=()=>{
        history.push("/cart")        
        }

        const gotowishlist=()=>{
            history.push('/wish')
        }

        const gotohome=()=>{
            history.push("/home")    
        }

        const handleClick = (event) => {
            setAnchorEl(anchorEl ? null : event.currentTarget);
          };

          const open = Boolean(anchorEl);
          const id = open ? 'simple-popper' : undefined;
          

          const takeSearchkey=(event)=>{

                props.datafromHeader(event)

          }


        

    return (
        <div className="header-container">
            
            <div className="header-innerbox">

                <div className="logo_title" onClick={gotohome}>
                    <div className="logo">

                    </div>
                    <div className="title" >
                        <p> Bookstore</p>
                    </div>
                  
                </div>

                <div className="searchbar">
                <IconButton aria-label="search"><SearchIcon color="action"/></IconButton>
                
                <input data-testid="searchbar"id="searchbar" type="text"  placeholder="Search" onChange={takeSearchkey}/>
    
                     

                </div>

                    <div className="right-options">
                            <div className="profile" onClick={handleClick} >
                            <PermIdentityOutlinedIcon  className="righticon"  fontSize="medium" />
                                Profile
                                <Popper id={id} open={open} anchorEl={anchorEl}>
                                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',borderColor: '#8F2B2F'}}>
                                   <p onClick={gotowishlist}> ♥ wishlist </p>
                                </Box>
                            </Popper>

                            </div>

                            <div className="cart" onClick={gotocart}>
                            <ShoppingCartOutlinedIcon  className="righticon" fontSize="medium"/>
                                Cart
                            </div>
                    </div>

            </div>

        </div>
    )
}

export default Header
