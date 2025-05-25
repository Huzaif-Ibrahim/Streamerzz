import { motion } from "motion/react"
import { TESTIMONIALS_CONTENT } from "../constants"

const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } }
}

const fadeInUpText = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.4 } }
}

const Testimonials = () => {
    return (
        <section className="max-w-7xl mx-4 lg:mx-auto py-12 md:py-16 border-b border-neutral-800">
            <div className="container flex flex-col items-center">
                <motion.h1 className="text-5xl font-medium mb-4 tracking-tighter text-center bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-100 text-transparent bg-clip-text"
                    variants={fadeInUpText}
                    animate='hidden'
                    whileInView='visible'
                >{TESTIMONIALS_CONTENT.sectionTitle}</motion.h1>

                <motion.p className="max-w-xl text-sm text-neutral-400 text-center mb-8 md:mb-12"
                    variants={fadeInUpText}
                    animate='hidden'
                    whileInView='visible'
                >{TESTIMONIALS_CONTENT.sectionDescription}</motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TESTIMONIALS_CONTENT.reviews.map((e, indx) => {
                        return <motion.div key={indx} className="flex flex-col p-8 bg-neutral-950 border border-neutral-800 rounded-2xl"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <p className="text-sm font-semibold text-neutral-400">{e.review}</p>

                            <div className="flex items-center space-x-4 justify-center mt-12">
                                <img src={e.image} alt={`testimonial-user${indx + 1}`} className="h-12 w-12 rounded-full" />

                                <div className="flex flex-col">
                                    <h4 className="font-bold text-sm">{e.name}</h4>
                                    <p className="text-sm text-neutral-400">{e.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Testimonials