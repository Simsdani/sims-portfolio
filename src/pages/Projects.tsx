
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    
    {
      title: "School Management Dashboard",
      description: "An analytics dashboard for tracking students' modules , marks and assigned lectures .",
      image: "/placeholder.svg",
      tags: ["python", "SQLite" ],
      githubLink: "https://github.com/Simsdani",
    },
    {
      title: "Weather Application",
      description: "Real-time weather forecasting app with location services and interactive maps.",
      image: "/placeholder.svg",
      tags: ["javascript", "api", "css"],
      githubLink: "https://github.com/Simsdani",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio showcasing web development projects and skills.",
      image: "/placeholder.svg",
      tags: ["react", "tailwind", "typescript"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/Simsdani",
    },
    {
      title: "Recipe Finder",
      description: "A web application to discover recipes based on available ingredients.",
      image: "/placeholder.svg",
      tags: ["javascript", "api", "css"],
      githubLink: "https://github.com/Simsdani",
    },
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-pink relative py-20">
          <Stars count={8} />
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-orange mb-6">
              My Projects
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore my recent work and the technical solutions I've built.
            </p>
          </div>
        </section>
        
        {/* Projects Filter */}
        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center mb-12 gap-3">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === "all" 
                    ? "bg-orange text-white" 
                    : "bg-pink text-orange hover:bg-pink-medium"
                }`}
              >
                All Projects
              </button>
              {["react", "javascript", "typescript", "api", "python"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    filter === tag 
                      ? "bg-orange text-white" 
                      : "bg-pink text-orange hover:bg-pink-medium"
                  }`}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-orange bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="flex space-x-4">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full hover:bg-pink transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white p-2 rounded-full hover:bg-pink transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-orange">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-pink px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange font-bold hover:text-pink-dark transition-colors"
                    >
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call To Action */}
        <section className="py-16 bg-orange text-white text-center">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold mb-4">Want to see more of my work?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Check out my GitHub profile for additional projects and code samples
            </p>
            <a 
              href="https://github.com/Simsdani" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-pink hover:text-white transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              Visit my GitHub
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
