import React from 'react';
import {reduxForm}  from 'redux-form';
import validate from './validate';
import PageDataContainer from './PageDataContainer';

const matematica1 = {
  label : 'Matematica 1',
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

const intro = {
  label : 'Introduccion a la programación',
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

const objetos1 = {
  label : 'Objetos 1',
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

/*
TODO: Setearle ids a las materias
ya que podrian no distinguirse en un loop ...
*/
const pageData = [
  matematica1, intro, objetos1  
];

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  
  return (
    <form onSubmit={handleSubmit}>

      <PageDataContainer pageData={pageData} />

      <div>
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
})(WizardFormFirstPage);
