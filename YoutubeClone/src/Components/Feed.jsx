import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';

import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((result) => {
      const filteredVideos = result.contents.map(item => item.video); // Extract video objects
      setVideos(filteredVideos);
      console.log("Rendering Videos:", filteredVideos);
    });
  }, [selectedCategory]);


  return (
    <Stack sx={{flexDirection : {sx : 'column', md:'row'}}}>
      <Box sx={{height : {sx : 'auto' , md:'92vh'} , borderRight : '1px solid #3d3d3d' , px : {sx : 0, md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    <Typography className='copyright' variant='body2' sx={{mt : 1.5 , color : '#fff'}}>

      Copyright 2023 Aaqib Khan
    </Typography>
      </Box>

      <Box p={2} sx={{overflowY : 'auto' , height : '90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color : '#fff'}}>
          {selectedCategory} <span style={{color : '#FC1503'}}>Videos</span>
        </Typography>
        <Videos videos={videos || []} />
      </Box>
    </Stack>
  )
}

export default Feed