import Head from 'next/head'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { FiAward } from "react-icons/fi"
import { VscFeedback } from "react-icons/vsc"
import { TfiWorld } from "react-icons/tfi"
import Image from "next/image";
import headshot1 from "../public/headshot-1.jpg"
import headshot2 from "../public/headshot-2.jpg"
import action1 from "../public/action-1.jpg"
import action2 from "../public/action-2.jpg"
import action3 from "../public/action-3.jpg"


export default function Home() {
  return (
    <div>
      <>
        <Head>
          <title>Joshua Bomba</title>
          <meta name="description" content="Artist Portfolio for Josh Bomba" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=' bg-gray-200 text-black px-10 dark:bg-gray-900 dark:text-white md:px-20 lg:px-40'>

          <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-end'>
              <ul className='flex items-center'>
                <li><a className='bg-gradient-to-r from-red-200 to-gray-400 text-white px-4 py-2 rounded-md ml-8' href="mailto:jbomba53@gmail.com">Email Me</a></li>
              </ul>
            </nav>
            <div className='text-center p-1'>
              <h2 className='text-5xl py-2 text-gray-700 font-medium md:text-6xl'>Josh Bomba</h2>
              <h3 className='text-2xl py-2 text-red-300 md:text-3xl'>Chicago Based Actor</h3>
              <p className='text-md py-5 leading-8 text-gray-600 dark:text-white md:text-xl max-w-xxl mx-auto'>If Kevin James and James Gandolfini had a big, bearded son, that&apos;d be me. Award-nominated actor based in Chicago, IL. Trained with talented folks such as Sarah Charipar, Sean Bradley, and Jason Narvy. Seen on stage with the Jeff Award winning Saltbox Theatre Collective. Professional spoken word poetry experience. Improv experience. 2006 Time Person of the Year. The best cat dad you will ever meet.</p>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
              <Image alt='headshot of actor' src={headshot1} layout="fill" objectFit="cover" />
            </div>
          </section>

          <section>
            <div>
              <h3 className='text-3xl text-gray-600 py-1'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-500 dark:text-white'>A selection of some of my previous productions.</p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center items-center'>
              <div><Image width={parseFloat('500%')} height={parseFloat('500%')} className='rounded-lg object-cover' alt='portfolio image 1' src={action1} /></div>
              <div><Image width={parseFloat('500%')} height={parseFloat('500%')} className='rounded-lg object-cover' alt='portfolio image 1' src={action2} /></div>
              <div><Image width={parseFloat('500%')} height={parseFloat('500%')} className='rounded-lg object-cover' alt='portfolio image 1' src={action3} /></div>
            </div>
          </section>

          <section>
            <div>
              <h3 className='text-3xl text-gray-600 py-1'>Experience</h3>
              <p className='text-md py-2 leading-8 text-gray-500 dark:text-white'>Brings positive energy and storytelling experience to any role he plays. Willing to do what&apos;s best for the production at all times.</p>
            </div>
            <div className='lg:flex gap-10'>
              <div className="text-center bg-gray-400 text-gray-600 shadow-lg p-10 rounded-xl my-10 lg:mx-auto">
                <FiAward className='mx-auto text-6xl' width={100} height={100} />
                <h3 className='text-xl text-red-300 font-medium pt-8 pb-2'>Award-Nominated Actor</h3>
                <p className='text-white dark:text-white py-1'>Willing collaborator</p>
                <p className='text-white dark:text-white py-1'>Featured in variety of short films and commercials</p>
                <p className='text-white dark:text-white py-1'>Character role research</p>
              </div>
              <div className="text-center bg-gray-400 text-gray-600 shadow-lg p-10 rounded-xl my-10 lg:mx-auto">
                <VscFeedback className='mx-auto text-6xl' width={100} height={100} />
                <h3 className='text-xl text-red-300 font-medium pt-8 pb-2'>Experience on Stage and Screen</h3>
                <p className='text-white dark:text-white py-1'>National commercial actor</p>
                <p className='text-white dark:text-white py-1'>Represented by 10 MGMT</p>
                <p className='text-white dark:text-white py-1'>Experience in Chicago&apos;s rich theater scene</p>
              </div>
              <div className="text-center bg-gray-400 text-gray-600 shadow-lg p-10 rounded-xl my-10 lg:mx-auto">
                <TfiWorld className='mx-auto text-6xl' width={100} height={100} />
                <h3 className='text-xl text-red-300 font-medium pt-8 pb-2'>Special Skills</h3>
                <p className='text-white dark:text-white py-1'>Trained in Stage Combat</p>
                <p className='text-white dark:text-white py-1'>Experience with several dialects</p>
                <p className='text-white dark:text-white py-1'>Improv and spoken word experience</p>
              </div>
            </div>
          </section>

          <footer>
            <div className='text-5xl flex justify-center gap-16 py-3 text-red-300'>
              <a href="https://twitter.com/notjoshbomba" rel="noreferrer" target="_blank"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/joshua-bomba/" rel="noreferrer" target="_blank"><AiFillLinkedin /></a>
              <a href="https://www.youtube.com/watch?v=Lvllkch4pU8" rel="noreferrer" target="_blank"><AiFillYoutube /></a>
            </div>
          </footer>

        </main>
      </>
    </div>
  )
}
