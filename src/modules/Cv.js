// libraries
import React from 'react';

// images
import profileImage from '../img/Poza_CV.jpg';

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
            <h1>Clara - Maria Ciarnău</h1>
            <div>something</div>
        </div>
      );
    }
  }

export default Cv;