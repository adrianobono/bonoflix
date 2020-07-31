import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria';
import NotFound from './pages/notfound'


ReactDOM.render(
  
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    {/* <Route  component={() => (<div>Página 404</div>)} /> */}
    <Route  component={NotFound} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
