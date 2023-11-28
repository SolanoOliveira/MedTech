import React from 'react';
import NavigationBar from './../../componentes/NavigationBar';
import FullScreenVideo from './../../componentes/FullScreenVideo';
import './../../App.css'; // Este é o arquivo CSS para estilização adicional
import AuthBox from './../../componentes/AuthBox';
import AnimatedCursor from "react-animated-cursor"
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="full-screen-wrapper">

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
    zIndex: 9999, // Defina um valor alto para z-index para manter o cursor à frente de outros elementos
    // Outros estilos personalizados, se necessário
  }}
/>
      <NavigationBar />
      <AuthBox isLogin={true} /> {/* Para login */}
      {/* <AuthBox isLogin={false} /> Para cadastro */}
      <FullScreenVideo />
    </div>
  );
};

export default LoginPage;
