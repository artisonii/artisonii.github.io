import React from 'react'
import alcazar from "./projectImages/alcazar.png"
import bigbasket from "./projectImages/bigbasket.png"
import wineshop from "./projectImages/wineshop.png"
import bath from "./projectImages/bath.png"
import "./Project.css"
import { motion } from "framer-motion"

const data = [

    {
        img: wineshop,
        projectTitle: "Mine Wine",
        techStack: ["HTML", "JavaScript", "CSS", "firebase"],
        description: "The WineShop website is an online platform for wine enthusiasts to browse, purchase, and explore a wide variety of wine products. It offers user registration and login, a product catalog, product details, a shopping cart, and a checkout process.",
        githubLink: "https://github.com/artisonii/Online-Wine-shop",
        appLink: "https://glowing-marigold-0b2a2a.netlify.app/"
    },
    {
        img: bigbasket,
        projectTitle: "Big Basket",
        techStack: ["HTML", "JavaScript", "CSS"],
        description: "BigBasket is a web application that replicates the popular online grocery shopping platform, BigBasket. The project aims to showcase the frontend design and functionality of the BigBasket website, allowing users to browse products, add them to the cart, and proceed through the checkout process.",
        githubLink: "https://github.com/artisonii/Big_Basket_Platform-Collab",
        appLink: "https://64e7ae187eb6d30b420f1d46--lucky-cupcake-e72a9a.netlify.app/"
    },
    {
        img: alcazar,
        projectTitle: "Alcazar Travel Agency",
        techStack: ["HTML", "JavaScript", "CSS"],
        description: "At Alcazar Travel Agency, we believe that travel is more than just visiting new places; it's about creating unforgettable experiences, forging lasting memories, and discovering the world's wonders",
        githubLink: "https://github.com/artisonii/devilish-drop-2377",
        appLink: "https://silver-selkie-a62ab9.netlify.app/"
    },
    {
        img: bath,
        projectTitle: "Bed Bath & Beyond",
        techStack: ["HTML", "JavaScript", "CSS"],
        description: "Bed Bath & Beyond is a popular retail chain in the United States that specializes in home goods and furnishings. The Bed Bath & Beyond website serves as an online platform where customers can browse and purchase a wide range of products for their homes.",
        githubLink: "https://github.com/artisonii/pw134-high-fruit-9045",
        appLink: "https://bed-bath-and-beyond.netlify.app/"
    },

]




function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects