
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Stars from "@/components/Stars";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative section-padding">
        <Stars count={6} />
        
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h1 className="text-5xl md:text-6xl mb-4 text-orange">
                Find your <span className="text-pink-dark">Spark!</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8">
                I'm passionate about helping people rediscover their inner happiness, or as I like to say, find their spark!
              </p>
              
              <p className="mb-8">
                My name is <span className="font-bold">Simphiwe Dani</span> A passionate beginner web and software developer, exploring the world of tech one line of code at a time. Proud girl in tech, eager to build, learn, and grow in the digital space.
              </p>
              
              <Link to="/about" className="btn-sparkle inline-flex items-center">
                Sparkle!
              </Link>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="blob-container p-4 max-w-md mx-auto">
                <div className="blob-background"></div>
                <img 
                  src="/Sims bg.png" 
                  alt="Developer"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="bg-orange text-white section-padding">
        <div className="container px-4 mx-auto text-center mb-12">
          <h2 className="text-4xl mb-2">What I Do</h2>
          <p className="text-lg max-w-2xl mx-auto">Work with me to rediscover your inner glow.</p>
        </div>
        
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Front-End Development",
                description: "Creating beautiful, responsive user interfaces with modern frameworks",
                link: "/skills"
              },
              {
                title: "Back-End Development",
                description: "Building robust server-side applications and APIs",
                link: "/skills"
              },
              {
                title: "Full-Stack Solutions",
                description: "End-to-end development for complete web applications",
                link: "/skills"
              }
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-pink mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-10 h-10 text-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <Link to={service.link} className="inline-block bg-white text-orange rounded-full px-6 py-2 font-bold hover:bg-pink hover:text-white transition-colors">
                  Let's Go!
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Project Section */}
      <section className="section-padding">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="blob-container p-4">
                <div className="blob-background"></div>
                <img 
                  src="/icons.jpg" 
                  alt="Featured Project"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl mb-4 text-orange">
                On the <span className="block">Projects...</span>
              </h2>
              
              <p className="mb-6">
                I love to build! Check out some of my recent projects that showcase my skills and creativity in web development.
              </p>
              
              <p className="mb-8">
                Why not pop over to my projects page to see what I'm working?
              </p>
              
              <Link to="/projects" className="btn-sparkle inline-flex items-center">
                See More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-pink section-padding">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl mb-6 text-orange">Join the club!</h2>
          
          <p className="max-w-2xl mx-auto mb-8">
            Ever wanted to surround yourself with fun, uplifting and inspiring people? Let's connect! I'm always looking to collaborate with other developers and creative minds.
          </p>
          
          <Link to="/contact" className="bg-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-light transition-all duration-300">
            Sparkle!
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
