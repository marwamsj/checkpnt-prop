import React from 'react';
import './Profile.css'
import PropTypes from 'prop-types';

function Profile(props) {
    const nameSt={width: '233px'};
    const mailSt={width: '230px'};
    const professionSt = {width: '200px'};
    const bioSt={width: '250px'};
    return (
        <div>
             {props.children}
             <button className='clickme' onClick={()=> props.handleName(`Hi, Welcome Marwa :)`) }>
              Show Me
              </button>
              <div className="name1">
             <label>Name : </label>
             <input style={nameSt} type="text" readOnly value={props.fullname}/>
              </div>
              <div className="name">
             <label>E-mail : </label>
             <input style={mailSt} type="text" readOnly value='maroua.jmaiel@gmail.com'/>
              </div>
              <div className="name">
             <label>Profession : </label>
             <input style={professionSt} type="text" readOnly value={props.profession}/>
              </div>
              <div className="name" style={{marginBottom:"3%"}}>
             <label>Bio : </label>
             <input style={bioSt} type="text" readOnly value={props.bio}/>
              </div>           
        </div>
    )
}
Profile.defaultProps={
    fullname:'Name',
    profession:'profession',
    bio:'bio',
}
Profile.propTypes = {
    fullname: PropTypes.string,
    handleName:PropTypes.func,
    profession: PropTypes.string,
    bio: PropTypes.string,
  };
export default Profile
