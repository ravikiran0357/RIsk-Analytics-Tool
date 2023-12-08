import React from "react";
import NavBar from './NavBar.js';
import Footer from './footer.js';
import { Box, Typography, Divider, Grid, Paper, styled, TextField, Tooltip, Toolbar } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
   borderRadius: '0px',
}));

function Registration() {

   return (
      <>
         <NavBar></NavBar>
         <Box component="main" sx={{ backgroundColor: 'White' }}>
            <Typography sx={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', marginLeft: '50px', marginTop: '20px', marginBottom: '20px' }}>
               Registration
               <Divider style={{ height: '1px', width: '100%' }} />
            </Typography>
            <Box sx={{ marginLeft: '50px' }}>
               <Grid container spacing={2}>
                  <Grid item xs={4} sx={{ height: '700px' }} >
                     <Item>
                        
                        <Typography sx={{ marginLeft: '25px', marginBottom: '10px', marginTop: '20px' }}>User Details</Typography>
                        <Divider></Divider>
                        <Box component="form" sx={{'& > :not(style)': { m: 3, width: '50ch' },}}noValidate autoComplete="off">
                           <Typography>Name*</Typography>
                           <TextField id="outlined-basic"  variant="outlined" />
                           <TextField id="filled-basic" label="Filled" variant="filled" />
                           <TextField id="standard-basic" label="Standard" variant="standard" />
                        </Box>
                     </Item>
                  </Grid>
                  <Grid item xs={4} >
                     <Item>
                        <Typography sx={{ marginLeft: '25px', marginBottom: '10px', marginTop: '20px' }}>Organization Details</Typography>
                        <Divider></Divider>
                        <Box>

                        </Box>
                     </Item>
                  </Grid>
                  <Grid item xs={4}>
                     <Item>
                        <Typography sx={{ marginLeft: '25px', marginBottom: '10px', marginTop: '20px' }}>Solutions Offered</Typography>
                        <Divider></Divider>
                        <Box>

                        </Box>
                     </Item>
                  </Grid>
               </Grid>
            </Box>

         </Box>


      </>
   );
}
export default Registration;