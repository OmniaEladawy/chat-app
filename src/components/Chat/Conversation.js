import { Box, Stack } from '@mui/material'
import React from 'react'

const Conversation = () => {
    return (
      <Stack
        sx={{
          height: "calc(100% - 140px)",
          backgroundColor: "#ececec",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box>conversation</Box>
      </Stack>
    );
}

export default Conversation
