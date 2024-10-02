import React from 'react';

const VideoPage = () => {
  const videoContainerStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    opacity : '1',
  };

  const backgroundVideoStyle = {
    position: 'absolute',
    top: 0,
    padding : '10px',
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '1',
     // Ensures video covers the screen without stretching
  };

  const responsiveStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    zIndex: 1,
    padding: '20px',
  };

  // Mobile-specific styles
  const mobileStyles = {
    '@media (max-width: 768px)': {
      videoContainerStyle: {
        height: '80vh', // Adjust height for mobile for better visibility
      },
      responsiveStyle: {
        fontSize: '1.5rem', // Smaller text size on mobile
        padding: '10px', // Less padding
      },
    },
  };

  return (
    <div style={{ ...videoContainerStyle, ...mobileStyles.videoContainerStyle }}>
      <video style={{ ...backgroundVideoStyle }} autoPlay muted loop>
        <source src="/images/5480226-uhd_3840_2160_25fps (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ ...responsiveStyle, ...mobileStyles.responsiveStyle }}>
        <p>Your Text Here</p>
      </div>
    </div>
  );
};

export default VideoPage;