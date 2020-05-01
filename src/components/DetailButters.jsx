import React, { useState, useEffect } from "react";
import ButList from "./ButList";

const DetailsButters = (props) => {
  //console.log(props);
  // console.log(ButList)
  const [butter, setButter] = useState({});

  useEffect(() => {
    //console.log(ButList)
    const search = ButList.filter((b) => b.id === props.productId).pop();
    
    setTimeout(() => setButter(search), 3000)

    console.log(search);
  }, []);

  return (

    <>
        <h2>Detalles</h2>
      
        {Object.keys(butter).length === 0 ?

        <>
      
            <h3>Loading...</h3>
        </> 
        :
        <>
           
            <h3>{butter.name}</h3>
            <img src={butter.image} alt="" />
            <p>{butter.description}</p>

            <a href="/">Volver</a>
        </>
        }
    </>
  );
};

export default DetailsButters;
