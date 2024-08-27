import htmlImage from '../assets/html.png'; // Adjust the path according to your setup

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-content p-10 text-center">
            <div className="mb-6 flex flex-col items-center">
                <img
                    src={htmlImage}
                    alt="HTML logo"
                    className="w-16 h-16 rounded-full object-cover animate-pulse"
                />
                <p className="font-bold text-lg mt-4">
                    Developed by Amjad Khaliliah
                </p>
                <p className="text-sm mt-1">
                    Copyright © {new Date().getFullYear()} - All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;