import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import '../about/style.css';


const About = () => {
    return (
        <div className="dark">
            <Navbar />

            <div id="instructor" className="about-us font-sans text-center">
                <div className="instructor-title">
                    <p className="text-bold title">Зустрічайте свого <span>Викладача</span></p>
                </div>
                <div className="line-long"></div>
                <div className="instructor-content">
                    <div className="image-div">
                        <img src="../../images/author.webp" alt="Василь Мись" />
                    </div>
                    <div className="name-div">
                        <p className="name text-bold">Василь Мись</p>
                        <p className="designation text-bold">Засновник GuitarLink</p>
                    </div>
                </div>
                <div className="description-div">
                    <p className="description">
                        Знайомтеся з <span><i>Василем Мисем</i></span>, талановитим гітаристом та викладачем, який має на меті поділитися своїм досвідом та любов'ю до музики з кожним охочим.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;
