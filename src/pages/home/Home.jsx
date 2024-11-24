import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import AdvantageSection from "../../components/advantageSection/AdvantageSection";
import SocialCardSection from "../../components/socialCardSection/SocialCardSection";
import "../home/style.css";
import Typed from "typed.js";
import "../../styles/colors.css";
import "../../styles/universal.css";


function Home() {
  useEffect(() => {
    // Typed.js animation
    var typed = new Typed(".typed_text", {
      strings: ["за лічені місяці!", "з нами!"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    // Count animation
    countAnimation(100000, "count1");
    countAnimation(150, "count2");

    return () => {
      typed.destroy(); // Clean up animation on unmount
    };
  }, []);

  function countAnimation(targetNumber, elementId) {
    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 250);
    const intervalTime = 20;

    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        clearInterval(interval);
        currentNumber = targetNumber;
      }

      const element = document.getElementById(elementId);
      if (element) {  // Перевірка на наявність елемента
        element.textContent = currentNumber.toLocaleString() + "+";
      } else {
        console.error(`Element with ID ${elementId} not found.`);
        clearInterval(interval); // Зупиняємо анімацію, якщо елемент не знайдено
      }
    }, intervalTime);
  }


  return (
    <main>
      <Navbar />
      <div className="first-section">
        <div className="headerText font-sans">
          <h2 className="section-one-title text-bold">
            Навчить грати на <br />
            <span>
              Гітарі <span className="typed_text"></span>
            </span>
          </h2>
          <h3 className="text-white">
            <b>Розблокуй свій гітарний</b> потенціал: Курсив для будь-якого
            бюджету, Інтерактивне навчання, Досвідчений викладач, Різні рівні
            складності!
          </h3>
          <a href="#" className="text-bold">
            Відкривай знання для себе
          </a>
        </div>
        <div className="headerImage-div">
          <img
            src="images/headerImage.webp"
            alt="A Boy Working on Laptop"
            className="headerImage"
          />
        </div>
      </div>

      <div className="second-section">
        <div className="journey-title text-bold text-center">
          <p className="font-sans">Відгуки учнів</p>
        </div>
        <div className="journey-list">
          <div className="journey-items font-sans text-center">
            <h4>4.7⭐️</h4>
            <p>Рейтинг курсів</p>
          </div>
          <div className="border-right"></div>
          <div className="journey-items font-sans text-center">
            <h4 id="count1">100,000</h4>
            <p>учнів</p>
          </div>
          <div className="border-right"></div>
          <div className="journey-items font-sans text-center">
            <h4 id="count2">5+</h4>
            <p>Країн</p>
          </div>
        </div>
      </div>

      <div className="line-div"></div>

      <div id="courses" className="third-section font-sans">
        <div>
          <h1 className="third-section-title text-center title">
            Що ти б хотів <span>
              <b>вивчити?</b></span>
          </h1>
        </div>
        <div>
          <a href="#">
            <div className="card">
              <div>
                <div>
                  <img
                    className="course-thumbnail"
                    src="images/course_thumbnail.webp"
                    alt="Course Thumbnail"
                  />
                </div>
                <div>
                  <div>
                    <p className="card-level text-bold">
                      Від початківця до профі 🔥🔥🔥
                    </p>
                    <h3 className="course-title">З нуля до висот</h3>
                  </div>
                  <div className="line"></div>
                  <div className="course-price-section text-bold">
                    <p className="final-price">999 гривень</p>
                    <p className="prev-price">2999 гривень</p>
                    <p className="discount-percent">70% знижка</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="line-div"></div>


      <AdvantageSection />

      <div id="instructor" className="about-us font-sans text-center">
        <div className="instructor-title">
          <p className="text-bold title">Твій <span>викладач</span></p>
          <Link to="/about">
            <button className="button-61 text-bold text-center">Дізнатись більше</button>
          </Link>

        </div>
        <div className="line-long"></div>
        <div className="instructor-content">
          <div className="image-div">
            <img src="/images/author.webp" alt="Василь Мись" />
          </div>
          <div className="name-div">
            <p className="name text-bold">Василь Мись</p>
            <p className="designation text-bold">Засновник, гітарист</p>
          </div>
        </div>
        <div className="description-div">
          <p className="description">
            Знайомтеся з <span><i>Василем Мисем</i></span>, талановитим гітаристом та викладачем, який має на меті
            поділитися своїм досвідом та любов'ю до музики з кожним охочим.
          </p>
        </div>
      </div>

      <div className="line-div"></div>

      <SocialCardSection />

      <Footer />
    </main>
  );
}

export default Home;
