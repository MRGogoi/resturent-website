import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:10,
        textAlign:"center",
        "& h4":{
            fontWeight:"bold",
            my:2,
            fontSize:"2rem",
        },
        "& p":{
          textAlign:'justify',
        },
        "@media(max-width:600)":{
          mt:0,
        "& h4":{
          fontSize:'1.5rem'
        }

        }
      }}>
        <Typography variant='h4'>
          Welcome to my Restaurent
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem exercitationem, sapiente expedita necessitatibus officia minima corrupti quam tempora blanditiis ad ipsa voluptas architecto enim porro aliquid laborum velit saepe quo debitis eos reiciendis dignissimos ducimus! Accusamus repellendus consequuntur placeat. Error iusto aliquam voluptatum quod non molestias vitae, cumque, repudiandae ut neque, quas porro in nemo quasi earum ullam. Quibusdam, numquam quidem placeat dicta nulla nemo fugit id ipsam delectus itaque cum nesciunt illo similique distinctio consequuntur. Eligendi culpa earum est.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis debitis similique esse, rem asperiores totam corrupti enim, eos assumenda quo explicabo odio, fugit quibusdam ea molestiae facere itaque voluptatem dignissimos? Est fugit velit dolore delectus molestias libero atque nam id a impedit ad magnam quis, deserunt voluptatem perferendis. Expedita et perspiciatis cum minima, iusto consectetur at sequi pariatur eligendi? Dignissimos eius quisquam nulla tempora omnis? Sequi, totam quisquam odit obcaecati est, non voluptatibus neque dolorum voluptate vel sed enim libero veritatis sunt alias quasi, dicta eos similique harum asperiores velit eveniet quia recusandae. Ab maxime magnam debitis corporis odit molestias.
        </p>
      </Box>
    </Layout>
  )
}

export default About
