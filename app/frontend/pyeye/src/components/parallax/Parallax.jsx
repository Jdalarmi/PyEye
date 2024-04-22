import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
    const yBx = useTransform(scrollYProgress, [0,1], ["0%", "500%"])

    return (
        <div className="parallax" ref={ref}
        style={{
            background:
            type ==="services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            :"linear-gradient(180deg, #111132, #505064)",}}>



            <motion.h1>
                {type==='services' ? "What We Do?" : "Py Eye"}
                <p>Um projeto open source que monitora e preserva sua saúde visual.</p>
                    <p>enquanto coleta dados para análises futuras.</p>
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{y:yBg}} className="planets"></motion.div>
            <motion.div style={{y:yBx}} className="stars"></motion.div>
        </div>
    )
}

export default Parallax;