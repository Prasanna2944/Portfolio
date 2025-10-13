import ResumeImg from '../assets/resume.jpg';
// 1. This import (resume) now holds the correct, bundled URL string.
import resume from '../assets/prasanna-resume.pdf' 

export default function Resume() {
    // 2. Use the imported variable 'resume' here.
    const config = {
        link: resume // 🛑 CORRECTED: Use the imported file URL
    }

    return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img className='w-[300px]' src={ResumeImg} alt="Resume thumbnail" />
            </div>
            <div className='md:w-1/2 flex justify-center '>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-[#9e3185] mb-5 w-[140px] font-bold'>Resume</h1>
                    {/* 3. The 'download' attribute forces the browser to download the file. */}
                    <p className='pb-5'>
                        You can view my resume 
                        <a className='btn' href={config.link} download="Prasanna_Resume.pdf"> 
                            Download
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}