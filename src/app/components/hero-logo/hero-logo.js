import React from "react";

const HeroLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "Modena",
          fontSize: "208px",
          color: "#000000",
          marginBottom: "32px", // Add margin bottom for spacing
        }}
      >
        Basma
      </div>
      <div
        style={{
          fontFamily: "AlbertFont",
          fontSize: "18px",
          color: "#000000",
        }}
      >
        <div>Modern and Elegant</div>
        <div>Luxury and Comfort Awaits</div>
        <div>Find the Perfect Stay</div>
      </div>
    </div>
  );
};

export default HeroLogo;
