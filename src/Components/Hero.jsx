import { HERO_CONTENT } from "../constants"
import { BRAND_LOGOS } from "../constants"
import heroImg from "../assets/hero.jpg"
import { easeIn, motion } from "motion/react"

const fadeInUp = {
  hidden : { opacity:0 , y:40 },
  visible : { opacity:1 , y:0 , transition : { ease:'easeOut' , duration:0.4 , delay:0.1 } }
}

const Hero = () => {
  return (
    <section className="max-w-7xl mx-4 mt-32 lg:mx-auto flex justify-center border-b border-neutral-800">
      <div className="container flex flex-col items-center mb-12 md:mb-16">
        <motion.p className="rounded-3xl text-[12px] border border-neutral-800 px-3 py-2 mb-8 md:mb-12"
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        >{HERO_CONTENT.badgeText}</motion.p>

        <motion.h1 className="flex flex-col text-center text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 text-transparent bg-clip-text tracking-tighter overflow-visible leading-none mb-8"
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        >
          {HERO_CONTENT.mainHeading.split('\n').map((e,i)=>{
            return <span key={i}>
              {e}
            </span>
          })}
        </motion.h1>

        <motion.p className="max-w-lg text-center text-sm mb-6 text-neutral-400"
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        >{HERO_CONTENT.subHeading}</motion.p>

        <motion.div className="flex items-center justify-center space-x-4 mb-8 md:mb-10"
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        >
          <button className='rounded-lg text-sm px-4 py-2 border border-neutral-800 hover:bg-neutral-800 transition duration-300 font-semibold'>{HERO_CONTENT.callToAction.primary}</button>
          <button className='bg-blue-700 rounded-lg px-4 py-2 text-sm md:py-2 hover:bg-blue-500 transition duration-300 font-semibold'>{HERO_CONTENT.callToAction.secondary}</button>
        </motion.div>

        <motion.p className="text-sm mb-8 lg:mb-4 text-neutral-400"
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        >{HERO_CONTENT.trustedByText}</motion.p>

        <motion.div className="flex flex-wrap justify-center items-center mb-12"
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        >
          {BRAND_LOGOS.map((e,indx)=>{
            return <img key={indx} src={e.src} alt={e.alt} className="max-h-8 m-2 transition duration-300 hover:scale-110 lg:h-10 lg:m-4"></img>
          })}
        </motion.div>

        <motion.div className="rounded-xl overflow-hidden border border-orange-500"
        variants={fadeInUp}
        initial='hidden'
        animate='visible'
        >
          <img src={heroImg} alt="hero-image w-16" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero