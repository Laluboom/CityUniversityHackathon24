'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const DeviceUI = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth2} mx-auto flex flex-col`}
        >
            {/* Home Screen with Start Button */}
            <motion.div
                variants={slideIn('up', 'tween', 0.3, 1)}
                className="relative z-10 flex flex-col items-center justify-center mb-6"
            >
                <button className="bg-green-500 text-white py-4 px-10 rounded-lg text-xl cursor-pointer hover:bg-green-600 transition">
                    Start Scan
                </button>
                <div className="absolute top-0 right-0 flex space-x-4 mt-4 mr-4 text-sm text-gray-500">
                    <span>🔋 85%</span>
                    <span>📶 Connected</span>
                </div>
            </motion.div>

            {/* Simple Live Scanning Interface */}
            <motion.div
                variants={slideIn('up', 'tween', 0.5, 1)}
                className="relative flex flex-col items-center bg-white rounded-xl shadow-lg p-4 mb-6"
            >
                <h3 className="font-bold text-lg mb-2">Live Scan</h3>
                <img src="/scan-image-placeholder.jpg" alt="Current Scan" className="w-full h-48 object-cover rounded-lg mb-2" />
                <div className="flex justify-around w-full text-gray-700">
                    <span>Oxygen Level: 98%</span> | <span>Blood Flow: Normal</span>
                </div>
                <div className="w-full h-2 bg-green-500 rounded-full mt-3"></div>
            </motion.div>

            {/* Auto-Send and Support Button */}
            <motion.div
                variants={slideIn('up', 'tween', 0.7, 1)}
                className="flex flex-col items-center mb-6"
            >
                <p className="text-gray-600">Data automatically uploaded to cloud</p>
                <button className="bg-yellow-500 text-white py-3 px-8 rounded-md mt-4 hover:bg-yellow-600 transition">
                    Call for Support
                </button>
            </motion.div>

            {/* Minimalistic Data History */}
            <motion.div
                variants={slideIn('up', 'tween', 0.9, 1)}
                className="flex flex-col items-center mb-6"
            >
                <h3 className="text-xl font-semibold mb-3">Recent Scans</h3>
                <ul className="space-y-2 w-full">
                    {['Scan 1: Normal', 'Scan 2: Low Oxygen', 'Scan 3: Normal', 'Scan 4: Normal', 'Scan 5: Low Blood Flow'].map((scan, index) => (
                        <li key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm text-center">
                            {scan}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Guided Placement Prompt */}
            <motion.div
                variants={slideIn('up', 'tween', 1.1, 1)}
                className="flex flex-col items-center mb-6"
            >
                <p className="font-bold text-center mb-2">Position Device as Shown</p>
                <img src="/placement-guide-placeholder.jpg" alt="Placement Guide" className="w-3/4 h-36 object-cover rounded-lg shadow-md" />
            </motion.div>

            {/* Emergency Mode Lock-In */}
            <motion.div
                variants={slideIn('up', 'tween', 1.3, 1)}
                className="flex justify-center mb-6"
            >
                <button className="bg-red-500 text-white py-3 px-8 rounded-lg hover:bg-red-600 transition">
                    Emergency Mode
                </button>
            </motion.div>

            {/* Alerts and Notifications */}
            <motion.div
                variants={slideIn('up', 'tween', 1.5, 1)}
                className="flex flex-col items-center mb-6"
            >
                <p className="text-red-500 font-bold">Battery Low!</p>
                <p className="text-yellow-500">Connection Poor</p>
            </motion.div>

            {/* Streamlined Settings */}
            <motion.div
                variants={slideIn('up', 'tween', 1.7, 1)}
                className="flex justify-center mb-6"
            >
                <button className="bg-gray-700 text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition">
                    Reset Device
                </button>
            </motion.div>
        </motion.div>
    </section>
);

export default DeviceUI;
