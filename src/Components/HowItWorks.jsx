import { easeIn, motion } from "motion/react"
import { HOW_IT_WORKS_CONTENT } from "../constants"

const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } }
}

const fadeInUpText = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.4 } }
}

const HowItWorks = () => {
    return (
        <section className="max-w-7xl mx-4 lg:mx-auto py-12 md:py-16 border-b border-neutral-800">
            <div className="container flex flex-col items-center">
                <motion.h1 className="text-5xl font-medium mb-4 tracking-tighter bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-100 text-transparent bg-clip-text"
                    variants={fadeInUpText}
                    animate='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                >{HOW_IT_WORKS_CONTENT.sectionTitle}</motion.h1>
                <motion.p className="max-w-xl text-sm text-neutral-400 text-center mb-8 md:mb-12"
                    variants={fadeInUpText}
                    animate='hidden'
                    whileInView='visible'
                >{HOW_IT_WORKS_CONTENT.sectionDescription}</motion.p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {HOW_IT_WORKS_CONTENT.steps.map((e, indx) => {
                        return <motion.div key={indx} className="bg-neutral-900 rounded-lg p-6 flex flex-col justify-between"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">{e.title}</h3>
                                <p className="text-sm text-neutral-400 mb-4">{e.description}</p>
                            </div>
                            <img src={e.imageSrc} alt={e.imageAlt} className="rounded-lg" />
                            {e.users && (
                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex -space-x-2">
                                        {e.users.map((elem, i) => {
                                            return <img key={i} src={elem} className="h-8 w-8 rounded-full border-2 border-black" ></img>
                                        })}
                                    </div>

                                    <button className='bg-blue-700 rounded-lg px-4 py-2 text-sm md:py-2 hover:bg-blue-500 transition duration-300 font-semibold'>Connect</button>
                                </div>
                            )}
                        </motion.div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks