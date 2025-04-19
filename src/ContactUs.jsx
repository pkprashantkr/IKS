import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          We're here to help! Reach out to us through any of the following:
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <li className="flex items-start space-x-4">
            <Mail className="w-7 h-7 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">internationalkitchensoultion@gmail.com</p>
            </div>
          </li>

          <li className="flex items-start space-x-4">
            <Phone className="w-7 h-7 text-green-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+91 7011468782, <br /> +91 9958652941</p>
            </div>
          </li>

          <li className="flex items-start space-x-4">
            <MapPin className="w-7 h-7 text-red-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">
              Shop no 4, sani bajzar road, <br /> Near Sarvodaya Vidyalaya, <br /> Avenue Jhakaranda, Rajokri, <br /> New Delhi, Delhi 110038
              </p>
            </div>
          </li>

          <li className="flex items-start space-x-4">
            <Clock  className="w-7 h-7 text-yellow-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Working Hours</h3>
              <p className="text-gray-600">7 Days, 24hrs </p>
            </div>
          </li>
        </ul>

        
      </div>
    </div>
  );
};

export default ContactUs;
