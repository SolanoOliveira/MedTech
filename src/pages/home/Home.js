import React, { useState, useEffect } from 'react';
import NavigationBar from '../../componentes/NavigationBar';
import AnimatedCursor from 'react-animated-cursor';
import './Home.css';
import imagem1 from '../../imagens/novomedico1.png';
import imagem2 from '../../imagens/novomedico2.png';
import imagem3 from '../../imagens/novomedico3.png';
import icone from '../../imagens/icon1.png';
import icone2 from '../../imagens/icon2.png';
import icone3 from '../../imagens/icon3.png';
import Footer from '../../componentes/Footer';
import { useNavigate } from 'react-router-dom';


const imagens = [imagem1, imagem2, imagem3];

const Home = () => {
    const [imagemAtual, setImagemAtual] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setImagemAtual((imagemAtual) => (imagemAtual + 1) % imagens.length);
                setFade(true);
            }, 500);
        }, 3500);

        return () => clearInterval(intervalo);
    }, []);

    const navigate = useNavigate();
    const goToLogin = () => {
      navigate('/login');
    };

    return (
        <div className="home-container">
            <AnimatedCursor
                innerSize={20}
                outerSize={30}
                color='77, 80, 87'
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
            <div className="main-content container mt-4">
                <div className="row align-items-center" style={{ minHeight: '70vh' }}>
                    <div className="col-md-6 order-md-1" style={{ paddingRight: '2rem' }}>
                        <h1 className="titulo-principal">Já pensou em se especializar na pneumologia?</h1>
                        <p className="texto-titulo">
                        Interessado em se especializar na pneumologia? Explore o diagnóstico e tratamento de doenças respiratórias com nossos cursos detalhados. Aprenda com especialistas, aproveite recursos interativos e atualize-se com as mais recentes pesquisas. Nossa plataforma é o passo ideal para profissionais de saúde que visam excelência em pneumologia. Venha transformar vidas com habilidades essenciais!
                        </p>
                        <div className="text-center text-md-left">
                            <button onClick={goToLogin} style={{ backgroundColor: '#17c3b2', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                Quero me especializar
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2" style={{ paddingLeft: '2rem' }}>
                        <div className="image-container" style={{ marginBottom: '20px' }}>
                            <img src={imagens[imagemAtual]} alt="Descrição da Imagem" className={`img-fluid imagem-medico ${fade ? 'fade-in' : 'fade-out'}`} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Nova seção com fundo diferente */}
            <div className="nova-secao" style={{ backgroundColor: '#227c9d' }}>
                <div className="main-content container mt-4">
                    <div className="row align-items-center" style={{ minHeight: '70vh' }}>
                        <div className="col-md-12 text-center">
                            <h2 className="secao-titulo">O PNEUMO'dlair@m tem:</h2>
                            <div className="icones-container d-flex justify-content-center">
                                <div className="icone text-center">
                                    <img src={icone} alt="Ícone" className="img-fluid" />
                                    <p className="icone-texto">Tutoria</p>
                                </div>
                                <div className="icone text-center">
                                    <img src={icone2} alt="Ícone" className="img-fluid" />
                                    <p className="icone-texto">Cursos completos</p>
                                </div>
                                <div className="icone text-center">
                                    <img src={icone3} alt="Ícone" className="img-fluid" />
                                    <p className="icone-texto">Qualidade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Rodapé */}
            <Footer style={{ marginTop: '0' }} /> {/* Remova a margem superior do footer */}
        </div>
    );
}

export default Home;