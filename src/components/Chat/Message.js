import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data';
import { MediaMsg, TextMsg, Timeline } from './MsgTypes';

const Message = () => {
  return (
    <Box p={3}>
          <Stack spacing={3} >
              {Chat_History.map((item, index) => {
                  switch (item.type) {
                      case "divider":
                          return <Timeline item={ item} />
                      case "msg":
                          switch (item.subtype) {
                            case "img":
                              return <MediaMsg item={item} />;
                            case "audio":
                              break;
                            default:
                              return <TextMsg item={item} />;
                          }
                          break;
                      default:
                          <></>
                   }
              })
}
      </Stack>
    </Box>
  );
}

export default Message
