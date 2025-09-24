// components/Projects.jsx
import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A selection of my work. Click to learn more.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step Tracker App */}
          <div className="group bg-background-light dark:bg-background-dark rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            {/* Project Image */}
            <div
              className="w-full h-48 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url("/images/step-tracker.png")`, // place your screenshot inside /public/images
              }}
            ></div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Step Tracker App
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A mobile-friendly app that tracks steps and allows users to
                compare activity over time. Built with a focus on clarity and
                usability.
              </p>

              <button className="mt-4 flex items-center justify-center rounded-full h-9 px-4 bg-primary/10 text-primary text-sm font-bold transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
                <span>View Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
