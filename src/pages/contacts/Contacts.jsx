import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './style.css';

const Contact = () => {
  return (
    <div className="dark">
      <Navbar /> {/* Навбар буде фіксованим */}

      <div>
        <div className="contact-section">
          <div className="contact-bg">
            <div className="image"></div>
          </div>
          <div className="contact-title">
            <div>
              <h1>В один клік</h1>
              <p>За допомогою цієї форми можете залишити свій відгук або запитати що потрібно.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section" style={{ backgroundColor: 'var(--primary-bg)' }}>
        <div className="contact-form">
          <div className="form-title">
            <p className="send-title">Напишіть нам повідомлення</p>
            <div>
              <svg style={{ color: 'var(--blog)' }} stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>

          <form className="form">
            <div className="first-contact-section">
              <div className="input-container">
                <input type="text" id="name" />
                <label htmlFor="name">Ім'я</label>
              </div>
              <div className="input-container">
                <input type="text" id="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-container">
                <input type="number" id="phone" />
                <label htmlFor="phone">Номер телефону</label>
              </div>
              <div className="input-container">
                <input type="text" id="subject" />
                <label htmlFor="subject">Тема</label>
              </div>
            </div>

            <div className="input-container">
              <input type="text" id="message" />
              <label htmlFor="message">Повідомлення</label>
            </div>

            <div className="submit-btn">
              <a type="submit" href="#">
                Підтвердити
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5-7-7-3.5a0.55 .55 0 0 1 0-1l18-6.5"></path>
                </svg>
              </a>
            </div>
          </form>
        </div>

        <div className="social-contact">
          <p>Контактна інформація</p>

          <div className="mail-content">
            <div className="mail-logo">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
              </svg>
            </div>

            <a href="mailto:guitarlink@gmail.com"> guitarlink@gmail.com </a>
          </div>

          <div className="icons">
            <a target="_blank" href="https://www.youtube.com/">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height=".9em" width=".9em" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="white"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Contact;
