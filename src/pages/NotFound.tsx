
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center py-20 relative">
        <Stars count={12} />
        
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-orange mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl mb-6">Oops! Page not found</h2>
          <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved to another location.
          </p>
          <Link 
            to="/" 
            className="btn-sparkle inline-block"
          >
            Back to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
