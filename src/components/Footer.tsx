import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Send, Pointer as Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#213d77] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-lg mb-4">Get Connected with us on social networks</p>
          <div className="flex justify-center space-x-4">
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Youtube className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
            <Send className="w-6 h-6" />
            <Pinterest className="w-6 h-6" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-4">IRCTC Trains</h3>
            <ul className="space-y-2 text-sm">
              <li>General Information</li>
              <li>Important Information</li>
              <li>Agents</li>
              <li>Enquiries</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">How To</h3>
            <ul className="space-y-2 text-sm">
              <li>IRCTC Official App</li>
              <li>Advertise with us</li>
              <li>Refund Rules</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">IRCTC eWallet</h3>
            <ul className="space-y-2 text-sm">
              <li>Avail Loyalty Benefits</li>
              <li>IRCTC-iPAY Payment Gateway</li>
              <li>IRCTC Zone</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Newly Migrated Agents</h3>
            <ul className="space-y-2 text-sm">
              <li>Mobile Zone</li>
              <li>Policies</li>
              <li>Ask Disha ChatBot</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Customer Care</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p className="text-sm">Copyright © 2024 IRCTC. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;