
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-pink relative py-20">
          <Stars count={8} />
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-orange mb-6">
              About Me
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Get to know the developer behind the sparkle! I bring creativity and technical expertise to every project.
            </p>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="blob-container p-4">
                  <div className="blob-background"></div>
                  <img 
                    src="/Sims bg.png" 
                    alt="Developer"
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl mb-6 text-orange">
                  Hello, I'm Simphiwe Dani!
                </h2>
                
                <p className="mb-4">
                A passionate developer with a love for creating elegant solutions to complex problems.
                </p>
                
                <p className="mb-4">
                With expertise in JavaScript, React, C#, and Python, I develop applications that are not only functional but also beautiful and intuitive. I believe in writing clean, maintainable code and creating experiences that users love.
                </p>
                
                <p className="mb-6">
                  When I'm not coding, you can find me hiking, experimenting with new recipes in the kitchen, or reading science fiction novels.
                </p>
                
                <Link to="/contact" className="btn-sparkle inline-flex items-center">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        
        
        {/* Values Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-4xl mb-12 text-orange">My Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Creativity",
                  description: "I believe in thinking outside the box and finding unique solutions to complex problems"
                },
                {
                  title: "Quality",
                  description: "Every line of code I write is crafted with care and attention to detail"
                },
                {
                  title: "Collaboration",
                  description: "I value open communication and working together to achieve the best results"
                }
              ].map((value, index) => (
                <div key={index} className="bg-pink p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-orange">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-pink">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-4xl mb-6 text-orange">Ready to Collaborate?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              If my skills and experience align with your project needs, I'd love to hear from you!
            </p>
            <Link to="/contact" className="bg-orange text-white font-bold py-3 px-8 rounded-full hover:bg-orange-light transition-all duration-300">
              Let's Chat!
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
