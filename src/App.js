import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Butters from './components/Butters'
import {useRoutes} from 'hookrouter'
import DetailsButters from './components/DetailButters'
import Index from './components/Index'

const routes={
  "/butters": () => <Butters />,
  "/details/:id" : ({id}) => <DetailsButters productId={parseInt(id)}/>,
  "/" : () => <Index />,
}


function App() {

  const routeResult= useRoutes(routes)
  return (
<Fragment>

{routeResult}

</Fragment>
  );
}

export default App;
