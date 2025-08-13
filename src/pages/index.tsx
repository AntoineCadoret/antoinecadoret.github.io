import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

import Header from "../components/header";
import ContactMe from "../components/contactme";
import photo from "../images/photo-presentation.jpg";


const presentationImageStyle = {
  width: "200px",
  borderRadius: "40px"
};
const sectionHead = {
  fontSize: "2rem",
  textAlign: "center"
};
const sectionGap = {
  rowGap: "25px"
};


const experiences: { company: string, location: string, duree: string, title: string, description: string, tasks: string[], technologies: string[] }[] = [
  {
    company: "Escales",
    location: "Montreuil, France",
    duree: "juin 2025 - Présent",
    title: "CTO & Développeur Full-Stack",
    description: "Blog de voyage",
    tasks: [
      "Développer le site du blog à l'aide de Ghost",
      "Gérer le contenue du site",
      "Gérer le stack technique du site",
      "Gérer l'évolution du site",
      "Gérer le déploiement du site"
    ],
    technologies: [
      "Ghost",
      "JavaScript",
      "Handlebars",
      "Node.js"
    ]
  },
  {
    company: "Collabox",
    location: "Québec, Canada",
    duree: "juillet 2022 - mai 2023",
    title: "Développeur Full-Stack",
    description: "Logiciel de gestion d'entreprise ERP",
    tasks: [
      "Implémenter de nouvelles fonctionnalités en PHP",
      "Faire des requêtes SQL",
      "Réparer les bugs de l’application (SaaS)",
      "Gérer la réactivité avec AJAX"
    ],
    technologies: [
      "PHP",
      "JavaScript",
      "jQuery",
      "Wordpress",
      "Git",
      "Bitbucket"
    ]
  },
  {
    company: "Accès Électronique",
    location: "Québec, Canada",
    duree: "avril 2020 - juillet 2021",
    title: "Intégrateur web",
    description: "Boutique d'électronique",
    tasks: [
      "Intégration de nouveaux produits sur le site d’e-commerce (HTML)",
      "Ajustements visuels du site (CSS) et de scripts (JS)"
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ]
  },
  {
    company: "Prospection",
    location: "Québec, Canada",
    duree: "octobre 2020 - novembre 2020",
    title: "Développeur full-stack",
    description: "entreprise de service web",
    tasks: [
      "Développement et déploiement d'un site web événementiel avec Wordpress"
    ],
    technologies: [
      "PHP",
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
    ]
  },
  {
    company: "Chalets Confort",
    location: "Lévis, Canada",
    duree: "mai 2019 - janvier 2020",
    title: "Développeur full-stack",
    description: "entreprise de service web",
    tasks: [
      "Développement d'un site web d'annonces de location d'hébergement à court terme en Vue.js",
      "Développement du site vitrine de la compagnie",
      "Développement d'une API de traduction en .NET"
    ],
    technologies: [
      "Vue.js",
      "PHP",
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      ".NET"
    ]
  }
]
const tech: string[] = [
  "Vue.js",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "PHP"
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center mt-60 my-4">
        <div className="bg-gray-100 rounded-lg flex flex-col items-center pb-3 max-w-[80vw]">
          <img className="relative -top-20 border-4 border-white" style={presentationImageStyle} src={photo} alt="Antoine Cadoret" />
          <p className="relative -top-10 text-lg px-5 sm:px-48">Développeur Front-End passionné venant du Québec avec des compétences en back-end. Je réside maintenant à Paris, France.</p>
          <p className="font-black">Mes technologies de prédilection:</p>
          <div className="flex flex-wrap justify-center">
            {tech.map((technologie, index) => {
              return <p key={index} className="bg-yellow-300 w-26 p-2 text-center rounded-md m-4">{technologie}</p>
            })}
          </div>
        </div>
      </div>

      <div>
        <h3 className="my-8 font-['Agbalumo']" style={sectionHead}>Expériences Professionnelles</h3>
        <div className="flex flex-wrap justify-around" style={sectionGap}>
          {experiences.map((experience, index) => {
            return (
              <div className="w-full mx-3 sm:w-[45vw] bg-[#fecd35] rounded-lg px-8 py-4">
                <div className="flex justify-between">
                  <p>{experience.location}</p>
                  <p>{experience.duree}</p>
                </div>
                <h4 className="text-center text-2xl my-2">{experience.title}</h4>
                <p className="text-center text-xl">{experience.company}</p>
                <p className="text-center my-4">{experience.description}</p>
                <div className="my-8">
                  {experience.tasks.map((task, index) => {
                    return <p className="my-2" key={index}>-> {task}</p>;
                  })}
                </div>
                <div className="flex flex-wrap justify-around my-4">
                  {experience.technologies.map((technologie, index) => {
                    return <p className="bg-yellow-300 w-26 p-2 text-center rounded-md m-4" key={index}>{technologie}</p>;
                  })}
                </div>

              </div>);
          })}

        </div>
      </div>
      <ContactMe styles="bg-gray-100 rounded-lg m-8 py-8 p-4 sm:p-8" text={<div className="text-center my-4"><p className="my-2">Vous avez une offre à me proposer?</p> <p className="my-2">Contactez-moi et je vous répondrerai dans les plus brefs délais!</p></div>} />

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Antoine Cadoret</title>
