import React from 'react';
import { motion } from "motion/react"
import team1 from "../../assets/team/group.jpg"
import team2 from "../../assets/team/people-with-laptop.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-96 mt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <motion.img
                            src={team1}
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="max-w-[280px] rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-5 border-blue-700 " />
                        <motion.img
                            src={team2}
                            animate={{ x: [100, 120, 100] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="max-w-[280px] rounded-t-[40px] rounded-br-[40px] shadow-2xl border-r-4 border-b-5 border-blue-700 " />
                    </div>
                    <div className='flex-1'>
                        <motion.h1 whileHover={{ scale: 1.1 }} initial={{ scale: 0 }} animate={{ scale: 1, }} className="text-5xl font-bold">Latest Jobs For You!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;