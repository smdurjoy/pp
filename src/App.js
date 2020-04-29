import React, {useState} from 'react';
import ToggleMenu from './components/ToggleMenu/ToggleMenu';
import { Button } from 'react-bootstrap'
import {BrowserRouter} from "react-router-dom";
import AppRouter from './router/AppRouter';
import './asset/css/custom.css'
import './asset/css/bootstrap.min.css'
import './asset/css/responsive.css'


function App() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  }

  return (
    <BrowserRouter>
      <ToggleMenu toggled={isToggled}/>
      <Button onClick={toggleHandler} className="button"><i class="fas fa-stream"></i></Button>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
