import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import photo from "../images/photo-presentation.jpg";

import Header from "../components/header";
import Footer from "../components/footer";
import ContactMe from "../components/contactme";

const competences: string[] = [
    "Vue.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "PHP",
    "WordPress",
    "SQL",
    "JSON",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind",
    "Git"
];

const AboutPage: React.FC<PageProps> = () => {
    return (
        <main>
            <Header />
            <div className="flex flex-col items-center lg:flex-row lg:justify-around mt-40">
                <img className="m-4 lg:my-0 w-[80%] sm:w-[30%] rounded-xl" src={photo} alt="Antoine Cadoret" />
                <div className="p-8 w-[80%] lg:w-[60%] rounded-xl bg-[#fecd35]">
                    <ul className="list-disc text-xl">
                        <li className="my-4">Né dans la grande région de Québec</li>
                        <li className="my-4">Arrivé en France en 2021</li>
                        <li className="my-4">Je suis un grand fan de hockey 🏒, de cinéma 🍿 et de voyage ✈️</li>
                        <li className="my-4">Je fait du développement web car c'est un domaine qui permet d'aider la vie de gens travaillant dans plusieurs secteurs différents. Tel un  superhéro travaillant dans l'ombre.</li>
                    </ul>
                    <h3 className="text-xl text-center font-bold my-4">Mes compétences</h3>
                    <div className="w-full flex flex-wrap justify-around">
                        {competences.map((competence, index) => {
                            return (<p className="text-center p-4 m-2 sm:m-4 w-30 bg-amber-500 rounded-xl" key={index}>{competence}</p>);
                        })}
                    </div>
                </div>

            </div>

            <div className="bg-gray-100 text-center rounded-xl p-8 m-8">
                <h2 className="text-2xl font-bold m-4">Ma job de rêve!</h2>
                <div className="my-8">
                    <label className="container">Travailler avec Vue.js ou React.js
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="my-8">
                    <label className="container">Je souhaite travailler sur une application qui me permet d'avoir un impact positif sur la vie des gens pour lequel elle est destiné
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="my-8">
                    <label className="container">Un emploi en full-remote serait intéressant pour moi
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="my-8">
                    <label className="container">L'opportunité de travailler depuis l'étranger 1 ou 2 mois par année serait un plus
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>

            </div>
            <ContactMe styles="bg-[#fecd35] rounded-lg m-8 p-8" text={<div className="text-center my-4"><p className="my-2">Vous avez coché une ou plusieurs de ces cases?</p> <p className="my-2">Ou vous pensez avoir une propositions qui pourrait tout de même m'intéressé?</p>  <p className="my-2">Contactez-moi et je vous répondrerai dans les plus brefs délais!</p></div>} />
            <Footer />
        </main>
    );
};
export default AboutPage;

export const Head: HeadFC = () => <title>A Propos / Antoine Cadoret</title>