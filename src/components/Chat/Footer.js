import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  Microphone,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import { useTheme, styled } from "@mui/material/styles";
import React from "react";
import { useSearchParams } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { ImageUpload } from "./ImageUpload";
import Recorder from "./Recorder";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
];

const ChatInput = ({
  handleRecording,
  isRecording,
  handleBlobURL,
  blobURL,
}) => {
  return (
    <StyledInput
      fullWidth
      placeholder={isRecording || blobURL ? "" : "Write a message..."}
      variant="filled"
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            {!isRecording && !blobURL ? (
              <InputAdornment>
                <ImageUpload />
              </InputAdornment>
            ) : null}

            <InputAdornment>
              <Recorder
                handleRecording={handleRecording}
                handleBlobURL={handleBlobURL}
              />
            </InputAdornment>
          </Stack>
        ),
      }}
    />
  );
};

const Footer = () => {
  const theme = useTheme();

  const isMobile = useResponsive("between", "md", "xs", "sm");

  const [searchParams] = useSearchParams();

  const [isRecording, setIsRecording] = React.useState(false);
  const [blobURL, setBlobURL] = React.useState("");
  
    const handleRecording = (data) => {
      setIsRecording(data);
  };
  
    const handleBlobURL = (data) => {
      setBlobURL(data);
    };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "transparent !important",
      }}
    >
      <Box
        p={isMobile ? 1 : 2}
        width={"100%"}
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          borderRadius: "0 0 14px 14px",
        }}
      >
        <Stack direction="row" alignItems={"center"} spacing={isMobile ? 1 : 3}>
          <Stack sx={{ width: "100%" }}>
            {/* Chat Input */}

            <ChatInput
              handleRecording={handleRecording}
              isRecording={isRecording}
              handleBlobURL={handleBlobURL}
              blobURL={blobURL}
            />
          </Stack>

          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%" }}
              alignItems={"center"}
              justifyContent="center"
            >
              <IconButton>
                <PaperPlaneTilt color="#ffffff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
