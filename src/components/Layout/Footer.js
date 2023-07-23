import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'black',
    color:'white',p:3}}>
        <Box sx={{ my:4, 
        "& svg":{
            fontSize:"60px", 
            cursor:'pointer',
            mr:2,
            }
        // "& svg:'hover'":{

        //         // color: "goldenrod",
        //         // transform: "translateX(5px)",
        //         // transition: "all 400ms",
        //       },
        }}>
            <InstagramIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>
            <TwitterIcon/>
        </Box>
        <Typography
         variant='h5'
         sx={{"@media (max-width:600px)":
        {fontSize:"1rem"}}}
          >
            All  right Reserved @copy bikigogoi
        </Typography>
    </Box>
    </>

  )
}

export default Footer
