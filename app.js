// App.jsx
import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Header />

      {/* Dummy sections just to test scrolling */}
      <section id="hero" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hero Section</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold">Projects Section</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Section</h1>
      </section>
    </div>
  );
}

export default App;
