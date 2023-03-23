import React from 'react';

function Footer() {
    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/JessicaIOrtega"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/JessicaIOrtega"
        }
    ]

    return (
        <footer className="flex-row px-1">
            <h4>Let me know if there is something else you need to know about me!</h4>

            {icons.map(icon =>
            (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
            )
            )}
        </footer>
    );
}

export default Footer;
