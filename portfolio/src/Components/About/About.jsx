import React from 'react'

const About = () => {
  return (
    <div
    id="About"
    className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
  >
    <div>
      <h2 className="text-2xl md:text-4xl font-bold pb-10">About</h2>
      <div className="md:flex flex-wrap flex-col md:flex-row items-center">
        <img className="md:h-80 md:px-10 " src="https://cdn1.vectorstock.com/i/1000x1000/47/05/young-man-programmer-working-on-computer-with-code-vector-18324705.jpg" alt="About img" />

        <ul>
          <div className="flex gap-3 py-4">
          <ion-icon name="arrow-forward"></ion-icon>


            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
              Creating responsive and engaging user interfaces with modern technologies like React, HTML, and CSS.
              </p>
            </span>
          </div>
          
          <div className="flex gap-3 py-4">
          <ion-icon name="arrow-forward"></ion-icon>


            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
              Building robust and scalable server-side applications using Node.js, Express, and MySQL.
              </p>
            </span>
          </div>
          <div className="flex gap-3 py-4">
          <ion-icon name="arrow-forward"></ion-icon>


            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Machine Learning Engineer
              </h1>
              <p className="text-sm md:text-md leading-tight">
              Designing and implementing machine learning models to solve complex problems with data-driven solutions.
              </p>
            </span>
          </div>

        </ul>
      </div>
    </div>
  </div>
  )
}

export default About
