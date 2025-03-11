import { motion } from "framer-motion";
import "./App.css";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      <motion.img
        src="https://media.licdn.com/dms/image/D5603AQGSX24Z5DdjEw/profile-displayphoto-shrink_400_400/0/1740206463025?v=beta&t=Ab8BtCHSBLKvj87yh4ZMrwDJba6B1ZyWAQPP2RyJCU"
        alt="Jayesh Vyas"
        className="w-32 h-32 rounded-full mb-4 border-4 border-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-5xl font-bold mb-4"
      >
        Coming Soon
      </motion.h1>
      <p className="text-lg">We are working on something amazing. Stay tuned!</p>
    </div>
  );
}
