import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography,Avatar } from "@mui/material";
import AI from '../asserts/images/ai.svg';
import CLOUD from '../asserts/images/cloud.svg';
import GROUP from '../asserts/images/Group.svg';
import SITE from '../asserts/images/sitemap.svg';
import PROCESS from '../asserts/videos/process.mp4';
import Footer from './footer.js';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(10),
    
  }));

function Home2()
{
    return(
        <>
            <Grid container sx={{ display:{xs:'none' , md:'flex'}}}>
                    <Grid item xs={3} >
                         <Item elevation={0}>
                         <Avatar src={GROUP} sx={{ width: 60, height: 60 }} variant="square"></Avatar>
                         <br></br>
                            <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'Black',fontWeight: 'bold'}}>
                                No investment required for <br></br> Infrastructure & licensing
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                                 It is a long established that a reader will be when looking at its layout.
                            </Typography>
                         </Item>
                    </Grid>
                    <Grid item xs={3}>
                          <Item elevation={0}>
                          <Avatar src={CLOUD} sx={{ width: 60, height: 50 }} variant="square"></Avatar>
                          <br></br>
                            <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'Black',fontWeight: 'bold'}}>
                                     Hosted on secured cloud<br></br>  infrastructure
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                                      It is a long established that a reader will be when looking at its layout.
                            </Typography>
                          </Item>
                    </Grid>
                    <Grid item xs={3}>
                           <Item elevation={0}>
                           <Avatar src={AI} sx={{ width: 60, height: 60 }} variant="square"></Avatar>
                           <br></br>
                            <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'Black',fontWeight: 'bold'}}>
                            Leverages the power of AI/ <br></br> ML
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                            It is a long established that a reader will be when looking at its layout.
                            </Typography>
                           </Item>
                    </Grid>
                    <Grid item xs={3}>
                           <Item elevation={0}>
                           <Avatar src={SITE} sx={{ width: 60, height: 60 }} variant="square"></Avatar>
                           <br></br>
                            <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'Black',fontWeight: 'bold'}}>
                            Collates structured & <br></br>Unstructured data inputs 
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                            It is a long established that a reader will be when looking at its layout.
                            </Typography>
                           </Item>
                    </Grid>
                    <Grid item xs={6} >
                           <Item elevation={0}>
                           <Typography sx={{fontSize: '20px',fontFamily: 'Arial, sans-serif' ,color :'#007CB0',fontWeight: 'bold'}}>
                            Workspace
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                            Build solutions for any business process quickly by leveraging the workspace. Use the<br></br>
                            drag-and-drop interface for uploading, model your data and create insightful reports<br></br>
                            and dashboards over your data.
                            </Typography>
                           </Item>
                    </Grid>
                    <Grid item xs={6}>
                           <Item elevation={0}>
                               <video width="600" height="150" controls >
                                        <source src={PROCESS} type="video/mp4" />
                                               Your browser does not support the video tag.
                                </video>
                           </Item>
                    </Grid>
            </Grid>


            <Grid container sx={{ display:{xs:'flex' , md:'none'}}}>
                    <Grid item xs={6} >
                         <Item elevation={0}>
                         <Avatar src={GROUP} sx={{ width: 60, height: 60 }} variant="square"></Avatar>
                         <br></br>
                            <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'Black',fontWeight: 'bold'}}>
                                No investment required for <br></br> Infrastructure & licensing
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                                 It is a long established that a reader will be when looking at its layout.
                            </Typography>
                         </Item>
                    </Grid>
                    <Grid item xs={6}>
                          <Item elevation={0}>
                          <Avatar src={CLOUD} sx={{ width: 60, height: 50 }} variant="square"></Avatar>
                          <br></br>
                            <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'Black',fontWeight: 'bold'}}>
                                     Hosted on secured cloud<br></br>  infrastructure
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                                      It is a long established that a reader will be when looking at its layout.
                            </Typography>
                          </Item>
                    </Grid>
                    <Grid item xs={6}>
                           <Item elevation={0}>
                           <Avatar src={AI} sx={{ width: 60, height: 60 }} variant="square"></Avatar>
                           <br></br>
                            <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'Black',fontWeight: 'bold'}}>
                            Leverages the power of AI/ <br></br> ML
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                            It is a long established that a reader will be when looking at its layout.
                            </Typography>
                           </Item>
                    </Grid>
                    <Grid item xs={6}>
                           <Item elevation={0}>
                           <Avatar src={SITE} sx={{ width: 60, height: 60 }} variant="square"></Avatar>
                           <br></br>
                            <Typography sx={{fontSize: '15px',fontFamily: 'Arial, sans-serif' ,color :'Black',fontWeight: 'bold'}}>
                            Collates structured & <br></br>Unstructured data inputs 
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                            It is a long established that a reader will be when looking at its layout.
                            </Typography>
                           </Item>
                    </Grid>
                    <Grid item xs={6} >
                           <Item elevation={0}>
                           <Typography sx={{fontSize: '20px',fontFamily: 'Arial, sans-serif' ,color :'#007CB0',fontWeight: 'bold'}}>
                            Workspace
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize: '14px',fontFamily: 'Arial, sans-serif' ,color :'#212529'}}>
                            Build solutions for any business process quickly by leveraging the workspace. Use the<br></br>
                            drag-and-drop interface for uploading, model your data and create insightful reports<br></br>
                            and dashboards over your data.
                            </Typography>
                           </Item>
                    </Grid>
                    <Grid item xs={6}>
                           <Item elevation={0}>
                               <video width="220" height="180" controls >
                                        <source src={PROCESS} type="video/mp4" />
                                               Your browser does not support the video tag.
                                </video>
                           </Item>
                    </Grid>
            </Grid>
            <Footer></Footer>
        </>
            );
}

export default Home2;