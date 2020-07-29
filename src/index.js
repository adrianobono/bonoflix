import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria';
 
// function CadastroVideo() {
//   return (
//     <div>
//       Página de Cadastro de Vídeo.
//     </div>
//   )
// }

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route  component={() => (<div>Página 404</div>)} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
