import React from 'react';
import "./about.css";
import AbtImg from "../../assets/avatar-2.svg";
import PdfResume from "../../assets/SARAVANAKUMAR's Resume.pdf"

const About = () => {
  return (
    <section className='about container section' id="about">
      <h2 className='section__title'>About Me</h2>

      <div className='about__container grid'>
        <img src={AbtImg} alt="" className='about__img' />

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>I am Saravanakumar Kathiravan, Web developer from Rajapalayam. I have rich experience in web site design adn building and customization, also I am good at React.</p>
            <a href={PdfResume} className='btn'>Download CV</a>            
          </div>

          <div className='about__skills grid'>
            <div className='skills__data'>
              <div className='skills__title'>
                <h3 className='skills_name'>Development</h3>
                <span className='skills__number '>90%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage development'></span>
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__title'>
                <h3 className='skills_name'>UI/UX Design</h3>
                <span className='skills__number '>80%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage uiux'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;