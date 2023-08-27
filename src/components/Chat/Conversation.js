import { Box, Stack } from '@mui/material'
import React from 'react'
import Message from './Message';

const Conversation = () => {
    return (
      <Stack
        sx={{
          height: "calc(100% - 140px)",
          backgroundColor: "#eceff5",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          overflowY: 'scroll'
        }}
      >
        <Box>
          <Message />
        </Box>
      </Stack>
    );
}

export default Conversation
