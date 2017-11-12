import React from 'react';
import {reduxForm}  from 'redux-form';
import validate from './validate';
import PageDataContainer from './PageDataContainer';

const persistencia = {
  label : 'Estrategias de persistencia',
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

const redes = {
  label : 'Redes',
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

const pageData = [persistencia,redes];


const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      
      <PageDataContainer pageData={pageData} />

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Anterior
        </button>
        <button type="submit" disabled={pristine || submitting}>Enviar</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
