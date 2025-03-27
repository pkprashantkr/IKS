import about from './assets/about.png'

const About = () => {
  return (
    <div id='about-us' className="px-6 md:px-12 lg:px-24 py-12">   {/* About Us Section */}
      <h2 className="text-3xl font-bold text-center mb-6">ABOUT US</h2>
      <p className="text-center text-gray-700 max-w-4xl mx-auto">
        International Equipment Co. is one of the leading commercial food
        service equipment importers and suppliers in India. A team of
        professionals who have vast experience and in-depth knowledge of the
        Hospitality Industry & who can better understand customers' needs and
        their priorities.
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
        {/* Left Side - Image */}
        <img
          src={about}
          alt="Food Equipment"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />

        {/* Right Side - Text Content */}
        <div className="lg:w-1/2">
          <h3 className="text-xl font-bold text-gray-900">
            International Equipment Co. is one of the leading commercial food
            service equipment importers and suppliers in India.
          </h3>
          <p className="text-gray-700 mt-3">
            IEC has a strong focus to work and grow with Star Hotels,
            Restaurants Chains, Hospitals, especially the fast-food restaurants
            and Cafes. There is an exclusive team to look after the growing
            needs of these clients, which involves product quality, sourcing of
            equipment, installation, and great service.
          </p>
          <p className="text-gray-700 mt-3">
            IEC also keeps a strong focus on after-sale service, with a team of
            well-trained service engineers and technicians ready to provide
            support at all times, ensuring that your equipment remains in
            working condition 24x7, 365 days a year.
          </p>
          <p className="text-gray-700 mt-3">
            Apart from imported kitchen equipment, we also deal in spare parts
            for all kinds of European and American commercial food service
            equipment, keeping major spare parts frequently in demand.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-700 text-white text-center py-12 mt-16 rounded-lg">
        <h3 className="text-2xl font-bold">Call To Action</h3>
        <p className="mt-2">
          Please contact us for any service-related queries and we strive to
          exceed your expectations.
        </p>
        <button className="mt-4 px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-700 transition">
          Call To Action
        </button>
      </div>
    </div>
  );
};

export default About;
