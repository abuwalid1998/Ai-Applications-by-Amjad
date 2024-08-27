import React, { useState } from 'react';
import { getSummary } from '../Functions/huggingFaceApi';
import 'tailwindcss/tailwind.css';

const Summarization: React.FC = () => {
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSummarize = async () => {
        setIsLoading(true);
        const result = await getSummary(text);
        setSummary(result);
        setIsLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Text Summarization</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to summarize"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition duration-300 ease-in-out"
                rows={5}
            />
            <button
                onClick={handleSummarize}
                className={`w-full py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-amber-200 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out ${
                    isLoading ? 'cursor-not-allowed opacity-50' : ''
                }`}
                disabled={isLoading}
            >
                {isLoading ? 'Summarizing...' : 'Summarize'}
            </button>
            <div className="mt-6 flex flex-col items-center">
                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <div
                            className="loader ease-linear rounded-full border-4 border-t-4 border-blue-500 border-opacity-25 h-16 w-16 mb-4 animate-spin"></div>
                        {/*<p className="text-blue-500 mt-2 text-sm">Generating summary...</p>*/}
                    </div>
                ) : (
                    summary && (
                        <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-full max-w-md">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
                            <p className="text-l text-gray-700 border-t border-gray-300 pt-4">
                                {summary}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Summarization;
