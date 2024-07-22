// pages/backgroundRemover.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';

const BackgroundRemoverPage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showBefore, setShowBefore] = useState<boolean>(true);
  const [background, setBackground] = useState<string>('bg-white');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setProcessedImage(null); // Clear previous processed image
      setError(null); // Clear any previous errors
    }
  };

  const handleImageUpload = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('http://localhost:8000/remove-bg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.filepath) {
        setProcessedImage(response.data.filepath);
      } else {
        setError('Error in response data');
        console.error('Error in response data:', response.data);
      }
    } catch (error) {
      setError('Error uploading image');
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  const backgroundColors = [
    'bg-white',
    'bg-black',
    'bg-gray-500',
    'bg-blue-500',
    'bg-pink-500',
    'bg-yellow-500',
    'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Background Remover</title>
      </Head>
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-2xl w-full">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Background Remover</h1>
        <p className="mb-6 text-gray-600">Erase image backgrounds for free and replace it with different backgrounds of your choosing.</p>
        <div className="mb-4">
          <label className="bg-purple-600 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-purple-700 transition duration-300">
            Start from a photo
            <input type="file" className="hidden" onChange={handleImageChange} />
          </label>
        </div>
        <p className="text-gray-600">Or drop an image here</p>
        {image && (
          <div className="mt-4">
            <Image
              src={URL.createObjectURL(image)}
              alt="Uploaded Image"
              width={200}
              height={200}
              className="mb-4 rounded-lg"
            />
          </div>
        )}
        <button
          onClick={handleImageUpload}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          {loading ? 'Processing...' : 'Remove Background'}
        </button>
        {error && (
          <div className="mt-4 text-red-500">
            <p>{error}</p>
          </div>
        )}
        {processedImage && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Processed Image</h2>
            <div className="flex justify-center items-center mb-4">
              <button
                onClick={() => setShowBefore(!showBefore)}
                className="bg-gray-500 text-white px-2 py-1 rounded mr-2"
              >
                {showBefore ? 'After' : 'Before'}
              </button>
              <div className="flex space-x-2">
                {backgroundColors.map((color, index) => (
                  <button
                    key={index}
                    className={`${color} w-8 h-8 rounded-full border-2 ${background === color ? 'border-black' : 'border-transparent'}`}
                    onClick={() => setBackground(color)}
                  ></button>
                ))}
              </div>
            </div>
            <div className={`relative ${background} p-4 rounded-lg`}>
              <Image
                src={showBefore ? URL.createObjectURL(image) : processedImage}
                alt="Processed Image"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300">
                Edit for free
              </button>
              <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition duration-300">
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundRemoverPage;
