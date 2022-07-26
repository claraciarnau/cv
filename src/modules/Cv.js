// libraries
import React from 'react';

// images
import profileImage from '../img/Poza_CV.jpg';

//data
import data from "../data/personal_data.json";

// const Cv = (ref) => {

//     return (
//         <div className="cv_body">
//             <img src={profileImage} alt={"profile-image"} className="profile_image"/>
//             <h1>Clara - Maria Ciarnău</h1>
//             <div>something</div>
//         </div>
//     );
// };

class Cv extends React.Component {
    render() {
      return (
        <div className="cv_body">
            <img src={profileImage} alt={"profile-image"} className="profile_image"/>
            <h1>{data.firstName} {data.lastName}</h1>
            <div>{data.age} ani, {data.city}</div>
        </div>
      );
    }
  }

export default Cv;