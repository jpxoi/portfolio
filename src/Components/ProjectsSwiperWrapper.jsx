import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectsCard from "./ProjectsCard";
import { useEffect } from 'react';

const ProjectsData = [
    {
        id: "proj1",
        title: "Year In Review",
        description: "Year In Review is a video series featuring the best of the year in a 20-minute film. Explore the full playlist with the most remarkable videos of each year.",
        image: "img/projects/proj1.webp",
        link: "https://youtube.com/playlist?list=PLb_8wW-vXtR4OP169FqJC3dVa2MK-oGeb",
        cta: "Explore Playlist",
    },
    {
        id: "proj2",
        title: "CS50",
        description: "A repository with all the code that was written during the Harvard CS50x 2023 course. It covers various topics related to programming.",
        image: "img/projects/proj2.webp",
        link: "https://github.com/jpxoi/cs50",
        cta: "Explore Repository",
    },
    {
        id: "proj3",
        title: "Manchester Cinematic",
        description: "Immerse yourself in the wonderful city of Manchester, in 4K HDR, with its many historic landmarks, museums, art galleries and football stadiums!",
        image: "img/projects/proj3.webp",
        link: "https://youtu.be/X2NNSlcrEQU",
        cta: "Watch Video",
    },
    {
        id: "proj4",
        title: "Deepfakes",
        description: "Deepfakes are everywhere, and it is difficult for many people to identify them. The technology of deepfakes can represent a big danger for trust in our society.",
        image: "img/projects/proj4.webp",
        link: "https://deepfakes.jpxoi.com",
        cta: "Watch Keynote",
    }
]

function ProjectsSwiperWrapper() {
    
    useEffect(() => {
        new Swiper('.projects__container', {
            modules: [Navigation, Pagination],
            spaceBetween: 24,
            loop: true,
            grabCursor: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }
        });
    }, []);
    
    return (
        <div className="swiper-wrapper">
            {
                ProjectsData.map((project) => {
                    return (
                        <ProjectsCard
                            key={ project.id }
                            name={ project.title }
                            description={ project.description }
                            link={ project.link }
                            img={ project.image }
                            cta={ project.cta }
                        />
                    )
                })
            }
        </div>
    )
}

export default ProjectsSwiperWrapper;