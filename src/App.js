import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // definir la categoria y noticias
  const [ categoria, guardarCartegoria ] = useState(''); 
  const [ noticias, guardarNoticias ] = useState([]); 

  useEffect(() => {
    const vacio = '';
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=44e8506694a3469c87570192c669f8db`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles); 
    }
    consultarApi();
  }, [categoria]);
  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario 
          guardarCartegoria={guardarCartegoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
