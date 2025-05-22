
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About <span className="text-accent-green">Me</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A dynamic web developer with 4.9 years of experience, fueled by a passion for innovation and continuous learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Senior Software Developer & <span className="text-accent-green">Full Stack Developer</span></h3>
            <p className="text-gray-400 mb-6">
              With a strong background in React, Angular, Laravel and full-stack development, I've thrived on
              transforming complex challenges into seamless solutions. At KnackForge Soft Solutions, 
              I've not only delivered high-quality applications but also mentored teams, shared best practices, 
              and embraced emerging technologies like Node.js, MongoDB, and AWS.
            </p>
            <p className="text-gray-400 mb-6">
              Always eager to explore new tech and collaborate across teams, I'm driven by the excitement of
              learning, adapting, and pushing the boundaries of what's possible.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>4.9+ years experience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>Full Stack Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>React & React Native</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>Clean Code</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>Team Mentoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>AWS Services</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Button className="bg-accent-green hover:bg-accent-green/80 text-black">
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-dark-200 rounded-lg p-6 border border-dark-300">
                <h4 className="text-xl font-bold mb-2">Education</h4>
                <ul className="space-y-4">
                  <li>
                    <div className="text-sm text-gray-400">2016 - 2020</div>
                    <div className="font-medium">BE Computer Science and Engineering</div>
                    <div className="text-sm text-gray-400">SMK FOMRA Institute of Technology</div>
                    <div className="text-xs text-accent-green">First Class</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-400">2014 - 2016</div>
                    <div className="font-medium">KPUE Board</div>
                    <div className="text-sm text-gray-400">St.Claret PU College</div>
                    <div className="text-xs text-accent-green">74%</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-200 rounded-lg p-6 border border-dark-300">
                <h4 className="text-xl font-bold mb-2">Languages</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>English</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>Tamil</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>Hindi</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>Malayalam</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>Kannada</div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-dark-200 rounded-lg p-6 border border-dark-300">
                <h4 className="text-xl font-bold mb-2">Awards</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>
                      <div className="text-sm text-gray-400">2022</div>
                      <div className="font-medium">Best Performer Q3</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>
                      <div className="text-sm text-gray-400">2022</div>
                      <div className="font-medium">Recognition for React Native App</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>
                      <div className="text-sm text-gray-400">2022</div>
                      <div className="font-medium">Good Team Player</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-200 rounded-lg p-6 border border-dark-300">
                <h4 className="text-xl font-bold mb-2">Experience</h4>
                <ul className="space-y-3">
                  <li>
                    <div className="text-sm text-gray-400">Apr 2024 - Present</div>
                    <div className="font-medium">Senior Software Developer</div>
                    <div className="text-sm text-accent-green">KnackForge Soft Solutions</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-400">Apr 2022 - Apr 2024</div>
                    <div className="font-medium">Software Developer</div>
                    <div className="text-sm text-accent-green">KnackForge Soft Solutions</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-400">Jul 2020 - Apr 2022</div>
                    <div className="font-medium">Associate Software Developer</div>
                    <div className="text-sm text-accent-green">KnackForge Soft Solutions</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
