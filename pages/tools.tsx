import React from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/footer";


interface Tool {
  title: string;
  description: string;
  imageUrl: string;
}

const tools: Tool[] = [
  {
    title: 'AI Background Remover',
    description: 'Remove the background of your image automatically',
    imageUrl: '/tools-images/background-remover.jpg', // Replace with your image path
  },
  {
    title: 'AI Image Upscaler',
    description: 'Generate realistic backgrounds in less than a second',
    imageUrl: '/tools-images/Image-Upscaler.png', 
  },
  {
    title: 'Unwanted Object Remover',
    description: 'Remove unwanted parts of your image with a swipe',
    imageUrl: '/tools-images/object-remover.jpeg', 
  },
  {
    title: 'Unwanted Object Remover',
    description: 'Remove unwanted parts of your image with a swipe',
    imageUrl: '/tools-images/image-denoise.jpg', 
  },{
    title: 'AI Colorizer',
    description: 'Remove unwanted parts of your image with a swipe',
    imageUrl: '/tools-images/AI-colorzere.jpg', 
  },
  {
    title: 'Image Sketcher',
    description: 'Generate realistic backgrounds in less than a second',
    imageUrl: '/tools-images/Sketck.webp', 
  },
  {
    title: 'AI Image Upscaler',
    description: 'Generate realistic backgrounds in less than a second',
    imageUrl: '/tools-images/Image-Upscaler.png', 
  },
  // Add more tools as needed
];

const ToolsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold text-center mb-8">AI Photo Editing</h1>
        <h2 className="text-4xl font-bold text-center mb-8">Tools & Features</h2>
        <p className="text-lg text-center mb-8">Create stunning images in seconds with AI-powered technology.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src={tool.imageUrl} alt={tool.title} layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
                <p className="text-sm">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ToolsPage;
