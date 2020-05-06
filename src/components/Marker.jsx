import React from 'react'
import './Marker.css'
import PropTypes from "prop-types";

const Marker = ({ color, name}) => {
    return ( 
        <div>
        <div className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
      />
      <div className="pulse" />
      </div>
    );
}

Marker.propTypes={
  message:PropTypes.string.isRequired
}

export default Marker;