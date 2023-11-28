import React from 'react';
import './AuthBox.css'; // Certifique-se de criar este arquivo CSS
import { useNavigate } from 'react-router-dom';


const AuthBox = ({ isLogin }) => {

const navigate = useNavigate();
const goToCatalogo = () => {
    navigate('/catalogo')
}

  return (
    <div className="auth-box">
      <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
      {!isLogin && (
        <input type="text" className="form-control" placeholder="Nome completo" />
      )}
      <input type="text" className="form-control" placeholder="Usuário" />
      <input type="password" className="form-control" placeholder="Senha" />
      {isLogin && (
        <div className="auth-box-footer">
          <a href="#" className="auth-link">Esqueci a senha</a>
        </div>
      )}
      <button type="button" className="btn btn-primary" onClick={goToCatalogo}>
        {isLogin ? 'Entrar' : 'Cadastrar' }
      </button>
      <div className="auth-box-footer">
        {isLogin
          ? <p>Não tem uma conta? <a href="#" className="auth-link">Registrar</a></p>
          : <p>Já tem uma conta? <a href="#" className="auth-link">Login</a></p>
        }
      </div>
    </div>
  );
};

export default AuthBox;

