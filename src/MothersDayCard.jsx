import React from 'react';
import './MothersDayCard.css'; // For styling
import { motion, useScroll, useTransform } from 'framer-motion';

const MothersDayCard = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const handleClick = () => {
        window.open('https://youtu.be/cpKolP6mMec?si=jx23KZV5u3y2_a1z&t=32', '_blank', 'fullscreen=yes');
    };

    return (
        <div className="card-container">
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 55 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="parallax-image"
                style={{ y }}
            >
                <img src="https://i.pinimg.com/736x/54/15/5e/54155ec9bb926c938a56597778c89f72.jpg" alt="Happy Mother's Day" />
            </motion.div>
            <div className="message-container">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }} // Initial animation state
                    animate={{ opacity: 1, y: -10 }} // Animation when card mounts
                    transition={{ duration: 1, delay: 0.5 }} // Animation duration and delay
                >
                    Happy Mother's Day, Maa!
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }} // Initial animation state
                    animate={{ opacity: 1, y: -18 }} // Animation when card mounts
                    transition={{ duration: 1, delay: 1 }} // Animation duration and delay
                >
                    मिलने को तो हजारों लोग मिल जाएंगे
                    लेकिन मां जैसा अनमोल रत्न दोबारा नहीं मिलता,
                    इसे हमेशा संभाल कर रखना, क्योंकि मां बोलने का दोबारा अवसर कभी नहीं मिलता।                </motion.p>
            </div>
            <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: -50 }}
                transition={{ duration: 1, delay: 0.2 }}
                whileHover={{ scale: 1.1 }} // Scale up on hover
                whileTap={{ scale: 0.9 }} // Scale down on tap
                className="custom-button"
                onClick={handleClick}            >
                Send Love
            </motion.button>
        </div>
    );
}

export default MothersDayCard;