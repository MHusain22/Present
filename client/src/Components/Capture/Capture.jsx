// import React, { useState, useCallback, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import Webcam from "react-webcam";
// import { Box } from "@mui/material";
// import { Button } from "@mui/material";
// import axios from "axios";

// const videoConstraints = {
//   facingMode: "user",
// };

// const ButtonLink = ({ children, onClick }) => (
//   <Button
//     onClick={onClick}
//     sx={{
//       backgroundColor: "var(--primary-color)",
//       color: "#fff",
//       borderRadius: "30px",
//       padding: "10px 20px",
//       fontFamily: "Krub, sans-serif",
//       fontSize: "22px",
//       fontWeight: 600,
//       "&:hover": {
//         backgroundColor: "var(--secondary-color)",
//         color: "white",
//       },
//     }}
//   >
//     {children}
//   </Button>
// );

// const Capture = ({ isLoggedIn }) => {
//   const [image, setImage] = useState("");
//   const webcamRef = useRef(null);

//   // Access the passed state from the previous page
//   const location = useLocation();
//   const { division, timeSlot, subject } = location.state || {};

//   const capture = useCallback(async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImage(imageSrc);
//     // console.log(imageSrc);
//     try {
//       // Send the image base64 string directly to the backend
//       const response = await axios.post(
//         "http://localhost:8000/predict",
//         { image: imageSrc },
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       console.log("results:", response.data);
//       // Handle the prediction results (set it to state, display it, etc.)
//     } catch (error) {
//       console.error("Error sending image:", error);
//     }
//   }, [webcamRef]);

//   return isLoggedIn ? (
//     <Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "20px",
//           gap: "20px",
//         }}
//       >
//         <Box>
//           {image === "" ? (
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               videoConstraints={videoConstraints}
//               style={{
//                 width: "100%",
//                 maxWidth: "300px",
//                 height: "auto",
//                 borderRadius: "10px",
//               }}
//             />
//           ) : (
//             <img
//               src={image}
//               style={{ width: "100%", maxWidth: "300px", borderRadius: "10px" }}
//             />
//           )}
//         </Box>
//         <Box>
//           {image !== "" ? (
//             <ButtonLink
//               onClick={(e) => {
//                 e.preventDefault();
//                 setImage("");
//               }}
//             >
//               Retake Image
//             </ButtonLink>
//           ) : (
//             <ButtonLink
//               onClick={(e) => {
//                 e.preventDefault();
//                 capture();
//               }}
//             >
//               Capture
//             </ButtonLink>
//           )}
//         </Box>

//         {/* Display the passed parameters */}
//         <Box
//           sx={{
//             textAlign: "center",
//             margin: "20px",
//             fontSize: "1rem",
//           }}
//         >
//           <p>
//             <b>Division : </b> {division || "N/A"}
//           </p>
//           <p>
//             <b>Time Slot : </b>
//             {timeSlot || "N/A"}
//           </p>
//           <p>
//             <b>Subject : </b>
//             {subject || "N/A"}
//           </p>
//         </Box>
//       </Box>
//     </Box>
//   ) : (
//     <p>Login to capture</p>
//   );
// };

// export default Capture;
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import Webcam from "react-webcam";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";

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
      "&:hover": {
        backgroundColor: "var(--secondary-color)",
        color: "white",
      },
    }}
  >
    {children}
  </Button>
);

const Capture = ({ isLoggedIn }) => {
  const [image, setImage] = useState("");
  const [capturing, setCapturing] = useState(false);
  const [results, setResults] = useState([]);
  const webcamRef = useRef(null);

  // Access the passed state from the previous page
  const location = useLocation();
  const { division, timeSlot, subject } = location.state || {};

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc);
    
    // try {
    //   // Send the image base64 string directly to the backend
    //   const response = await axios.post(
    //     "http://localhost:8000/predict",
    //     { image: imageSrc },
    //     {
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );

    //   console.log("results:", response.data);
    //   // Store the prediction results in state
    //   setResults((prevResults) => [...prevResults, response.data]);
    // } catch (error) {
    //   console.error("Error sending image:", error);
    // }
  }, [webcamRef]);

  // Automatically capture images every 2 seconds when capturing is true
  useEffect(() => {
    let interval;
    if (capturing) {
      interval = setInterval(() => {
        capture();
      }, 2000);
    }
    // Cleanup the interval when the component unmounts or capturing is stopped
    return () => {
      clearInterval(interval);
    };
  }, [capturing, capture]);

  return isLoggedIn ? (
    <Box>
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
        </Box>

        <Box>
          {capturing ? (
            <ButtonLink
              onClick={(e) => {
                e.preventDefault();
                setCapturing(false); // Stop capturing
              }}
            >
              Stop Capture
            </ButtonLink>
          ) : (
            <ButtonLink
              onClick={(e) => {
                e.preventDefault();
                setCapturing(true); // Start capturing
              }}
            >
              Start Capture
            </ButtonLink>
          )}
        </Box>

        {/* Display the passed parameters */}
        <Box
          sx={{
            textAlign: "center",
            margin: "20px",
            fontSize: "1rem",
          }}
        >
          <p>
            <b>Division : </b> {division || "N/A"}
          </p>
          <p>
            <b>Time Slot : </b>
            {timeSlot || "N/A"}
          </p>
          <p>
            <b>Subject : </b>
            {subject || "N/A"}
          </p>
        </Box>

        {/* Display the results */}
        <Box
          sx={{
            textAlign: "center",
            margin: "20px",
            fontSize: "1rem",
          }}
        >
          <b>Results:</b>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{JSON.stringify(result)}</li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  ) : (
    <p>Login to capture</p>
  );
};

export default Capture;
