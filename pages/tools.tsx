import React from 'react';
import Image from 'next/image';

interface Tool {
  title: string;
  description: string;
  imageUrl: string;
}

const tools: Tool[] = [
  {
    title: 'AI Background Remover',
    description: 'Remove the background of your image automatically',
    imageUrl: '/tools images/background-remover.jpg', // Replace with your image path
  },
  {
    title: 'AI Image Upscaler',
    description: 'Generate realistic backgrounds in less than a second',
    imageUrl: '/tools images/Image-Upscaler.png', // Replace with your image path
  },
  {
    title: 'Unwanted Object Remover',
    description: 'Remove unwanted parts of your image with a swipe',
    imageUrl: '/tools images/object-remover.jpeg', // Replace with your image path
  },
  // Add more tools as needed
];

const ToolsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">AI Photo Editing Tools & Features</h1>
      <p className="text-lg text-center mb-8">Create stunning images in seconds with AI-powered technology.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div key={tool.title} className="bg-white rounded-lg shadow-md p-6">
            <Image src={tool.imageUrl} alt={tool.title} width={400} height={400} className="mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{tool.title}</h2>
            <p className="text-md">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
