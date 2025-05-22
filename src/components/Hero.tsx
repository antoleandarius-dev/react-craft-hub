
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-24 pb-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxYTFkMWUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNCAzLTEuNzkxIDMtNHptLTMyIDBoLTJ2MmgyYzAgMCAwLTE2LjUgMTYuNS0xNi41di0yYy04LjI4NiAwLTE2LjUgNi43MTQtMTYuNSAxNi41em01MCAwYzAgMTAuMDcxLTcuNTU5IDE2LjUtMTYuNSAxNi41di0yaDE2LjVjMCAwIDAtNy41LTQtMTEuNS0zLjUtNC0xMC41LTQtMTAuNS00djJjMCAwIDYgMCA5IDMgMi42NjcgMi43MTQgMi41IDYgMi41IDYgMCAwLTkuNSAwLTEyLjUtM2wtMi0yLTIgMmMtMyAzLTEyLjUgMy0xMi41IDNzLS4xNjctMy4yODYgMi41LTZjMy0zIDktMyA5LTN2LTJzLTcgMC0xMC41IDRjLTQgNC00IDExLjUtNCAxMS41SDE4djJDOS4wNTkgNTAuNSAxLjUgNDQuMDcxIDEuNSAzNGMwLTguOTczIDYuMTgxLTE1LjUgMTMuNS0xNS41di0yQzYuMzY5IDE2LjUgMCAyNC4wODEgMCAzNGMwIDExLjU5NCA5LjgwMSAxOC41IDIwLjUgMTguNSAxMS41IDAgMTEuNS05LjUgMTEuNS05LjVzMCA5LjUgMTEuNSA5LjVjMTAuNjk5IDAgMjAuNS02LjkwNiAyMC41LTE4LjUgMC00Ljk3My0xLjM3OS05LjM2Mi0zLjUxMy0xMi43MTJsLTEuNjk4IDEuMDc0Yy41LjgwNiA0LjIxMSA3LjgyMSA0LjIxMSAxMS42Mzh6TTMgM2g1NFY2N0g0NS41di0yaC00MnYtOGgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <div className="space-y-6 max-w-lg">
            <p className="text-accent-green mb-2 font-mono">&lt;Hello, I'm John /&gt;</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Senior <span className="text-accent-green font-mono">Full Stack</span><br />
              Web & App Developer
            </h1>
            <p className="text-gray-400 mb-8">
              With 8+ years of experience in creating web applications, 
              using technologies such as React, Node.js, MongoDB, and TypeScript.
              I deliver complete solutions on schedule.
              <span className="text-accent-green font-mono ml-1">/&gt;</span>
            </p>
            <div className="flex gap-4">
              <a href="#contact">
                <Button className="bg-accent-green hover:bg-accent-green/80 text-black font-medium">
                  Let's Talk 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" className="border-accent-green text-accent-green hover:bg-accent-green/10">
                  View Projects
                </Button>
              </a>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent-green/20 animate-float shadow-xl shadow-accent-green/10">
              <img 
                src="/lovable-uploads/ad819d9b-6d9f-4c68-9d89-ca9851505fb3.png"
                alt="Developer Portrait"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-dark-200 p-4 rounded-lg border border-dark-300 shadow-lg">
              <div className="text-2xl font-bold text-white">12+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
