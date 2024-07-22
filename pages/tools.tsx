import React from 'react';
import Image from 'next/image';
import Layout from "@/layouts/default";
interface Tool {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const tools: Tool[] = [
  {
    title: 'AI Background Remover',
    description: 'Remove the background of your image automatically',
    imageUrl: '/tools-images/background-remover.jpg',
    link: '/tools/background-remover',
  },
  {
    title: 'AI Image Upscaler',
    description: 'Generate realistic backgrounds in less than a second',
    imageUrl: '/tools-images/Image-Upscaler.png',
    link: '/tools/image-upscaler',
  },
  {
    title: 'Unwanted Object Remover',
    description: 'Remove unwanted parts of your image with a swipe',
    imageUrl: '/tools-images/object-remover.jpeg',
    link: '/object-remover',
  },
  {
    title: 'Image Denoiser',
    description: 'Remove noise from your images to make them clearer',
    imageUrl: '/tools-images/image-denoise.jpg',
    link: '/image-denoiser',
  },
  {
    title: 'AI Colorizer',
    description: 'Colorize your black and white photos with AI',
    imageUrl: '/tools-images/AI-colorizer.jpg',
    link: '/colorizer',
  },
  {
    title: 'Image Sketcher',
    description: 'Turn your photos into beautiful sketches with AI',
    imageUrl: '/tools-images/sketck.webp',
    link: '/image-sketcher',
  },
];

const ToolsPage: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="container mx-auto p-8">
          {/* <h1 className="text-2xl font-bold text-center mb-8" style={{ color: "violet" }}>AI Photo Editing</h1>
          <h2 className="text-4xl font-bold text-center mb-8">Tools & Features</h2>
          <p className="text-lg text-center mb-8">Create stunning images in seconds with AI-powered technology.</p> */}
          <div className='w-full text-center py-12 flex justify-center items-center flex-col'>
            <h1 className="text-2xl font-bold text-center mb-4 text-slate-900" >AI Photo Editing</h1>
            <h1 className="mx-auto max-w-5xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-5xl">

              <span className="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative"> Tools & Features</span>
              </span>{' '}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg tracking-tight text-slate-700">
              Create stunning images in seconds with AI-powered technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <a href={tool.link}> {/* Use a regular <a> tag */}
                  <div className="relative h-48">
                    <Image src={tool.imageUrl} alt={tool.title} layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
                    <p className="text-sm">{tool.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ToolsPage;
