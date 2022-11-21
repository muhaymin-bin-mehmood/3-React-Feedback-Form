import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import Card from "../Compnent/shared/Card"

const AboutPage = () => {
    return (

        <AnimatePresence>
            <motion.div
                initial={{
                    x: 0,
                    y: 124,
                    scale: 1,
                    rotate: 0,
                    opacity: 0,

                }}
                animate={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                }}
            >
                <Card>
                    <div className="about">
                        <h1>About This project</h1>
                        <p>This is a React app to leave a feedback for a product or services</p>
                        <p>Version: 1.0.0</p>

                        <p>
                            <Link to="/">Home</Link>
                        </p>
                    </div>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}

export default AboutPage
