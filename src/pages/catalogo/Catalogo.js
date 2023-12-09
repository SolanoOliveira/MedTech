// Catalogo.js
import React, { useRef } from 'react'; 
import CourseCard from '../../componentes/CourseCard';
import AnimatedCursor from 'react-animated-cursor';
import './Catalogo.css'; // Ensure you have this CSS file in your project
import NavigationBar from '../../componentes/NavigationBar';
import CategoryCard from '../../componentes/CategoryCard';
import ProgressCourseCard from '../../componentes/ProgressCourseCard';
import { useNavigate } from 'react-router-dom';

const Catalogo = () => {
  const courses = [
    { title: 'Pediatric Fundamentals', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Clinical Nutrition', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Advanced Cardiology', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Medical Technology', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Medical Technology', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Medical Technology', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Medical Technology', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Medical Technology', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Medical Technology', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Medical Technology', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
    { title: 'Medical Technology', description: 'Dive into pediatric care', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg' },
  ];

  const scrollContainer = useRef(null);
  const categoriesScrollContainer = useRef(null);

  const myCourses = [
    { title: 'My Course 1', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg', progress: 50 },
    { title: 'My Course 2', imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p2/21486152-inteligente-medico-pequeno-menina-foto.jpg', progress: 75 },
    // ... other my courses ...
  ];

  const categories = [
    { categoryName: 'Category 1', backgroundColor: '#FF5733' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
    { categoryName: 'Category 2', backgroundColor: '#33D9FF' },
   
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
