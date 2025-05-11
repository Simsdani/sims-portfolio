
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";
import { Code, Database, Palette } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  
  const skillCategories = [
    {
      id: "frontend",
      name: "Front-End",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "React", level: 70 },
        { name: "JavaScript", level: 75 },
        { name: "TypeScript", level: 65 },
        { name: "HTML/CSS", level: 75 },
        { name: "Tailwind CSS", level: 50 },
        
      ]
    },
    {
      id: "backend",
      name: "Back-End",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 50 },
        { name: "MongoDB", level: 10 },
        { name: "SQL", level: 65 },
       
     
      ]
    },
    {
      id: "tools",
      name: "Tools & Methods",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 60 },
        { name: "Agile/Scrum", level: 75 },
        { name: "Figma", level: 75 },
      ]
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-pink relative py-20">
          <Stars count={8} />
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-orange mb-6">
              My Skills
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore my technical expertise and the technologies I work with to bring ideas to life.
            </p>
          </div>
        </section>
        
        {/* Skills Tabs */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-bold transition-all ${
                    activeCategory === category.id
                      ? "bg-orange text-white"
                      : "bg-pink text-orange hover:bg-pink-medium"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Skills Content */}
            <div className="max-w-3xl mx-auto">
              {skillCategories.map((category) => (
                <div
                  key={category.id}
                  className={activeCategory === category.id ? "block" : "hidden"}
                >
                  <h2 className="text-3xl text-center mb-8 text-orange">
                    {category.name} Skills
                  </h2>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="font-bold">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-pink h-3 rounded-full">
                          <div
                            className="h-3 bg-orange rounded-full relative overflow-hidden"
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange to-orange-light opacity-70"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tech stack cards */}
        <section className="py-16 bg-orange text-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-4xl text-center mb-12">Tech Stack</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "JavaScript", "TypeScript", "React", "Node.js",
                 "MongoDB", "PostgreSQL", "Tailwind CSS", "Python",
                "GitHub", "Docker",  "Figma", "C#", "Java"
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-white text-orange p-6 rounded-lg text-center hover:bg-pink hover:scale-105 transition-all cursor-pointer"
                >
                  <p className="font-bold">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Learning Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-4xl mb-8 text-orange">Currently Learning</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["TypeScript",  "Raspberry Pi", "Ruby"].map((item, index) => (
                <div key={index} className="bg-pink p-3 px-6 rounded-full inline-block">
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        

      </main>
      
      <Footer />
    </div>
  );
};

export default Skills;
