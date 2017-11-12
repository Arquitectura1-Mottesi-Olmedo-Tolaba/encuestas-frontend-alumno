import React from 'react';
import {reduxForm}  from 'redux-form';
import validate from './validate';
import PageDataContainer from './PageDataContainer';

const matematica2 = {
  label : 'Matematica 2',
  coursetime : [
  {
    id : 1,
    value: 'Cursaria en comision 1',
    horario:'Lunes de 18 a 20 hs'
  },
  {
    id : 2,
    value: 'Cursaria en comision 2',
    horario:'Miercoles de 18 a 20 hs'
  },
  {
    id : 3,
    value: 'Todavia no la Cursaria'
  },
  {
    id : 4,
    value: 'Ya la curse'
  }]
}

const so = {
  label : 'Sistemas operativos',
  coursetime: [
  {
    id : 5,
    value: 'Cursaria en comision 1',
    horario:'Lunes de 18 a 20 hs'
  },
  {
    id : 6,
    value: 'Cursaria en comision 2',
    horario:'Miercoles de 18 a 20 hs'
  },
  {
    id : 7,
    value: 'Todavia no la Cursaria'
  },
  {
    id : 8,
    value: 'Ya la curse'
  }]
};

const objetos2 = {
  label : 'Objetos 2',
  coursetime : [
  {
    id : 9,
    value: 'Cursaria en comision 1',
    horario:'Lunes de 18 a 20 hs'
  },
  {
    id : 10,
    value: 'Cursaria en comision 2',
    horario:'Miercoles de 18 a 20 hs'
  },
  {
    id : 11,
    value: 'Todavia no la Cursaria'
  },
  {
    id : 12,
    value: 'Ya la curse'
  }]
};

const pageData = [matematica2,so,objetos2];


const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      
      <PageDataContainer pageData={pageData} />

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Anterior
        </button>
        <button type="submit" className="next">Siguiente</button>
      </div>

    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
