import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-sage-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif text-sage-900 text-center mb-12">Get in Touch</h1>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif text-sage-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-sage-700 mr-3" />
                  <span className="text-sage-900">Mahaaiayurveda@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-sage-700 mr-3" />
                  <span className="text-sage-900">+91 9001908599</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-sage-700 mr-3" />
                  <span className="text-sage-900">141 shri karni ,uma vihar,Gokulpura,JAIPUR, RAJASTHAN 302012</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-sage-700 mr-3" />
                  <span className="text-sage-900">Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif text-sage-900 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sage-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sage-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sage-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-sage-700 text-white py-2 px-4 rounded-md hover:bg-sage-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif text-sage-900 mb-6">Visit Our Store</h2>
            <div className="aspect-w-16 aspect-h-9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14227.74437368734!2d75.70174604865093!3d26.937240376117057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s141%20shri%20karni%20%2Cuma%20vihar%2CGokulpura%2CJAIPUR%2C%20RAJASTHAN%20302012!5e0!3m2!1sen!2sin!4v1736418477375!5m2!1sen!2sin" width="600" height="450" className="border:0;" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}