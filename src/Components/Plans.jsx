import { motion } from "motion/react"
import { PLANS_CONTENT } from "../constants"

const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } }
}

const fadeInUpText = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.4 } }
}


const Plans = () => {
    return (
        <section className="max-w-7xl mx-4 lg:mx-auto py-12 md:py-16 border-b border-neutral-800">
            <div className="container flex flex-col items-center">
                <motion.h1 className="text-5xl font-medium mb-4 tracking-tighter bg-gradient-to-b from-neutral-700 via-neutral-400 to-neutral-100 text-transparent bg-clip-text"
                    variants={fadeInUpText}
                    animate='hidden'
                    whileInView='visible'
                >{PLANS_CONTENT.sectionTitle}</motion.h1>

                <motion.p className="max-w-xl text-sm text-neutral-400 text-center mb-8 md:mb-12"
                    variants={fadeInUpText}
                    animate='hidden'
                    whileInView='visible'
                >{PLANS_CONTENT.sectionDescription}</motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PLANS_CONTENT.plans.map((e, indx) => {
                        return <motion.div key={indx} className="flex flex-col bg-neutral-950 border border-neutral-800 rounded-lg p-8 space-y-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {e.popular && (
                                <div className="flex justify-center">
                                    <p className="bg-blue-700 px-4 py-1 uppercase text-sm rounded-full font-semibold" >{PLANS_CONTENT.popularBadge}</p>
                                </div>
                            )}
                            <h3 className="font-medium text-xl uppercase">{e.name}</h3>
                            <p className="text-sm text-neutral-400">{e.description}</p>
                            <h2 className="text-3xl mt-2 mb-6 font-semibold">{e.price}</h2>
                            <ul className="list-disc pl-4 text-sm text-neutral-400 leading-6 font-semibold">
                                {e.features.map((elem, i) => {
                                    return <li>{elem}</li>
                                })}
                            </ul>
                            <button className='bg-blue-700 rounded-lg px-4 py-2 text-sm md:py-2 hover:bg-blue-500 transition duration-300 font-semibold'>{PLANS_CONTENT.ctaText}</button>
                        </motion.div>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Plans