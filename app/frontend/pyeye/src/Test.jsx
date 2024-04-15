import {motion} from "framer-motion"
import React from 'react';

const Test = () => {

    return (
        <div className="course">
            <motion.div className="box"
            initial={{opacity:0.5, scale:0.5}}
            transition={{duration:2}}
            whileInView={{opacity:1, scale:2}}
            drag
            ></motion.div>
        </div>
    );
}

export default Test;
