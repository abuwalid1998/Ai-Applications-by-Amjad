import React, { useState } from 'react';
import { getImage } from '../Functions/huggingFaceApi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const TextToImage: React.FC = () => {
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateImage = async () => {
        setLoading(true);
        setError(null); // Reset error state

        try {
            // Call getImage and get the image URL
            const imageUrl = await getImage(text);

            if (imageUrl) {
                // Set the image URL state to display the image
                setImageUrl(imageUrl);
                console.log(imageUrl); // For debugging
            } else {
                throw new Error('Image URL is undefined');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="mb-8">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Use Your Imagination"
                    className="p-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent w-72"
                />
            </div>
            <button
                onClick={handleGenerateImage}
                className="p-2 px-4 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
            >
                {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                ) : (
                    'Generate Image'
                )}
            </button>
            {loading && (
                <div className="mt-4 flex justify-center items-center">
                    <AiOutlineLoading3Quarters className="animate-spin text-3xl text-blue-500" />
                    <span className="ml-2 text-gray-600">Generating image...</span>
                </div>
            )}
            {error && (
                <div className="mt-4 text-red-500">
                    {error}
                </div>
            )}
            {imageUrl && (
                <div className="mt-8 flex flex-col items-center">
                    <img
                        src={imageUrl}
                        alt="Generated"
                        className="rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <a
                        href={imageUrl}
                        download="generated-image.jpg"
                        className="mt-4 p-2 px-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Download Image
                    </a>
                </div>
            )}
        </div>
    );
};

export default TextToImage;
