import { Link } from "react-router-dom";
import React from "react";
import image1 from "./assets/gallery1.png";
import image2 from "./assets/gallery2.png";
import image3 from "./assets/gallery3.png";
import image4 from "./assets/gallery4.png";
import image5 from "./assets/gallery5.png";
import image6 from "./assets/gallery6.png";
import image7 from "./assets/gallery7.png";
import image8 from "./assets/gallery8.png";

const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-36">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
