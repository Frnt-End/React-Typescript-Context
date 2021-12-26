import React from 'react';
import  Author from "./Author";

 
    function TeamDone() {

    return (
        <>
            <h2>Your team is ready!</h2>
            <p>If you would like to change, click on any member profile card in order to remove it & use the form to add a new one instead.</p>
            <p className="done">Happy with your choice? 👉 Printscreen & share!</p>
            <div className="author">
                <Author />
            </div>
        </>
        );
    }

export default TeamDone
