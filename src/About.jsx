// src/About.jsx
import about from "./assets/about.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div id="about-us" className="px-6 md:px-12 lg:px-24 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">ABOUT US</h2>

      <div className="flex flex-col lg:flex-row items-center gap-14 mt-10">
        <img
          src={about}
          alt="Food Equipment"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />

        <div className="lg:w-1/2">
          <h3 className="text-xl font-bold text-gray-900">
            International Kitchen Solutions is one of the leading commercial
            kitchen equipment importers and suppliers in India.
          </h3>
          <p className="text-gray-700 mt-3">
            With a dedicated team of professionals possessing deep expertise in
            the hospitality industry, International Kitchen Solutions provides
            innovative, reliable, and efficient food service solutions tailored
            to meet the needs of hotels, restaurants, and industrial kitchens
            across the country. Our commitment to quality, service, and customer
            satisfaction has established us as a trusted name in commercial
            kitchen equipment.
          </p>
          <a
            href="./assets/brochure.pdf" // Provide the path to your PDF file here
            download
            className="mt-5 inline-block bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-all"
          >
            Download Brochure
          </a>
        </div>
      </div>

      <div className="bg-blue-700 text-white text-center py-12 px-4 mt-16 rounded-lg">
        <h3 className="text-2xl font-bold">Call To Action</h3>
        <p className="mt-2">
          Please contact us for any service-related queries and we strive to
          exceed your expectations.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-4 px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default About;
