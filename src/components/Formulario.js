import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import useSelectPais from '../hooks/useSelectPais';
import PropTypes from 'prop-types';

const Formulario = ({guardarCartegoria, guardarPais}) => {


    const OPCIONES_PAISES = [
        { value: 'ar', label: 'Argentina' },
        { value: 'co', label: 'Colombia' },
        { value: 'cl', label: 'Chile' },
        { value: 'ec', label: 'Ecuador' },
        { value: 'pe', label: 'Peru' },
        { value: 'br', label: 'Brasil' },
        { value: 'us', label: 'Estados Unidos' },
        { value: 've', label: 'Venezuela' }
    ]

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tegnologia' }
    ];

    // utilizar custom hook
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);
    const [ pais, SelectPaises ] = useSelectPais('co', OPCIONES_PAISES);

    // submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();
        guardarPais(pais);
        guardarCartegoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}> Encuentra Noticias por Categoría</h2>
                    <div className="input-field col s12">
                        <SelectPaises />
                        <SelectNoticias />
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCartegoria: PropTypes.func.isRequired,
    guardarPais: PropTypes.func.isRequired
}
 
export default Formulario;