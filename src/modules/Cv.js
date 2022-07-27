// libraries
import React from 'react';

// images
import profileImage from '../img/Poza_CV.jpg';
import { FaBirthdayCake, FaCity, FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import { AiFillMail } from "react-icons/ai";

//data
import data from "../data/personal_data.json";

const SideMenu = () => {
  return (
    <div className='side-menu'>
      <div className='profile-photo'>
        <img src={profileImage} alt={"profile-image"} className="profile_image"/>
      </div>
      
      <div className='contact-info'>
        <h3 className='section-title'> Date de contact </h3>
        
        <div> <FaBirthdayCake className='icon' /> { data.age } de ani ({ data.birthday }), { data.gender } </div>
        <div> <FaCity className='icon' /> { data.city } </div>
        <div> <FaPhoneAlt className='icon' /> { data.phoneNumber } </div>
        <div> <AiFillMail className='icon' /> { data.email } </div>
      </div>
      
    </div>
  );
};

const WorkExperience = ({ workExp }) => {
  return (
    <div className='main-module'>
      <h4> { workExp.companyName} </h4>
      <h4> {workExp.timePeriod.start} - {workExp.timePeriod.end} </h4>
      <div> <b>Tip:</b> {workExp.type} </div>
      <div> <b>Oraș:</b> {workExp.city} </div>
      <div> <b>Domeniu:</b> {workExp.domain} </div>
      <div>
        <b>Responsabilități:</b>
        <ul>
          {workExp.responsabilities.map( resp => <li> {resp} </li>)}
        </ul>
      </div>
    </div>
  );
};

const Studies = ({ study }) => {
  return(
    <div className='main-module'>
      <h4> { study.name } </h4>
      <h4> { study.timePeriod.start } - { study.timePeriod.end } </h4>
      <div> <b>Oraș:</b> {study.city} </div>
      <div> <b>Tip:</b> {study.degree} </div>
      <div> <b>Specializare:</b> {study.specialization} </div>
      <div>
        <b>Proiecte:</b>
        <ul>
          {study.projects.map( pj => <li> {pj} </li>)}
        </ul>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className='main-page'>
      <h1 className='name-title'> { data.firstName } { data.lastName } </h1>

      <div>
        <h3 className='section-title'> Experiență </h3>
        { data.workExperience.map( exp => <WorkExperience workExp={exp} />) }
      </div>
      <div>
        <h3 className='section-title'> Studii </h3>
        { data.studies.map( st => <Studies study={st} />) }
      </div>
    </div>
  );
};

class Cv extends React.Component {
    render() {
      return (
        <div className="cv-body">
            <SideMenu></SideMenu>
            <MainPage></MainPage>
        </div>
      );
    }
  }

export default Cv;