import React from 'react';

export default function About() {
  return (
    <div>
      <h1 className="text-xl mb-4">About Me</h1>
      <section className="mb-6">
        <h2 className="font-semibold">Education</h2>
        <p>MS Data Science, UC San Diego</p>
      </section>
      <section>
        <h2 className="font-semibold">Experience</h2>
        <ul className="list-disc ml-6">
          <li>Graduate Student Researcher at UCSD (Causal Copilot)</li>
          <li>AI/ML Intern at CureSkin</li>
        </ul>
      </section>
    </div>
  );
}