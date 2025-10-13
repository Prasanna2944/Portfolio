import websiteImg1 from '../assets/ecommerce-websites.png';
import websiteImg2 from '../assets/quiz-application.png';
import websiteImg3 from '../assets/todo-list-application.png';



export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'E-Commerce (QuickCart): Full-stack e-commerce platform using Next.js/MongoDB with Clerk authentication and persistent cart management.',
                link: ''
            },
            {
                image: websiteImg2,
                description: 'Quiz Application: Vanilla JavaScript quiz app featuring dynamic category configuration and core DOM logic.',
                link: ''
            },
            {
                image: websiteImg3,
                description: 'To-Do List Application: JavaScript To-Do app with task CRUD operations, Local Storage persistence, and real-time progress tracking.',
                link: ''
            },
        ]
    }


    return <section id='projects' className="flex flex-col py-20 px-5 justify-center  bg-primary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
             <h1 className="text-4xl border-b-4 border-[#521443] mb-5 w-[140px] font-bold">Projects</h1>
             <p>These are some of my best projects. I have built these with Html, Css, JavaScript, React.js, Node.js, Next.js and MongoDB. Check them out.</p>
        </div>
           
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5 justify-between'>
                {config.projects.map((project) => (
                     <div className='relative w-full md:w-1/3'> 
                        <img className='h-[200px] w-[500px] ' src={project.image} />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>
                                {project.description}
                            </p>
                            <div className='flex justify-center'>
                            <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                        
                    </div>
                    
                ) )}
                  
                   

            </div>
      
        </div>
    </section>
}