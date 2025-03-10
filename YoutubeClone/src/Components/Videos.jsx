import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos = [] }) => {
  console.log("Rendering Videos:", videos); // Debugging

  if (!videos.length) {
    return <h2 style={{ color: "#fff" }}>No Videos Found</h2>; // Show message if empty
  }

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {<VideoCard video={item} />}
          {<ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

