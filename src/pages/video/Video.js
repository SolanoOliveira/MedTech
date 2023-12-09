import React, { useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import NavigationBar from '../../componentes/NavigationBar';
import './Video.css';
import videoSrc from '../../imagens/pneumo.mp4';
import videoSrc2 from '../../imagens/video_sangue.mp4';

const Video = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Entendendo a Pneumonia',
      url: videoSrc,
      description: 'Este vídeo fornece uma visão geral detalhada da pneumonia, suas causas e tratamentos.',
      rating: 4.5,
      views: '2.3M views',
      duration: '12:35',
      progress: Math.floor(Math.random() * 100),
    },
    {
      id: 2,
      title: 'Diagnóstico Clínico da Pneumonia',
      url: videoSrc2,
      description: 'Aprenda como os profissionais de saúde diagnosticam a pneumonia, incluindo os procedimentos e tecnologias usados.',
      rating: 4.3,
      views: '1.7M views',
      duration: '15:20',
      progress: Math.floor(Math.random() * 100),
    },
    {
      id: 3,
      title: 'Pneumonia: Tratamento e Cuidados',
      url: videoSrc,
      description: 'Descubra os tratamentos mais eficazes para a pneumonia e os cuidados necessários durante a recuperação.',
      rating: 4.6,
      views: '1.2M views',
      duration: '17:45',
      progress: Math.floor(Math.random() * 100),
    },
    {
      id: 4,
      title: 'Vacinas Contra a Pneumonia',
      url: videoSrc,
      description: 'Conheça as vacinas disponíveis que ajudam a prevenir contra certos tipos de pneumonia.',
      rating: 4.8,
      views: '950K views',
      duration: '14:30',
      progress: Math.floor(Math.random() * 100),
    },
    {
      id: 5,
      title: 'Pneumonia em Crianças e Idosos',
      url: videoSrc2,
      description: 'Um olhar sobre como a pneumonia afeta grupos vulneráveis como crianças e idosos e como garantir sua proteção.',
      rating: 4.7,
      views: '1.5M views',
      duration: '18:55',
      progress: Math.floor(Math.random() * 100),
    },
    {
      id: 6,
      title: 'Pneumonia e COVID-19',
      url: videoSrc,
      description: 'Exploração detalhada da relação entre COVID-19 e pneumonia, incluindo estratégias de prevenção e tratamento.',
      rating: 4.9,
      views: '2.0M views',
      duration: '20:10',
      progress: Math.floor(Math.random() * 100),
    }
    // ...outros vídeos...
  ]);

  const [mainVideo, setMainVideo] = useState(videos[0]);

  const handleVideoChange = (video) => {
    setMainVideo(video);
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < Math.floor(rating) ? 'filled-star' : 'empty-star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="video-page-wrapper">
      <AnimatedCursor
        innerSize={20}
        outerSize={30}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
        outerStyle={{
          zIndex: 9999,
        }}
      />
      <NavigationBar />
      <div className="video-page-layout">
        <div className="main-video-section">
          <video className="main-video" controls>
            <source src={mainVideo.url} type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
          <h3>{mainVideo.title}</h3>
          <div className="video-metadata">
            <div className="video-ratings">
              {renderStars(mainVideo.rating)}
              <span>({mainVideo.views})</span>
            </div>
            <span className="video-duration">Duração: {mainVideo.duration}</span>
          </div>
          <p className="video-description">{mainVideo.description}</p>
        </div>
        <div className="video-list">
          {videos.map((video, index) => (
            <div key={index} className="video-thumbnail" onClick={() => handleVideoChange(video)}>
              <h4>{video.title}</h4>
              <div className="video-progress">
                <progress value={video.progress} max="100"></progress>
                <span>{video.progress}% completo</span>
              </div>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
