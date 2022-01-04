import React from "react";
import Button from "@mui/material/Button";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [
    {
      url: "https://m.media-amazon.com/images/S/aplus-media/vc/ab1f6527-bcbe-4eaa-82f5-b27f55188153.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    },
    {
      url: "https://i.pinimg.com/originals/2d/9b/cd/2d9bcd94ecc4861fb3eb4d60c3130ea1.jpg",
    },
    {
      url: "https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg",
    },
    {
      url: "https://blog.pricekart.com/2021/09/W020200615796304356517.jpg",
    },
    {
      url: "https://cdn2.f-cdn.com/contestentries/927578/18584425/587bb1a7d9007_thumb900.jpg",
    },
    {
      url: "https://cdn5.f-cdn.com/contestentries/927578/8154646/587de3d876346_thumb900.jpg",
    },
    {
      url: "https://www.2yodoindia.com/wp-content/uploads/2021/04/Daiwa-4K-UHD-Smart-TV-D50162FL-Launched-in-India.jpg",
    },
    {
      url: "https://yourshoppy.com/wp-content/uploads/2021/04/UX482.jpg",
    },
  ];
  return (
    <div>
      <SimpleImageSlider
        style={{ position: "relative" }}
        width={"100%"}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.0}
      />
      <Button
        variant="contained"
        color="error"
        style={{
          zIndex: 2,
          marginTop: "-100px",
          marginLeft: "100px",
          position: "absolute",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/products"}
        >
          Explore Yor Dream
        </Link>
      </Button>
    </div>
  );
};

export default Banner;
