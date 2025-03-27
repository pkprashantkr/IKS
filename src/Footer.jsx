import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact-us" className="bg-black text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-3">ABOUT US</h3>
          <p className="text-gray-400 text-sm">
            International Equipment Co. is one of the leading commercial food
            service equipment importers and suppliers in India. A team of
            professionals with vast experience and in-depth knowledge of the
            Hospitality Industry.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="border border-orange-500 p-1 rounded">
              <Facebook className="text-orange-500" />
            </a>
            <a href="#" className="border border-orange-500 p-1 rounded">
              <Twitter className="text-orange-500" />
            </a>
            <a href="#" className="border border-orange-500 p-1 rounded">
              <Linkedin className="text-orange-500" />
            </a>
          </div>
        </div>

        {/* Our Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">OUR LINKS</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us
              "
                className="hover:text-orange-500 transition-colors"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="hover:text-orange-500 transition-colors"
              >
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Sitemap
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-orange-500 transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Videos
              </a>
            </li>
          </ul>
        </div>

        {/* Types of Equipment */}
        <div>
          <h3 className="text-xl font-bold mb-3">TYPES OF EQUIPMENTS</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Commercial Coffee Machine
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Industrial Oven
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Commercial Dishwasher
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Commercial Juicer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Food Processing Machine
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Commercial Kitchen Equipment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Catering Equipment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Commercial Chinese Equipment
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-3">CONTACT US</h3>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-envelope text-orange-500"></i>{" "}
            internationalkitchensoultion@gmail.com
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-phone text-orange-500"></i> +917011468782,
            +919958652941
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-orange-500"></i>
            Shop no 4, sani bajzar road, near sarvoday vidyalay, Avenue
            Jhakaranda, Rajokri, New Delhi, Delhi 110038
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-600 pt-4">
        © Copyright <span className="text-orange-500">IKS 2025</span>. All
        Rights Reserved
        <br />
        Designed by <span className="text-blue-400">Prashant</span>
      </div>
    </footer>
  );
}
