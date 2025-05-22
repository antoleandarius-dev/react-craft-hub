
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    id: 1,
    title: "Taxi Traffic Prediction",
    description: "College project using Machine Learning to predict taxi traffic patterns",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "college",
    link: "#",
    client: "Final Year Project",
    completionTime: "2020",
    technologies: ["Python", "Machine Learning", "AWS Lambda"]
  },
  {
    id: 2,
    title: "iClassPro",
    description: "Professional project for class management and scheduling",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    category: "professional",
    link: "#",
    client: "KnackForge",
    completionTime: "2023",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "iCampPro",
    description: "Professional project for camp management and registration",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    category: "professional",
    link: "#",
    client: "KnackForge",
    completionTime: "2022",
    technologies: ["AngularJS", "PHP", "Laravel"]
  },
  {
    id: 4,
    title: "iRegPro",
    description: "Registration and management system for institutional use",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    category: "professional",
    link: "#",
    client: "KnackForge",
    completionTime: "2021",
    technologies: ["React", "Express", "MongoDB"]
  },
  {
    id: 5,
    title: "Wedding E-invite",
    description: "Simple wedding e-invitation app with RSVP functionality",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    category: "personal",
    link: "#",
    client: "Personal Project",
    completionTime: "2022",
    technologies: ["HTML", "JavaScript", "CSS"]
  },
  {
    id: 6,
    title: "ToDo List",
    description: "Task management app built with React Native",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    category: "personal",
    link: "#",
    client: "Personal Project",
    completionTime: "2021",
    technologies: ["React Native", "JavaScript"]
  },
  {
    id: 7,
    title: "Snappy",
    description: "Real-time chat web application using MERN stack and socket.io",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    category: "personal",
    link: "#",
    client: "Personal Project",
    completionTime: "2022",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io"]
  },
  {
    id: 8,
    title: "SplitUp",
    description: "Expense tracker and trip organizing application built with React Native",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    category: "personal",
    link: "#",
    client: "Personal Project",
    completionTime: "2023",
    technologies: ["React Native", "JavaScript"]
  },
  {
    id: 9,
    title: "WeatherMan",
    description: "Simple weather application using external API",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    category: "personal",
    link: "#",
    client: "Personal Project",
    completionTime: "2022",
    technologies: ["JavaScript", "API integration", "CSS"]
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null);

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Recent <span className="text-accent-green">Works</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my projects spanning professional work, personal projects, and academic endeavors.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === "all" 
                  ? "bg-accent-green text-black" 
                  : "bg-dark-200 hover:bg-dark-300"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter("professional")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === "professional" 
                  ? "bg-accent-green text-black" 
                  : "bg-dark-200 hover:bg-dark-300"
              }`}
            >
              Professional
            </button>
            <button 
              onClick={() => setActiveFilter("personal")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === "personal" 
                  ? "bg-accent-green text-black" 
                  : "bg-dark-200 hover:bg-dark-300"
              }`}
            >
              Personal
            </button>
            <button 
              onClick={() => setActiveFilter("college")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === "college" 
                  ? "bg-accent-green text-black" 
                  : "bg-dark-200 hover:bg-dark-300"
              }`}
            >
              College
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                  <Button 
                    onClick={() => setSelectedProject(project)}
                    className="bg-accent-green hover:bg-accent-green/80 text-black"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-green transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="text-xs bg-dark-300 rounded-full px-3 py-1">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-dark-300 rounded-full px-3 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Selected Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-dark-200 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Client/Project</h4>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Completion Time</h4>
                    <p>{selectedProject.completionTime}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-dark-300 rounded-full px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={selectedProject.link} className="inline-block">
                  <Button className="bg-accent-green hover:bg-accent-green/80 text-black">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* More Projects Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-accent-green text-accent-green hover:bg-accent-green/10">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
