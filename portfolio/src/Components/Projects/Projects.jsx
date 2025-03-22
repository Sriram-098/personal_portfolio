import React from 'react';

const Projects = () => {

    const projects = [
      {
        id: 1,
        name: 'NxtTrendz ',
        description:
          'Developed a full-stack e-commerce platform with user authentication, product management, and payment integration. Built an intuitive user interface for browsing products, managing carts, and placing orders. Implemented an admin dashboard for managing products, orders, and user data.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
        demoLink: 'https://nxttrendz.com', // Replace with your demo link
        codeLink: 'https://github.com/yourusername/nxttrendz', // Replace with your GitHub link
        image: 'https://realestatemarket.com.mx/images/2023/02-febrero/06-02/Estrategias-ecommerce-para-los-pequenos-y-medianos-negocios.jpg', // Path to the image
      },
      {
        id: 2,
        name: 'Traffic Simulation (Java)',
        description:
          'Developed a traffic simulation using Java and JavaFX. Simulated vehicles moving on a grid-based road network and implemented Dijkstra\'s algorithm to find the shortest path between two points. Visualized the road network, vehicles, and shortest path using JavaFX for a modern and interactive user interface.',
        technologies: ['Java', 'JavaFX', 'Dijkstra\'s Algorithm', 'Data Structures'],
        demoLink: 'https://traffic-simulation-java.com', // Replace with your demo link
        codeLink: 'https://github.com/yourusername/traffic-simulation-java', // Replace with your GitHub link
        image: 'https://tse3.mm.bing.net/th?id=OIP.kbwiv1j0R5uYUsxlRPbHlAHaD1&pid=Api&P=0&h=180', // Path to the image
      }
    ,
    {
      id: 3,
      name: 'Stock Trend Analyzer (LLM-Based)',
      description:
        'Developed a stock trend analyzer powered by a Large Language Model (LLM) to analyze textual data (e.g., news articles, earnings reports, social media sentiment) and generate actionable insights. Integrated the LLM with stock market data to provide trend predictions, sentiment analysis, and investment recommendations.',
      technologies: ['Python', 'Hugging Face Transformers', 'OpenAI GPT', 'Pandas', 'Streamlit'],
      demoLink: 'https://stock-analyzer-llm.com', // Replace with your demo link
      codeLink: 'https://github.com/yourusername/stock-trend-analyzer-llm', // Replace with your GitHub link
      image: 'https://tse4.mm.bing.net/th?id=OIP.OlGRGhfsQ4O2gXND-ItkHQHaHa&pid=Api&P=0&h=180', // Path to the image
    },
  ];

  return (
    <div id="projects" className="bg-[#112240] py-20 px-10 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Projects
      </h2>
      <div className="max-w-4xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0A192F] p-8 rounded-lg shadow-lg mb-8 transition-all hover:scale-105 hover:shadow-xl"
          >
            {/* Project Image */}
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover transition-all hover:scale-110"
              />
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="text-gray-300 mt-4">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#64FFDA] text-[#0A192F] px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;