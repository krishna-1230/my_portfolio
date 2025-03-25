import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
    // Animation variants for the modal
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={modalVariants}
                    onClick={onClose} // Close modal when clicking outside
                >
                    <motion.div
                        className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ReactVideoApp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoUrl] = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U'); // Example YouTube URL

    //Added inline styles, since we removed the imports for Button and cn
    const buttonStyle = {
        backgroundColor: 'linear-gradient(to right, #8b5cf6, #ec4899)',
        color: '#fff',
        padding: '0.75rem 2rem',
        borderRadius: '9999px', // rounded-full
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', // shadow-lg
        transition: 'all 0.3s ease',
        fontWeight: '600', // font-semibold
        fontSize: '1.125rem', // text-lg
        cursor: 'pointer',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const buttonHoverStyle = {
        backgroundImage: 'linear-gradient(to right, #7c3aed, #d946ef)',
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start pt-12">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Interactive Video App
            </h1>

            {/* Video Player Section */}
            <div className="mb-8 w-full max-w-4xl">
                <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                    <ReactPlayer
                        url={videoUrl}
                        width="100%"
                        height="auto"
                        controls // Show standard video controls
                        // Add className for custom styling if needed.  Tailwind is preferred.
                        className="rounded-t-lg"
                    />
                </div>
                <p className="mt-4 text-gray-300 text-sm">
                    This is an interactive video experience.  Click the button below
                    to learn more.
                </p>
            </div>

            {/* Interactive Button */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <button
                    onClick={() => setIsModalOpen(true)}
                    style={{
                        ...buttonStyle,
                        '&:hover': buttonHoverStyle,
                    }}
                >
                    Learn More
                </button>
            </motion.div>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">About This App</h2>
                <p className="text-gray-700 mb-4">
                    This is a demonstration of an interactive video application
                    built with React.  It uses React Player for video playback,
                    Tailwind CSS for styling, and Framer Motion for animations.
                </p>
                <p className="text-gray-700 mb-6">
                    The video above is a placeholder.  You can replace it with any
                    other video URL.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
                >
                    Close
                </button>
            </Modal>
            {/* Section Divider */}
            <div className="w-full max-w-4xl my-12 border-t border-gray-700">
                <p className="text-center text-gray-400 mt-4 text-sm">
                    End of demo.
                </p>
            </div>
        </div>
    );
};

export default ReactVideoApp;

