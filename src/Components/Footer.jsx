import { motion } from "motion/react";
import { FOOTER_CONTENT } from "../constants"

const footerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};


const Footer = () => {
  return (
    <motion.footer className="max-w-7xl mx-4 lg:mx-auto pt-12 md:pt-16 "
    variants={footerVariant}
    initial='hidden'
    whileInView='visible'
    viewport={{once:true , amount:0.3}}
    >
        <div className="pre-footer flex flex-col space-y-12 lg:flex-row lg:items-center lg:justify-between pb-12 md:pb-16 border-b border-neutral-800">
            {FOOTER_CONTENT.sections.map((e,indx)=>{
                return <div key={indx} className="flex flex-col">
                    <h4 className="font-bold text-sm mb-4">{e.title}</h4>
                    <div className="flex flex-col space-y-2">
                        {e.links.map((elem,i)=>{
                        return <a key={i} href={elem.url} className="text-sm text-neutral-400">
                            {elem.text}
                        </a>
                    })}
                    </div>
                </div>
            })}
        </div>

        <div className="post-footer flex flex-col space-y-4 md:space-y-0 md:flex-row items-center md:justify-between py-6">
            <p className="text-sm text-center text-neutral-400">{FOOTER_CONTENT.platformsText}</p>
            <p className="text-sm text-neutral-400">{FOOTER_CONTENT.copyrightText}</p>
        </div>
    </motion.footer>
  )
}

export default Footer