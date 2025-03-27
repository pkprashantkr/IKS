import parallaxBg from "./assets/parallax.jpg"; // Import the image

export default function HeroSection() {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-white text-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${parallaxBg})`,
        }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-10 px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          IKS is the Fastest Growing Business in Commercial Food Equipment
          Selling.
        </h1>
      </div>
    </div>
  );
}
