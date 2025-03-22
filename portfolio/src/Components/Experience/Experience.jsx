import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Data Analytics Job Simulation Participant',
      company: 'Deloitte Australia (via Forage)',
      duration: 'Feb 2025',
      description:
        `Completed a Deloitte job simulation focused on data analysis and forensic technology.
         Analyzed datasets to identify patterns and anomalies, created a data dashboard using Tableau, and used Excel to classify data and draw actionable business conclusions.`,
      skills: ['Data Analysis', 'Tableau', 'Excel', 'Data Modelling'],
    },
    {
      id: 2,
      role: 'Python Developer',
      company: 'MotionCut',
      duration: 'May 2024',
      description:
        'Developed Python modules using NumPy and Pandas for data manipulation and analysis. Contributed to building efficient and scalable solutions for data processing tasks.',
      skills: ['Python', 'NumPy', 'Pandas', 'Data Manipulation'],
    },
    
  ];

  return (
    <div id="experience" className="bg-[#112240] py-20 px-10 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Experience
      </h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 w-1 h-full bg-[#64FFDA] transform -translate-x-1/2"></div>

        {/* Experience Cards */}
        <div className="ml-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-8">
              {/* Arrow Line */}
              <div className="absolute left-0 top-1/2 w-8 h-1 bg-[#64FFDA] transform -translate-y-1/2"></div>

              {/* Card */}
              <div className="bg-[#0A192F] p-8 rounded-lg shadow-lg ml-8">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-gray-400 text-lg mt-2">
                  {exp.company} | {exp.duration}
                </p>
                <p className="text-gray-300 mt-4">{exp.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#64FFDA] text-[#0A192F] px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;