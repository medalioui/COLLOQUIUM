import React from 'react';

const url = window.location.href;
const Footer = () => {
    return (
        <footer className="footer " style={ url.includes('login') ? {backgroundColor: 'white', paddingLeft: '25%'}: { textAlign: 'center'}}>
            &copy;{new Date().getFullYear()} Tous droits réservés {' '} - Colluqium
           
        </footer>
    );
}
export default Footer;
