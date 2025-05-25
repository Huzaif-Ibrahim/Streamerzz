import { motion } from "motion/react"
import { KEY_FEATURES_CONTENT } from "../constants"

const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } }
}

const fadeInUpText = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.4 } }
}

const Features = () => {
    return (
        <section className="max-w-7xl mx-4 lg:mx-auto py-12 md:py-16 border-b border-neutral-800">
            <div className="container flex flex-col items-center text-center">
                <motion.h1 className="text-5xl font-medium mb-4 tracking-tighter bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-100 text-transparent bg-clip-text"
                    variants={fadeInUpText}
                    animate='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >{KEY_FEATURES_CONTENT.sectionTitle}</motion.h1>

                <motion.p className="max-w-xl text-sm text-neutral-400 text-center mb-8 md:mb-12"
                    variants={fadeInUpText}
                    animate='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >{KEY_FEATURES_CONTENT.sectionDescription}</motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {KEY_FEATURES_CONTENT.features.map((e) => {
                        return <motion.div className="flex flex-col items-center p-4 space-y-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {e.icon}
                            <div className="flex flex-col items-center space-y-2 text-center">
                                <h3 className="font-semibold text-lg">{e.title}</h3>
                                <p className="text-sm text-neutral-400 mb-4">{e.description}</p>
                            </div>
                        </motion.div>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Features