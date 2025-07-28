import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        {/* Unique Loading Indicator */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 mx-auto relative">
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 border-4 border-[#DDDAD0] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner Ring */}
            <motion.div
              className="absolute inset-2 border-4 border-[#57564F] rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center Dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#F8F3CE] rounded-full transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.5, 1],
                backgroundColor: ['#F8F3CE', '#57564F', '#F8F3CE']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-[#57564F] mb-4">
            Selam! ሰላም
          </h2>
          <p className="text-[#7A7A73] text-2xl">
            Loading your experience...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading; 