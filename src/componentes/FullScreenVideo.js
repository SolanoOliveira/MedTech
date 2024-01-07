import React from 'react';
import './FullScreenVideo.css'; // Certifique-se de criar este arquivo CSS
import video from '../imagens/tuberculo.mp4'; // Certifique-se de que o caminho para o logo está correto

const FullScreenVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video">
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
};

export default FullScreenVideo;
