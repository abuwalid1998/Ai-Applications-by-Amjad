import React, { useState } from 'react';
import { getImage3d } from '../Functions/huggingFaceApi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const TextTo3D: React.FC = () => {
    const [text, setText] = useState('');
    const [modelUrl, setModelUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate3D = async () => {
        setLoading(true);
        const result = await getImage3d(text);
        setModelUrl(result);
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="mb-8">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Touch Your Imagination"
                    className="p-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-transparent w-72"
                />
            </div>
            <button
                onClick={handleGenerate3D}
                className="p-2 px-4 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
            >
                {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                ) : (
                    'Generate 3D Model'
                )}
            </button>
            {modelUrl && (
                <div className="mt-8">
                    <a
                        href={modelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        View 3D Model
                    </a>
                </div>
            )}
        </div>
    );
};

export default TextTo3D;
