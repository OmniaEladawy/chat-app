import { Box, Stack } from "@mui/material";
import React from "react";
import { ChatFooter, ChatHeader } from "../../components/Chat";
import Conversation from "../../components/Chat/Conversation";

const GeneralApp = () => {

  return (
    <Stack direction={"row"} sx={{ display: "flex", justifyContent: "center" , paddingY:'20px' , height:'100vh'}}>
      <Box
        sx={{
          width: "90vw",
          height: "calc(100%-40px)",
          borderRadius: "20px",
        }}
      >
        <ChatHeader />
        <Conversation />
        <ChatFooter />
     
      </Box>
    </Stack>
  );
};

export default GeneralApp;
