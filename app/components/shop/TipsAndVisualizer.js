'use client'

import { useEffect, useState } from 'react';

export default function TipsAndVisualizer({ currentStep, formData }) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Update the price based on formData here
    let newPrice = 0;
    if (formData.style) newPrice += 1000; // Example calculation
    if (formData.colors) newPrice += 500; // Example calculation
    if (formData.dimensions) newPrice += 2000; // Example calculation
    setPrice(newPrice);
  }, [formData]);

  const renderVisualization = () => {
    // Update the SVG or other visual elements based on the formData
    return (
      <svg width="200" height="200">
        {/* Example SVG elements based on formData */}
        <rect width="100" height="100" fill={formData.colors || 'gray'} />
        {/* Add more SVG elements as needed */}
      </svg>
    );
  };

  return (
    <div className="tips-visualizer-wrapper p-4 border bg-white">
      <div className="tips-section">
        <h3>Tips for Step {currentStep + 1}</h3>
        {/* Display tips based on currentStep */}
        {currentStep === 0 && <p>Select a style that resonates with your vision.</p>}
        {currentStep === 1 && <p>Choose colors that complement your space.</p>}
        {/* Add tips for other steps */}
      </div>
      <div className="visualization-section">
        {renderVisualization()}
      </div>
      <div className="price-section">
        <p>Estimated Price: KES {price}</p>
      </div>
    </div>
  );
}
