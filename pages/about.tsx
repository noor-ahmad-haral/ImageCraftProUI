'use client'
import Image from "next/image";
import Layout from "../layouts/default";

const About = () => {
  return (
    <Layout>
    <main className="flex flex-col items-center justify-center min-h-screen p-6 md:p-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-center text-gray-700">
          At our core, we are a team passionate about leveraging computer vision and generative AI to revolutionize image editing. Our mission is to empower creatives, designers, and artists with cutting-edge technology that simplifies and accelerates their workflow.
        </p>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Current Focus Areas</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Computer Vision</h3>
            <p className="text-gray-700">Developing advanced computer vision algorithms to enhance image processing capabilities.</p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Image Upscaler</h3>
            <p className="text-gray-700">Creating an AI-powered image upscaling tool for generating high-resolution images.</p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Background Remover</h3>
            <p className="text-gray-700">Building an automatic background removal tool using advanced segmentation techniques.</p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Object Remover</h3>
            <p className="text-gray-700">Developing a tool to seamlessly remove unwanted objects from images.</p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Generative AI</h3>
            <p className="text-gray-700">Exploring generative AI models for creative applications such as image synthesis and style transfer.</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/about.jpg" alt="About Image" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="md:w-1/2 mx-auto md:ml-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-center md:text-left text-gray-700">
            Our mission is to democratize image editing by providing accessible and intuitive tools powered by cutting-edge technology. We aim to enable individuals and businesses of all skill levels to create stunning visuals effortlessly, unlocking their full creative potential.
          </p>
        </div>
      </div>
    </main>
    </Layout>
  );
};

export default About;
