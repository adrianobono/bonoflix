import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

function NotFound({ youtubeID }) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.icanvas.com.br/flappy`}
      />
    </VideoContainer>
  );
}

export default NotFound;
