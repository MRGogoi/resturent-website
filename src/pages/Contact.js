import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { green } from '@mui/material/colors';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my:10,
        ml:10,
        "$ h4":{fontWeight:"bold",mb:2}
      }}>
        <Typography variant='h4'>
          Contact my Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque enim praesentium error! Incidunt quisquam, veniam magni eos eaque voluptatum voluptatibus iure aspernatur beatae ex eligendi exercitationem perferendis ipsam esse.</p>
      </Box>
      <Box sx={{m:5, width:"600px",
    ml:10,
  "@media (max-width:600px)":{
    width:"300px",
  }}}>
        <TableContainer component={Paper}>
          <Table aria-lebel="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black",color:'white'}} align='center'>
                  Contact Details
                  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                    <SupportAgentIcon sx={{
                      color:'red',
                      ml:5,
                      pt:2,}}/>123456676(tollfree)
                 </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                    <EmailIcon sx={{
                      color:'blue',
                      ml:5,
                      pt:2,}}/>Honeyvai@gmail.com
                 </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                    <CallIcon sx={{
                      color:'green',
                      ml:5,
                      pt:2,}}/>84644321343
                 </TableCell>
              </TableRow>
            </TableBody>

          </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
