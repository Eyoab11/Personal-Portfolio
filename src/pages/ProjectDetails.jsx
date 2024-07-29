import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Example project data (Replace this with a fetch call if needed)

import portfolio from "../assets/portfolio.png"
import mestawerimg from "../assets/mestawet.png"
import mestawetvid from "../assets/last last.mp4"
import discovervid from "../assets/discover vid.mp4"
import tictactoevid from "../assets/tictactoe.mp4"
import weathervid from "../assets/weather.mp4"
import bootstrapvid from "../assets/bootstap first.mp4"
import anbessavid from "../assets/anbessafit video.mp4"
import anbessafitimgg from '../assets/anbessafitimg.jpg';
import tictactoeimgg from '../assets/tictactoe.png';
import weatherimgg from '../assets/weather.png';
import discoverethiopiaimgg from '../assets/discoverEthiopia.png';
import memariyaimgg from '../assets/memariya.com.png';
import bootstrapimgg from '../assets/bootstrap.png';
import personal from "../assets/personal.mp4"

const projectData = {
    mestawet: {
        title: 'Social Media Website : Mestawet',
        description: "Mestawet is a cool social media platform built using React, Tailwind CSS, Appwrite, and ReactQuery. It lets users create profiles, post updates, and connect with others easily. The React framework ensures the site is dynamic and responsive, while Tailwind CSS keeps the design sleek and consistent. Appwrite powers the backend, providing services like user authentication, database management, and real-time data handling. This setup makes sure everything runs smoothly and securely. ReactQuery also plays a big role in managing data fetching and state, which means the user experience is always top-notch. What makes Mestawet special is the thoughtful use of these modern technologies. It's not just a social media platform; it's a showcase of how current web development tools can come together to create an engaging user experience. Working on this project has been a great opportunity to apply and enhance my skills in both front-end and back-end development.",
        tech: 'React, Tailwind CSS, Appwrite, ReactQuery',
        status: 'Completed',
        githubLink: 'https://github.com/Eyoab11/mestawet',
        workType: 'Individual',
        deployedLink: 'https://mestawet-app.vercel.app/',
        images: [mestawerimg],
        video: [mestawetvid]
    },
    personalPortfolio: {
        title: 'Personal Portfolio',
        description: "My personal portfolio is a key project that highlights the skills and experiences I've gained throughout my web development journey. Initially, I built this portfolio using Tailwind CSS, focusing on creating a clean, aesthetically pleasing, and responsive design. Tailwind CSS allowed me to efficiently style the website, ensuring that it looked great on all devices, from desktops to mobile phones. The minimalist design emphasizes usability and accessibility, making it easy for visitors to navigate and find the information they need. As I continued to develop my skills, I decided to rebuild the portfolio using React, a powerful JavaScript library for building user interfaces. This transition to React significantly enhanced the interactivity and functionality of the site. With React, I was able to implement dynamic features, such as smooth page transitions, interactive project displays, and a more sophisticated state management system. These additions provide a richer and more engaging user experience, allowing visitors to explore my projects and skills in a more immersive way. The portfolio not only showcases my technical skills but also reflects my growth as a developer. It includes detailed descriptions of my projects, outlining the technologies used and the challenges overcome. By integrating my GitHub projects and linking to live demos, I offer a comprehensive view of my capabilities in front-end and back-end development, as well as my experience with various programming languages and frameworks. Overall, this portfolio serves as a professional digital presence, demonstrating my commitment to continuous learning and improvement in the field of web development. It is a testament to my ability to create functional, user-friendly, and visually appealing web applications.",
        tech: 'React, Tailwind CSS',
        status: 'Completed',
        githubLink: 'https://github.com/Eyoab11/portfolio',
        workType: 'Individual',
        images: [portfolio],
        video: [personal]
    },
    anbessaFit: {
        title: 'Backend for Fitness Website',
        description: "For the backend of this fitness website, I used NestJS and MySQL to create a robust and scalable system. NestJS's modular architecture makes it easy to organize and manage various features of the application. MySQL handles the data storage and management, ensuring efficient and reliable performance. Key modules of the application focus on different aspects, including user management, authentication, and specific fitness-related features like workout planning, as well as weight loss and gain planning. This setup ensures a well-structured and maintainable backend, ready for future enhancements and scalability. The combination of NestJS and MySQL provides a powerful foundation for developing a comprehensive fitness platform.",
        tech: 'NestJS, mySQL',
        status: 'Done',
        workType: 'Individual',
        images: [],
        githubLink: 'https://github.com/Eyoab11/AnbessaFit',
    },
    fitnessApp: {
        title: 'Fitness Mobile App',
        description: "Our fitness mobile app, developed with Flutter, offers a user-friendly interface designed to make fitness planning easy and enjoyable. The app’s sleek and intuitive UI ensures that you can navigate through your fitness routines and nutrition plans effortlessly, whether you’re on an Android or iOS device. The workout planner is designed with simplicity in mind, allowing you to set up and manage your exercise schedules with ease. The nutrition page provides helpful suggestions and an organized layout to help you make informed dietary choices. Additionally, the nutrition planner is designed to help you map out your meals and track your intake in a straightforward manner. Our focus was on creating a clean, functional UI that enhances your fitness experience without any hassle. With its well-designed interface, the app makes it easy for you to stay on top of your fitness and nutrition goals.",
         tech: 'Flutter',
        status: 'Completed',
        githubLink: 'https://github.com/Eyoab11/flutter-2024-AnbessaFit',
        images: [anbessafitimgg],
        workType: 'Team',
        video: [anbessavid]
    },
    ticTacToe: {
        title: 'Tic-Tac-Toe',
        description: "I developed this Tic-Tac-Toe game as a solo project, combining modern web technologies and advanced algorithms to create an engaging experience. Built with React and Tailwind CSS, the game features a sleek, responsive design that looks great on any device.One of the standout features of the game is its challenging AI opponent, powered by the Minimax algorithm. This algorithm enables the AI to make optimal moves by evaluating every possible outcome, ensuring a tough and strategic challenge for players. By recursively exploring potential game states, the Minimax algorithm allows the AI to anticipate and counteract player strategies effectively. Through this project, I demonstrated my ability to blend front-end design with sophisticated algorithms. The result is a visually appealing game that not only offers dynamic user interactions but also showcases my skills in integrating complex AI techniques into a functional and enjoyable experience.",
         tech: 'React, Tailwind, AI Integration',
        status: 'Completed',
        githubLink: 'https://github.com/Eyoab11/PRODIGY_WD_03',
        workType: 'Individual',
        images: [tictactoeimgg],
        video: [tictactoevid]

    },
    weatherApp: {
        title: 'Weather App',
        description: "I developed this weather application using React and Tailwind CSS to deliver a sleek and responsive user experience. The app features a clean, intuitive design that ensures users can easily access weather information, whether they’re on a phone or a desktop. The real highlight of this project is its integration with a weather API, which provides real-time data on current conditions, forecasts, and more. By leveraging this API, the app fetches up-to-date weather information and displays it in a user-friendly format. This integration not only enhances the app's functionality but also demonstrates my ability to work with external data sources to create a dynamic and responsive application. Through this project, I showcased my skills in combining front-end technologies with API integration. The result is an efficient weather app that offers accurate and timely weather updates while maintaining a visually appealing and easy-to-navigate interface.",
        tech: 'React, Tailwind, API Integration',
        status: 'Completed',
        githubLink: 'https://github.com/Eyoab11/PRODIGY_WD_05',
        workType: 'Individual',
        images: [weatherimgg],
        video: [weathervid]

    },
    discoverEthiopia: {
        title: 'Discover Ethiopia - Travel Website',
        description: "The “Discover Ethiopia” travel website is a beautifully crafted platform built with HTML, CSS, and JavaScript. The site highlights Ethiopia’s rich cultural and natural heritage, offering users a visual and immersive experience. With stunning imagery and engaging content, it provides an inviting glimpse into the diverse landscapes and traditions of Ethiopia. The website utilizes responsive design principles to ensure that it looks and functions flawlessly across all devices, from smartphones to desktop computers. JavaScript is employed to add interactive elements, enhancing user engagement with features like dynamic content loading and smooth transitions. These interactive aspects make exploring the site both enjoyable and informative. This project combines effective design with functional interactivity.",
        tech: 'HTML, CSS, JavaScript',
        status: 'Completed',
        githubLink: 'https://github.com/Eyoab11/Discover-Ethiopia',
        deployedLink: 'https://eyoab11.github.io/Discover-Ethiopia/',
        workType: 'Individual',
        images: [discoverethiopiaimgg],
        video: [discovervid]
    },
    bootstrapPortfolio: {
        title: 'Portfolio',
        description: "This personal portfolio website, built using Bootstrap, marks the beginning of my web development journey. As an amateur project, it’s not perfect, but it was a crucial step in understanding the basics of web development. I learned a lot about using Bootstrap’s grid system and responsive design features, which helped me create a layout that works on both desktops and mobile devices. While the design and functionality are quite basic, this project provided me with valuable insights into web development. It taught me how to structure a page, manage responsiveness, and apply fundamental design principles. Despite its simplicity, it’s an important milestone in my learning process and set the stage for more advanced projects in the future.",
        tech: 'Bootstrap',
        status: 'Partially Done',
        githubLink: 'https://github.com/Eyoab11/UGR-5756-14-bootstrap',
        workType: 'Individual',
        images: [bootstrapimgg],
        video: [bootstrapvid]
    },
    memariya: {
        title: 'Educational Platform - Memariya.com',
        description: "Memariya.com is an exciting educational platform we developed as a team, packed with features designed to make learning engaging and effective. We used MongoDB to handle all the data, ensuring that everything from course materials to student progress is managed smoothly and reliably. React powers the dynamic user interfaces, giving users a smooth and interactive experience, while Tailwind CSS adds a stylish and modern look to the whole site. On the server side, Express.js keeps everything running efficiently, making sure the platform is responsive and quick. The platform isn’t just about static content—it offers interactive courses that make learning fun, personalized learning paths tailored to individual needs, and a robust student management system to keep track of everyone’s progress. Overall, Memariya.com is a showcase of how modern tech can come together to create a rich and flexible learning environment. It’s a great example of how teamwork and tech can build something truly useful and engaging!",
        tech: 'MongoDB, React, Tailwind, ExpressJs',
        status: 'Completed',
        workType: 'Team',
        githubLink: 'https://github.com/Bemnet-13/Memariya.com',
        images: [memariyaimgg],
    },
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData[id];

    // Log the project data

    if (!project) {
        return (
            <div>
                <h1>Project Not Found</h1>
                <p>The project you're looking for does not exist.</p>
            </div>
        );
    }

    return (
        <>
        <section>
            <div className="container m-auto pt-5 px-6 ">
                <Link
                    to="/"
                    className="text-green-900 hover:text-indigo-600 flex items-center"
                >
                    <FaArrowLeft className='mr-2' /> Back to Home
                </Link>
                
            </div>
        </section>

        <section className="">
            <div className="container m-auto py-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                    <main>
                    <h1 className="text-3xl font-bold mb-4 text-center">{project.title}</h1>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                            
                            <p className="text-black mb-4">{project.description}</p>
                            <p className="text-gray-500 mb-4">
                                <strong>Technologies Used:</strong> {project.tech}
                            </p>
                            <h3 className="text-indigo-500 mb-2"> {project.workType} Work</h3>
                            <p className="text-green-500 mb-4">
                                <strong>Status:</strong> {project.status}
                            </p>
                            <div className='flex flex-row justify-evenly'>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub Link
                            </a>
                            {project.deployedLink && (
                                <>
                                    <br />
                                    <a
                                        href={project.deployedLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Deployed Link
                                    </a>
                                </>
                               
                            )}
                             </div>
                        </div>
                    </main>

                    <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Media Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images && project.images.length > 0 && project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  ))}
                  {project.video && (
                    <div className="w-full">
                      <video controls className="w-full rounded-lg shadow-md">
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              </div>
            </aside>
                </div>
            </div>
        </section>
    </>
    );
};

export default ProjectDetails;
