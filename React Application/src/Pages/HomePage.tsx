import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="animate-ping animate-infinite animate-duration-1000 animate-ease-in-out mb-20">
                <img src="src/assets/logo.png" alt="Logo" className="w-24 h-24" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-jump animate-once animate-duration-1000 animate-ease-linear">Welcome to React - HuggingFace Application</h1>
            <p className="text-lg text-gray-600 text-center max-w-md animate-fade-up animate-once animate-duration-1000 animate-ease-linear">
                This application allows you to summarize text, generate images from text, and even create 3D models from text using advanced AI models. Start exploring by selecting one of the options in the menu.
            </p>
        </div>
    );
};

export default HomePage;
