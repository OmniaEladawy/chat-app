import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const TextMsg = ({ item }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: item.incoming
              ? theme.palette.text
              : '#fff',
          }}
        >
          {item.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const MediaMsg = ({ item }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={item.img}
            alt={item.message}
            style={{ borderRadius: "10px", maxHeight: 210 }}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

const AudioMsg = ({ item }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={item.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: item.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: item.incoming ? theme.palette.text : "#fff",
          }}
        >
          {item.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const Timeline = ({ item }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {item.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

export { Timeline, TextMsg, MediaMsg, AudioMsg };
