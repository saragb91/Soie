import React from 'react';
import './Favorites.css'

const Favorites = bodyMilks => {
  
  return ( 
    <>
    {console.log(bodyMilks)}
      <ul>
        <li>{bodyMilks.bodyMilks}</li>
      </ul>
       </>
     );
}
 
export default Favorites;