
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-bold mb-4 block">
              <span>simphiwe!</span>
              <span className="text-pink">&</span>
              <span className="italic">dani</span>
              <span className="ml-1">*</span>
            </Link>
            <p>Portfolio & Development Services</p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Let's Hang on Socials!</h3>
            <div className="flex space-x-4">
             
              <a 
                href="https://www.instagram.com/simphieedani?igsh=ajFheG80OW5rdnR1&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://github.com/Simsdani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink transition-colors"
                aria-label="Github"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <p>Come say hi! I'd love to hear from you.</p>
            <p>© {new Date().getFullYear()} Simphiwe Dani</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
