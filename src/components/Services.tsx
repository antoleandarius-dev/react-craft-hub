
const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Designing Solutions <span className="text-accent-green">Customized</span> to Meet<br />
            Your Requirements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card">
            <div className="w-14 h-14 mb-6 bg-dark-300 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Web & App Development</h3>
            <p className="text-gray-400 mb-6">
              Building dynamic applications using React, Angular, Vue.js, and Node.js. Creating responsive interfaces with 
              Tailwind CSS, Bootstrap, and Material UI.
            </p>
            <a href="#" className="text-accent-green hover:underline inline-flex items-center">
              <span>Learn More</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="service-card">
            <div className="w-14 h-14 mb-6 bg-dark-300 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Database Management</h3>
            <p className="text-gray-400 mb-6">
              Building scalable databases with MongoDB, PostgreSQL, MySQL, and Firebase. Creating efficient data models and 
              implementing robust backup strategies.
            </p>
            <a href="#" className="text-accent-green hover:underline inline-flex items-center">
              <span>Learn More</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="service-card">
            <div className="w-14 h-14 mb-6 bg-dark-300 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.7 4.296a1 1 0 01.01 1.414l-4 4a1 1 0 01-1.415 0l-4-4a1 1 0 011.414-1.414L8 7.586l3.293-3.293a1 1 0 011.414-.01zm0 6a1 1 0 01.01 1.414l-4 4a1 1 0 01-1.415 0l-4-4a1 1 0 111.414-1.414L8 13.586l3.293-3.293a1 1 0 011.414-.01z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">API Development</h3>
            <p className="text-gray-400 mb-6">
              Building RESTful and GraphQL APIs using Node.js, Express, Django, and Flask. Implementing authentication, 
              rate limiting, and caching for optimal performance.
            </p>
            <a href="#" className="text-accent-green hover:underline inline-flex items-center">
              <span>Learn More</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="service-card">
            <div className="w-14 h-14 mb-6 bg-dark-300 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
            <p className="text-gray-400 mb-6">
              Improving site speed and user experience using Webpack, Vite, and other modern build tools. Implementing 
              lazy loading, code splitting, and other performance techniques.
            </p>
            <a href="#" className="text-accent-green hover:underline inline-flex items-center">
              <span>Learn More</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="service-card">
            <div className="w-14 h-14 mb-6 bg-dark-300 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">E-commerce Solutions</h3>
            <p className="text-gray-400 mb-6">
              Building online stores with Shopify, WooCommerce, and custom solutions. Implementing payment gateways, 
              inventory management, and customer relationship tools.
            </p>
            <a href="#" className="text-accent-green hover:underline inline-flex items-center">
              <span>Learn More</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="service-card">
            <div className="w-14 h-14 mb-6 bg-dark-300 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Integrating AI</h3>
            <p className="text-gray-400 mb-6">
              Implementing machine learning algorithms to enhance search functionality. Deploying AI solutions for content
              personalization and automation across platforms.
            </p>
            <a href="#" className="text-accent-green hover:underline inline-flex items-center">
              <span>Learn More</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-400">
            Looking to take on new projects and collaborations?<br />
            Let's chat about your ideas! <a href="#contact" className="text-accent-green hover:underline">Reach Out</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
