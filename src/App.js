import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//COMPONENTS
import Butters from "./components/Butter/Butters";
import DetailsButters from "./components/ButterDetails/DetailButters";
import Index from "./components/Index/Index";
import ModalButter from './components/Modal/Modal'
import Navigation from './components/Navbar/Navbar'
import Map from './components/Map/Map'

function App() {

  const [modalVisibility, setModalVisibility] = useState(false)
  
  const openModal = () => setModalVisibility(true)
  const closeModal = () => setModalVisibility(false)
  
  let bodyMilksInitial= JSON.parse(localStorage.getItem('bodyMilks'))
  if(!bodyMilksInitial){
    bodyMilksInitial=[]
  }
  const [bodyMilks, setBodyMilk] = useState(bodyMilksInitial)

  useEffect(()=>{
    if(bodyMilksInitial){
      localStorage.setItem('bodyMilks', JSON.stringify(bodyMilks))
    }else{
      localStorage.setItem('bodyMilks', JSON.stringify([]))
    }
  },[bodyMilks, bodyMilksInitial])
  
  const saveBodyMilk = bodyMilk=> {
    setBodyMilk([
      ...bodyMilks,
      bodyMilk
    ])
  }    

  const deleteButter= (id)=>{
    const clearButter = bodyMilks.filter(butter=> butter.id !== id)
    setBodyMilk(clearButter)
  }

  return (
    <>
    <Navigation openModal={openModal}/>
    <ModalButter bodyMilk={bodyMilks} modalVisibility={modalVisibility} closeModal={closeModal} deleteButter={deleteButter}/>
      <Router>
        <Switch>
          <>
            <Route exact path="/" component={Index} />
            <Route path="/butters" component={Butters} />
            <Route
              exact
              path="/details/:id"
              component={(props) => <DetailsButters saveBodyMilk={saveBodyMilk} bodyMilks={bodyMilks} {...props} />}
            />
            <Route path= "/address" component={Map} />
          </>
        </Switch>
      </Router>
    </>
  );
}


export default App;
