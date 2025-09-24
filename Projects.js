// components/Projects.jsx
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import stepTrackerImage from "/public/step-tracker.png"; // place in /public/images/

function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step Tracker App */}
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-white p-4 flex items-center justify-center">
                <img 
                  src={stepTrackerImage}
                  alt="Step Tracker App Screenshot"
                  className="w-full h-full object-contain max-w-[280px]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl mb-3">Step Tracker App</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  A mobile-friendly app that tracks steps and allows users to view
                  and compare activity over different periods. Designed for clarity
                  and ease of use.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2">
                  View Project
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Image Recognition AI */}
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-teal-800 flex items-center justify-center">
                <div className="w-full h-full flex flex-col justify-center p-8">
                  <div className="space-y-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="flex space-x-2">
                        {Array.from({ length: Math.floor(Math.random() * 4) + 3 }).map((_, j) => (
                          <div 
                            key={j} 
                            className="h-1 bg-teal-400 rounded"
                            style={{ width: `${Math.random() * 60 + 20}px` }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl mb-3">Image Recognition AI</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  A machine learning model built with TensorFlow that achieves 95% accuracy in image recognition tasks.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2">
                  View Project
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Finance Tracker */}
          <Card className="bg-slate-800 border-slate-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-gradient-to-r from-pink-100 to-orange-100 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="bg-white rounded-lg shadow-lg w-full max-w-[200px] h-3/4 p-4">
                    <div className="space-y-3">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <div className="flex space-x-2">
                            <div className="w-6 h-6 bg-gray-200 rounded"></div>
                            <div className="w-20 h-2 bg-gray-200 rounded mt-2"></div>
                          </div>
                          <div className="w-12 h-2 bg-gray-200 rounded mt-2"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl mb-3">Finance Tracker</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  A web application to help users manage personal expenses, savings, and financial goals.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2">
                  View Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Projects;
