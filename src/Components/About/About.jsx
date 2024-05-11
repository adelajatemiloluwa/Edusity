import React from 'react'
import './About.css'
import thee from '../../assets/thee.jpeg'


const About = () => {
  return (
    <div className='about' id="about">
      <div className="about-left">
        <img src={thee} alt="" className='thee' />
       
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's leader Today</h2>
        <p>Embark on a transformative educational journey with our 
        university's comprehensive education programs. Our cutting-edge 
        curriculum is desingned to empower students with the knowledge,
        skills, and experience needed to excel in the dynamic fields of
        education. </p>
        <p>With a focus on innovation, hands-on learning, and personalized
        mentorship, our programs prepare aspiring educators to make a 
        meaningful impact in classroom, schools, and communities. </p>
        <p>Whether you aspire to become a teacher, administrator,
        counsellor, or educational leader, our diverse range of programs
        offers the perfect pathway to achieve your goals and unlock your 
        full potential in shaning the future of education. </p>
      </div>
    </div>
  )
}

export default About
