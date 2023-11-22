import React from "react";
import { Typography,Box,Link } from "@mui/material";

function Footer()
{
    return(
        <>
          <Box  component="main" sx={{ backgroundColor:'black', display:'flex' }}>
            
            <Typography sx={{fontSize: '12px',fontFamily: 'Arial, sans-serif' ,color :'White', marginLeft:'60px', marginRight:'20px',marginTop:'50px',marginBottom:'50px'}}>
            
            Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited, a UK private company limited by guarantee ("DTTL"), its network of member firms, and their related entities. DTTL and each of its member firms are legally separate and <br></br>
            independent entities. DTTL (also referred to as "Deloitte Global") does not provide services to user. Please see www.deloitte.com/about for a more detailed description of DTTL and its member firms.<br></br>
            This tool is a proprietary software/application-based tool developed and exclusively owned by Deloitte Touche Tohmatsu India LLP (DTTILLP). The tool enables collecting, compiling or obtaining information. User shall not copy, reproduce, modify,<br></br>
            distribute, disseminate the tool, nor will the user reverse engineer, decompile, dismantle or obtain access to the underlying formulae of the tool.<br></br>
            Unless specifically agreed with the Client, DTTILLP HAS NO OBLIGATION TO PROVIDE SUPPORT, UPDATES, UPGRADES, OR MODIFICATIONS TO THE TOOL.
            <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'White', marginLeft:'5px', marginRight:'20px',marginTop:'10px',marginBottom:'10px'}}>
            Copyright ©2023 Deloitte Touche Tohmatsu India LLP. Member of Deloitte Touche Tohmatsu Limited 
            <Link href="#"> Terms of Use </Link>
            </Typography>
            </Typography>
            
          </Box>
        </>
    );
}

export default Footer;