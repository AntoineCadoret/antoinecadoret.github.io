import * as React from "react";

const ContactMe = (props): JSX.Element => {
    return (
        <div className={props.styles}>
            <h2 className="text-center text-2xl font-bold m-2">Contactez-moi</h2>
            {props.text}
            <div className="text-center">
                <p className="text-xl">Écrivez moi au <span className="text-xl sm:text-2xl font-bold">antoinecadoret97@gmail.com</span></p>
                <p className="text-xl mt-4 mb-8">ou</p>
                <a className="bg-amber-500 p-4 rounded-xl" href="https://calendar.app.google/2j3Uuie24i3UExzY8">rencontrez-moi en visioconférence</a>
            </div>
        </div>
    );
};

export default ContactMe;

