import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'Im a Full-Stack Developer',
        social: {
            twitter: '',
            linkedin: 'https://www.linkedin.com/in/prasanna-venkatesh-s-76304b240',
            github: 'https://github.com/Prasanna2944'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-6xl font-hero-font'>Hi, <br />I'm Prasanna  venkatesh 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10 '>
                <a href={config.social.twitter} target="_blank" className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
                <a href= {config.social.linkedin} target="_blank" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} target="_blank" className='hover:text-white'><AiOutlineGithub size={40}/></a>

            </div>
        </div>
        
        <img className='md:w-1/3' src={HeroImg} />

    </section>
}