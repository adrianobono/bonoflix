import React from 'react';
import PageDefault from '../../components/PageDefault';

import { VideoContainer, ResponsiveIframe } from './styles';

function NotFound({ youtubeID }) {
  return (

     <PageDefault>
        <ResponsiveIframe
          title="Titulo do Iframe"
          src={`https://www.icanvas.com.br/flappy`}
          />
      </PageDefault>
 
  );
}

export default NotFound;
