import React from "react";
import image from '../asserts/images/MicrosoftTeams.png';
import { Typography,Box ,Toolbar,Stack,Button} from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Home2 from "./home2";
import NavBar from './NavBar.js';

function HomePage()
{
    return(
<>
<NavBar></NavBar>
<Box  component="main" sx={{ backgroundColor:'black', display:'flex' }}>
    <Toolbar />
        <Typography sx={{marginTop:'200px',fontSize: '40px',fontFamily: 'Arial, sans-serif' ,color :'white',fontWeight: 'bold', marginLeft:'60px'}}>
        Take an Intelligent <br></br>
        Approach to Risk with RIA. 
           <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'white',fontWeight: 'bold'}}>
               <br></br>
               An “Analytics As A Service”, fully secure, ERP agnostic risk <br></br>
               analytics platform. It enables organizations to leverage cutting <br></br>
               edge technology and high quality analytical insights to identify,<br></br>
               assess, and optimize their risk exposures, improve performance, <br></br>
               increase profits, and accelerate growth.
           </Typography> 
           <Toolbar />
           <Stack spacing={2} direction="row">
                <Button variant="contained">Explore</Button>
                <Button variant="outlined" startIcon={<FileDownloadOutlinedIcon />}>Brochure</Button>
            </Stack>
        </Typography>
        <Box sx={{ display:{xs:'none' , md:'flex', marginLeft:'250px', marginTop:'150px',marginBottom:'50px', marginRight:'10px'}}}>
                <img  width ='450px' height= '450px'src={image} alt='Not found'/>
        </Box>
       
</Box>
<Box sx={{ display:{xs:'flex' , md:'none'}, backgroundColor:"black"}}>
    <img width ='800px' height= '600px'src={image} alt='Not found'/>
</Box>
<Home2></Home2>
</>
);
}

export default HomePage;