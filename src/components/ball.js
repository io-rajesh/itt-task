import React from 'react';
import PropTypes from 'prop-types';
const Ball = (props) => {
    
    const ballStyle = {
        width:'3em',
        height:'2.25em',
        backgroundColor:'tomato',
        borderRadius:'10%',
        textAlign:'center',
        paddingTop:'0.75em',
        display:'inline-block',
        marginRight:'0.5em',
        marginTop:'1em',
        color:'white',
        fontWeight:'bold',
        fontSize:'1.5em'
    }
    return (
        <div style={ballStyle}>
            {props?.num}
        </div>
    )
}


export default Ball

Ball.propTypes = {
    num: PropTypes.number,
    name: PropTypes.string,
  };
  