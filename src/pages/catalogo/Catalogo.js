// Catalogo.js
import React, { useRef } from 'react'; 
import CourseCard from '../../componentes/CourseCard';
import AnimatedCursor from 'react-animated-cursor';
import './Catalogo.css'; // Ensure you have this CSS file in your project
import NavigationBar from '../../componentes/NavigationBar';
import CategoryCard from '../../componentes/CategoryCard';
import ProgressCourseCard from '../../componentes/ProgressCourseCard';
import { useNavigate } from 'react-router-dom';

import curso1 from '../../imagens/curso1.png';
import curso2 from '../../imagens/curso2.png';
import curso3 from '../../imagens/curso3.png';
import curso4 from '../../imagens/curso4.png';
import curso5 from '../../imagens/curso5.png';
import curso6 from '../../imagens/curso6.png';
import curso7 from '../../imagens/curso7.png';
import curso8 from '../../imagens/curso8.png';
import curso9 from '../../imagens/curso9.png';
import curso10 from '../../imagens/curso10.png';

const Catalogo = () => {
  const courses= [
    { title: 'Epidemiologia, Transmissão e Formas Clínicas da Tuberculose', description: 'Entenda a epidemiologia, transmissão e formas clínicas da tuberculose.', imageUrl: curso1 },
    { title: 'Diagnóstico: PPD, Baciloscopia, Cultura, TRM', description: 'Aprofunde-se nos métodos de diagnóstico da tuberculose.', imageUrl: curso2 },
    { title: 'Terapia, Monitoramento e Cura na ILTB, TB-MDR, RR-TB', description: 'Explore terapias e monitoramento para diferentes tipos de tuberculose.', imageUrl: curso3 },
    { title: 'Aderência, Falha Terapêutica e Efeitos Colaterais', description: 'Aprenda sobre aderência ao tratamento, falhas terapêuticas e efeitos colaterais.', imageUrl: curso4 },
    { title: 'Educação Permanente e Comunitária sobre Tuberculose', description: 'Conheça estratégias para educação permanente e comunitária em tuberculose.', imageUrl: curso5 },
    { title: 'Co-infecções na Tuberculose', description: 'Descubra os desafios e soluções para co-infecções na tuberculose.', imageUrl: curso6 },
    { title: 'Financiamento, Acesso e Políticas Públicas', description: 'Entenda sobre financiamento, acesso e políticas públicas em saúde.', imageUrl: curso7 },
    { title: 'Metodologia da Pesquisa, Metas Globais', description: 'Aprofunde-se em metodologias de pesquisa e metas globais de saúde.', imageUrl: curso8 },
    { title: 'Fluxo e Ambiência da Policlínica Carlos Fontes', description: 'Explore o funcionamento e ambiente da Policlínica Carlos Fontes.', imageUrl: curso9 },
    { title: 'Tecnologias e Estratégias Logísticas nas IRAS com foco na TB', description: 'Descubra tecnologias e estratégias logísticas nas IRAS focadas em tuberculose.', imageUrl: curso10 }
];


  const scrollContainer = useRef(null);
  const categoriesScrollContainer = useRef(null);

  const myCourses = [
    { 
      title: 'Epidemiologia, Transmissão e Formas Clínicas da Tuberculose', 
      imageUrl: curso1, 
      progress: 50 // Exemplo de progresso
    },
    { 
      title: 'Diagnóstico: PPD, Baciloscopia, Cultura, TRM', 
      imageUrl: curso2, 
      progress: 30 // Exemplo de progresso
    }
  ];

  const categories = [
    { categoryName: 'Epidemiologia', backgroundColor: '#FF5733' },
    { categoryName: 'Diagnóstico', backgroundColor: '#33D9FF' },
    { categoryName: 'Terapia e Cura', backgroundColor: '#8E44AD' },
    { categoryName: 'Educação em Saúde', backgroundColor: '#2ECC71' },
    { categoryName: 'Políticas Públicas', backgroundColor: '#F1C40F' },
    { categoryName: 'Metodologia', backgroundColor: '#3498DB' },
    { categoryName: 'Tecnologia Médica', backgroundColor: '#E74C3C' },
    { categoryName: 'Atenção Primária', backgroundColor: '#16A085' },
    { categoryName: 'Saúde Comunitária', backgroundColor: '#D35400' },
    { categoryName: 'Saúde Global', backgroundColor: '#7F8C8D' },
  ];
  

  const scroll = (scrollOffset) => {
    if (scrollContainer.current) {
      const currentScrollPosition = scrollContainer.current.scrollLeft;
      scrollContainer.current.scrollTo({
        left: currentScrollPosition + scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const scrollCategories = (scrollOffset) => {
    if (categoriesScrollContainer.current) {
      const currentScrollPosition = categoriesScrollContainer.current.scrollLeft;
      categoriesScrollContainer.current.scrollTo({
        left: currentScrollPosition + scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const navigate = useNavigate();
  const goToVideoPage = () => {
    navigate('/Video');
  };


  return (
    <div>
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
          zIndex: 9999, // Define um valor alto para z-index para manter o cursor à frente de outros elementos
          // Outros estilos personalizados, se necessário
        }}
      />
      <NavigationBar />
      <div className="container-fluid my-4">
        <h2 className="text-left my-4 heading-cursos">Cursos em alta</h2>
        <div className="catalogo-controls">
          <button className="button-27" onClick={() => scroll(-200)}>&lt;</button>
          <div className="catalogo-container" ref={scrollContainer}>
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} onClick={goToVideoPage} />
            ))}
          </div>
          <button  className="button-27"  onClick={() => scroll(200)}>&gt;</button>
        </div>

      </div>

      <h2 className="text-left my-4 heading-cursos">Categorias</h2>
        <div className="catalogo-controls">
          <button className="button-27 button-category" onClick={() => scrollCategories(-200)}>&lt;</button>
          <div className="catalogo-container" ref={categoriesScrollContainer}>
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
          <button className="button-27 button-category" onClick={() => scrollCategories(200)}>&gt;</button>
        </div>


        <div className="container-fluid my-4"> {/* Change to container-fluid */}
        <h2 className="text-left heading-cursos my-4">Meus Cursos</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {myCourses.map((course, index) => (
            <ProgressCourseCard key={index} {...course} />
          ))}
        </div>
      </div>



    </div>
  );
};

export default Catalogo;
