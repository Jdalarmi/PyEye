import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
    open:{
        transition:{
            staggerChildren:0.1
        },
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open:{
        y: 0,
        opacity: 1
    },
    closed:{
        y:50,
        opacity: 0,
    },
};

const Links = () => {

    const items = [
        {title: "Github", link: "https://github.com/Jdalarmi/PyEye"},
        {title: "Linkedin", link: "https://www.linkedin.com/in/jeferson-dalarmi/"},
    ]
    const links = [
        "https://github.com/Jdalarmi",
    ]
    return <motion.div className="links" variants={variants}>
        {items.map(item=>(
        <motion.a href={item.link} key={item.title} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale:0.5}}>
            {item.title}
        </motion.a>
    ))}</motion.div>


};

export default Links;