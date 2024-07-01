import React, { useState, useCallback, useRef } from "react";
import Webcam from "react-webcam";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const videoConstraints = {
  facingMode: "user",
};

const ButtonLink = ({ children, onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      backgroundColor: "var(--primary-color)",
      color: "#fff",
      borderRadius: "30px",
      padding: "10px 20px",
      fontFamily: "Krub, sans-serif",
      fontSize: "22px",
      fontWeight: 600,
      '&:hover': {
        backgroundColor: 'var(--secondary-color)',
        color: 'white',
      },
    }}
  >
    {children}
  </Button>
);

const Capture = () => {
  const [image, setImage] = useState("");
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Box>
        {image === "" ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        ) : (
          <img src={image} style={{ width: "100%", maxWidth: "300px", borderRadius: "10px" }} />
        )}
      </Box>
      <Box>
        {image !== "" ? (
          <ButtonLink
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
          >
            Retake Image
          </ButtonLink>
        ) : (
          <ButtonLink
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
          >
            Capture
          </ButtonLink>
        )}
      </Box>
    </Box>
  );
};

export default Capture;
