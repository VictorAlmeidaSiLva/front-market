/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = ({ logo }) => {
  return (
    <div id="contact" style={{ backgroundColor: 'black', color: 'white', padding: '20px' }} className="flex flex-col items-center p-5">
      <div className="flex w-full justify-center items-start mb-4">
        <div className="map-container w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.556066148936!2d-49.08037294758158!3d-22.311598592429018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf664cf2854dc3%3A0x6ed0fd7f6f38ca3f!2sBoutique%20de%20Carnes%20Onze%20%26%20Onze!5e0!3m2!1spt-BR!2sbr!4v1729323247805!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="flex w-full justify-center mb-4">
        <a href="/" className="flex justify-center w-1/4"> 
          <img className="w-3/4 md:w-1/2 lg:w-1/3" src={logo} alt="logo" />
        </a>
      </div>
      <div style={{ color: '#ffcc00' }} className="text-lg text-blue-800 mb-4">
        Endereço: Rua Padre Anchieta 16-34, Jardim Bela Vista, Bauru, SP
      </div>
      <div style={{ color: '#ffcc00' }} className="text-lg text-blue-800 mb-4">
        Contato: <br />
        Telefone: (14) 3222-3593 <br />
        WhatsApp: (14) 99732-4507
      </div>
      <div className="flex items-center justify-center space-x-4 mb-4">
        <a href="#">
          <svg className="text-orange-600 hover:text-orange-700" width="25" height="25" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.2106 0.48291H1.75153C1.04307 0.48291 0.470703 1.05528 0.470703 1.76374V31.2229C0.470703 31.9313 1.04307 32.5037 1.75153 32.5037H31.2106C31.9191 32.5037 32.4915 31.9313 32.4915 31.2229V1.76374C32.4915 1.05528 31.9191 0.48291 31.2106 0.48291ZM27.5122 9.82897H24.9546C22.9493 9.82897 22.561 10.7816 22.561 12.1825V15.2685H27.3481L26.7237 20.0996H22.561V32.5037H17.5698V20.1036H13.3951V15.2685H17.5698V11.7062C17.5698 7.57151 20.0954 5.31805 23.7858 5.31805C25.555 5.31805 27.072 5.45013 27.5163 5.51017V9.82897H27.5122Z" fill="currentColor" />
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send?phone=14997324507" target="_blank" rel="noopener noreferrer">
          <svg className="text-orange-600 hover:text-orange-700" width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.66 1 5.1 2.65 6.9l-1.12 3.43 3.42-1.12C9.9 21 11.32 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.5 14.5l-.8.8c-.18.18-.43.29-.7.29-.24 0-.46-.09-.63-.24l-.89-.89c-.15-.15-.23-.36-.23-.58 0-.26.11-.51.29-.69l.8-.8c.18-.18.43-.29.7-.29.24 0 .46.09.63.24l.89.89c.15.15.23.36.23.58 0 .26-.11.51-.29.69zm-1.2-5.8c-.47 0-.92-.04-1.35-.12-.4-.07-.79-.2-1.14-.37-.49-.24-.94-.55-1.35-.9-.43-.35-.77-.78-1.04-1.25-.26-.48-.46-1.02-.57-1.59-.08-.4-.12-.79-.12-1.2 0-.69.18-1.36.49-1.97.31-.61.76-1.15 1.32-1.57.57-.42 1.21-.76 1.91-.99.7-.23 1.43-.35 2.2-.35.66 0 1.26.07 1.83.19.56.11 1.09.32 1.55.61.47.29.86.66 1.2 1.07.35.43.64.92.84 1.43.19.51.29 1.06.29 1.65 0 .69-.18 1.36-.49 1.97-.31.61-.76 1.15-1.32 1.57-.57.42-1.21.76-1.91.99-.7.23-1.43.35-2.2.35z" />
          </svg>
        </a>
      </div>
      <div className="text-lg text-blue-800">
        Copyright 2024
      </div>
    </div>
  );
};

export default Footer;
