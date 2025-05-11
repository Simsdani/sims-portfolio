
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";
import { Mail, Phone, Send, MapPin, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this data to a server
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-pink relative py-20">
          <Stars count={8} />
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-orange mb-6">
              Let's Connect!
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-orange">Send Me A Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                      placeholder="jane@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-pink rounded-lg focus:outline-none focus:ring-2 focus:ring-orange min-h-[150px]"
                      placeholder="I'd like to discuss a project idea..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-sparkle inline-flex items-center"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="bg-pink p-8 rounded-lg h-full">
                  <h2 className="text-3xl font-bold mb-8 text-orange">Contact Info</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Email</h3>
                        <a href="mailto:danisimphiwe9@gmail.com" className="hover:text-orange transition-colors">
                          danisimphiwe9@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Phone</h3>
                        <a href="tel:+27649218962" className="hover:text-orange transition-colors">
                          +27 (064) 921-8982
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Location</h3>
                        <p>Johannesburg, Gauteng, South Africa</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-full mr-4">
                        <MessageSquare className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Social Media</h3>
                        <div className="flex space-x-4 mt-2">
                      
                          <a 
                            href="https://www.instagram.com/simphieedani?igsh=ajFheG80OW5rdnR1&utm_source=qr" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-orange transition-colors"
                          >
                            Instagram
                          </a>
                          <a 
                            href="https://github.com/Simsdani" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-orange transition-colors"
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
