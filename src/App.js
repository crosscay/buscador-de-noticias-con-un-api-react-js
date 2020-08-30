import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria y noticias
  const [ pais, guardarPais ] = useState('mx'); 
  const [ categoria, guardarCartegoria ] = useState(''); 
  const [ noticias, guardarNoticias ] = useState([]); 

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=44e8506694a3469c87570192c669f8db`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles); 
    }
    consultarApi();
  }, [categoria, pais]);
  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario 
          guardarCartegoria={guardarCartegoria}
          guardarPais={guardarPais}
        />
      </div>
      <ListadoNoticias 
        noticias={noticias}
      />
    </Fragment>
  );
}

export default App;
