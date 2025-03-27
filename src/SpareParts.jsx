export default function SpareParts() {
  const parts = [
    {
      title: "Commercial kitchens",
      description:
        "Commercial kitchens are found in restaurants, cafeterias, hotels, hospitals, educational and workplace facilities, army barracks, and similar establishments.",
      icon: "🍽️",
    },
    {
      title: "Espresso machine",
      description:
        "An espresso machine brews coffee by forcing pressurized water near boiling point through a 'puck' of ground coffee and a filter in order to produce a thick, concentrated coffee called espresso.",
      icon: "☕",
    },
    {
      title: "Bar equipment",
      description:
        "We provide bar equipment related spare parts for commercial organisations.",
      icon: "🍸",
    },
    {
      title: "Commercial refrigerator",
      description:
        "A commercial refrigerator is a free-standing piece of equipment that provides cold storage for commercial organisations.",
      icon: "🧊",
    },
    {
      title: "American Kitchen Equipment",
      description:
        "We provide all types of spare parts for American Kitchen equipment.",
      icon: "🏢",
    },
    {
      title: "European Kitchen Equipment",
      description:
        "We deal in all types of spare parts for European Kitchen equipment.",
      icon: "🏠",
    },
  ];

  return (
    <div id="testimonials" className="bg-blue-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          SPARE PARTS FOR
        </h2>
        <p className="text-gray-600 mb-8">
          International Equipment Co. has pan-India Sales of Spare Parts
        </p>
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {parts.map((part, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 border-l-4 border-blue-600"
            >
              <div className="text-4xl">{part.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800">
                  {part.title}
                </h3>
                <p className="text-gray-600 mt-2">{part.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
