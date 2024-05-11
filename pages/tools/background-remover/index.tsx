// pages/backgroundRemover.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const BackgroundRemoverPage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    // Handle the image upload logic here
    // For example, you could upload to a server or pass to an API for background removal
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Background Remover</title>
      </Head>
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Background Remover</h1>
        <p className="mb-6">Erase image backgrounds for free and replace it with different backgrounds of your choosing.</p>
        <div className="mb-4">
          <label className="bg-purple-500 text-white px-6 py-2 rounded-md cursor-pointer">
            Start from a photo
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        </div>
        <p>Or drop an image here</p>
        {/* Display the selected image */}
        {image && (
          <div className="mt-4">
            <Image
              src={URL.createObjectURL(image)}
              alt="Uploaded Image"
              width={200}
              height={200}
              className="mb-4"
            />
          </div>
        )}
        <button
          onClick={handleImageUpload}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default BackgroundRemoverPage;
