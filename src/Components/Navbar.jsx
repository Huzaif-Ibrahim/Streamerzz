import { Menu, Pointer, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { useState } from 'react'
import { motion } from 'motion/react'

const navVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay:0.1 , ease: 'easeOut' } }
};


const Navbar = () => {

    const [isMenu, setIsMenu] = useState(false)

    return (
        <motion.nav className="px-6 py-3 max-w-7xl mx-4 lg:mx-auto rounded-4xl fixed top-4 left-0 right-0 border border-neutral-800/60 backdrop-blur-lg "
        variants={navVariant}
        initial='hidden'
        animate='visible'
        >
            <div className="container flex justify-between items-center">
                <img src={logo} alt="logo" className='h-6' />

                <div className="hidden lg:flex md:space-x-6 text-neutral-400 text-sm">
                    <a href="/" className='hover:text-neutral-100'>How it works</a>
                    <a href="/" className='hover:text-neutral-100'>Pricing</a>
                    <a href="/" className='hover:text-neutral-100'>Testimonials</a>
                </div>

                <div className="hidden lg:flex space-x-6 items-center text-sm">
                    <a href="/" className='hover:text-neutral-100 text-neutral-400'>Login</a>
                    <button className='bg-blue-700 rounded-lg px-2 py-2 hover:bg-blue-500 transition duration-300'>Get a demo</button>
                    <button className='rounded-lg px-2 py-2 border border-neutral-800 hover:bg-neutral-800 transition duration-300'>Start Free Trial</button>
                </div>

                <div className='lg:hidden'>
                    {isMenu ? <X size={25} onClick={() => setIsMenu(!isMenu)} cursor='pointer' /> : <Menu size={25} onClick={() => setIsMenu(!isMenu)} cursor='pointer' />}
                </div>
            </div>

            {isMenu && (
                <div className='mt-4 flex flex-col items-center space-y-4 py-2'>
                    <a href="/">How it works</a>
                    <a href="/">Pricing</a>
                    <a href="/">Testimonials</a>
                    <a href="/">Login</a>
                    <div className='flex space-x-2'>
                        <button className='bg-blue-700 rounded-lg px-3 py-2'>Get a demo</button>
                        <button className='rounded-lg px-3 py-2 border border-neutral-800'>Start Free Trial</button>
                    </div>
                </div>
            )}
        </motion.nav>
    )
}

export default Navbar