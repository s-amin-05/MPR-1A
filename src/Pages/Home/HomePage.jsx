import React from 'react';

const HomePage = ({ title = "Home" }) => {
    const url = "https://home-sage-pi.vercel.app/";
    
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src={url}
        title={title}
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
};

export default HomePage;
