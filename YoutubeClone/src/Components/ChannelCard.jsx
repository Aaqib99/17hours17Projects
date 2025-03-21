import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/contants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  const channelId = channelDetail?.author?.channelId;
  const channelTitle = channelDetail?.author?.title;
  const avatarUrl = channelDetail?.author?.avatar[0]?.url || demoProfilePicture;

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            image={avatarUrl}
            alt={channelTitle}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {channelTitle}
            <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
