
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About <span className="text-accent-green">Me</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a dedicated software engineer with extensive experience in building modern web applications and solving complex technical challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Software Engineer & <span className="text-accent-green">Full Stack Developer</span></h3>
            <p className="text-gray-400 mb-6">
              I specialize in building scalable, high-performance web applications using modern JavaScript frameworks
              and libraries. With expertise in both frontend and backend technologies, I create seamless user experiences
              that are both beautiful and functional.
            </p>
            <p className="text-gray-400 mb-6">
              My approach focuses on writing clean, maintainable code and implementing best practices for security,
              performance, and accessibility. I'm passionate about staying up-to-date with the latest industry trends
              and continuously expanding my technical knowledge.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>8+ years experience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>Full Stack Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>UI/UX Design</span>
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
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent-green mr-2">▹</span>
                    <span>API Development</span>
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
                    <div className="font-medium">Bachelor's Degree in Computer Science</div>
                    <div className="text-sm text-gray-400">University of Technology</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-400">2020 - 2022</div>
                    <div className="font-medium">Master's Degree in Web Development</div>
                    <div className="text-sm text-gray-400">Digital Academy</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-200 rounded-lg p-6 border border-dark-300">
                <h4 className="text-xl font-bold mb-2">Researched</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>
                      <div className="text-sm text-gray-400">2023</div>
                      <div className="font-medium">Built Data Analytics with Data Structures</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>
                      <div className="text-sm text-gray-400">2022</div>
                      <div className="font-medium">Cloud Native Applications and Serverless</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-dark-200 rounded-lg p-6 border border-dark-300">
                <h4 className="text-xl font-bold mb-2">Certifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>
                      <div className="text-sm text-gray-400">2022</div>
                      <div className="font-medium">AWS Certified Developer</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>
                      <div className="text-sm text-gray-400">2021</div>
                      <div className="font-medium">React Expert</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2">▹</span>
                    <div>
                      <div className="text-sm text-gray-400">2020</div>
                      <div className="font-medium">Full Stack Web Development</div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-200 rounded-lg p-6 border border-dark-300">
                <h4 className="text-xl font-bold mb-2">Experience</h4>
                <ul className="space-y-3">
                  <li>
                    <div className="text-sm text-gray-400">2020 - Present</div>
                    <div className="font-medium">Senior Full Stack Developer</div>
                    <div className="text-sm text-accent-green">TechSolutions Inc.</div>
                  </li>
                  <li>
                    <div className="text-sm text-gray-400">2018 - 2020</div>
                    <div className="font-medium">Frontend Developer</div>
                    <div className="text-sm text-accent-green">WebCraft Agency</div>
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
