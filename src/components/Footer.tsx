import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-full">
            <div className="container mx-auto py-5">
                <hr className="my-5 border-gray-200 dark:border-gray-700" />

                <div className="flex flex-col items-center md:flex-row md:justify-between">
                    <p className="text-center md:text-left text-sm text-gray-600 dark:text-gray-400">
                        © 2024, made with ❤️ by Creative Team for a better web.
                    </p>

                    <div className="flex flex-col mt-6 md:mt-0 md:flex-row md:space-x-6">
                        <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 hover:underline">
                            About
                        </a>
                        <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 hover:underline">
                            Blog
                        </a>
                        <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 hover:underline">
                            News
                        </a>
                        <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 hover:underline">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
