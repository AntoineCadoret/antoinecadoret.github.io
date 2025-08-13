import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";

import Header from "../components/header";
import ContactMe from "../components/contactme";

import jeuxVideoPic from "../images/jeux-video-starwars.gif";
import airlineManagerPic from "../images/airlineManager.png";
import teamJerseyPic from "../images/team-jersey.png";
import planningKanbanPic from "../images/planning_kanban.png";
import catBreedsPic from "../images/cat-breeds.png";
import penduPic from "../images/bonhomme-pendu.png";
import tracesPic from "../images/traces.png";

const projects: { title: string, picture: string, technologies: string[], description: string }[] = [
    {
        title: "Jeu Vidéo",
        picture: jeuxVideoPic,
        technologies: [
            "TypeScript",
            "Adobe Illustrator",
            "Adobe Animate"
        ],
        description: "Projets scolaires en TypeScript de jeu vidéo basée sur la saga Star Wars. Les illustrations et animations de ce on été réalisée sur les applications de la gamme Adobe, Illustrator et Animate."
    },
    {
        title: "Airline Manager",
        picture: airlineManagerPic,
        technologies: [
            "React.js",
            "Tailwind",
            "Redux",
            "React-Router"
        ],
        description: "Projet personnel visant à améliorer mes compétences avec React.js et Redux. Il s'agit d'un application dans lequel on peut gérer sa flotte aérienne."
    },
    {
        title: "NHL Team Jersey",
        picture: teamJerseyPic,
        technologies: [
            "Vue.js",
            "TypeScript",
            "Tailwind",
            "Node.js"
        ],
        description: "Projet personnel full-stack (Vue.js et Node.js) qui permet de lister les jerseys de tes équipes de la NHL préféré que tu souhaite acquérir et que tu as déjà."
    },
    {
        title: "Planning Kanban",
        picture: planningKanbanPic,
        technologies: [
            "React.js",
            "Redux",
            "JavaScript",
            "Tailwind"
        ],
        description: "Projet personnel qui permet de lister mes tâches en utilisant la méthode kanban."
    },
    {
        title: "Cat Breeds",
        picture: catBreedsPic,
        technologies: [
            "React.js",
            "Redux",
            "Appel API",
            "Tailwind"
        ],
        description: "Projet personnel qui me permet de me familiariser avec les appels d'API dans un site donnant des informations sur les races de chats."
    },
    {
        title: "Bonhomme Pendu",
        picture: penduPic,
        technologies: [
            "React.js"
        ],
        description: "Projet personnel qui me permet de me familiariser avec React.js avecun simple jeu de bonhomme pendu."
    }
    ,
    {
        title: "Traces",
        picture: tracesPic,
        technologies: [
            "PHP",
            "TypeScript"
        ],
        description: "Site transactionnel élaboré en équipe de 3 (scrum, méthodes agiles): ajout au panier, connexion, facturation, fil d'Ariane, traduction d'un site, sécurité web à l'aide d'HTML, CSS, TypeScript et PHP"
    }
];
const MesProjetsPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Header />
            <h2 className="text-center text-3xl mt-40">Mes projets</h2>
            <p className="text-center my-7">Voici quelques projets que j'ai accompli soit dans le cadre de mes études au <span className="font-bold">Cégep de Sainte-Foy</span> ou dans le cadre de projets personnelles.</p>
            <div className="m-8 flex flex-wrap justify-around">
                {projects.map((project, index) => {
                    return (
                        <div className="w-[80vw] md:w-[40vw] bg-gray-200 my-4 p-4 rounded-xl" key={index}>
                            <p className="text-center text-xl font-[Agbalumo] my-4">{project.title}</p>
                            <img className="w-full md:h-[35vh] rounded-md" src={project.picture} alt={project.title} />
                            <div className="flex flex-wrap justify-center">
                                {project.technologies.map((technologie, techIndex) => {
                                    return (
                                        <p className="bg-[#fecd35] p-2 m-4 rounded-xl" key={techIndex}>{technologie}</p>
                                    )
                                })}
                            </div>
                            <p>{project.description}</p>
                        </div>
                    );
                })}
            </div>
            <ContactMe styles="bg-[#fecd35] rounded-lg m-8 p-8" text={<div className="text-center my-4"><p className="my-2">Mes projets vous intéresses?</p> <p className="my-2">Vous voulez en apprendre plus sur mes prochains projets?</p> <p className="my-2">Contactez-moi et je vous répondrerai dans les plus brefs délais!</p></div>} />
        </main>
    )
};

export default MesProjetsPage;

export const Head: HeadFC = () => <title>Mes projets / Antoine Cadoret</title>