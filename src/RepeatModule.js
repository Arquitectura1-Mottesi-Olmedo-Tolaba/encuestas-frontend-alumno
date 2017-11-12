import React from 'react';
import { Field } from 'redux-form';

export default class RepeatModule extends React.Component {   

  getInitialState() {
    return { 
      model: {} ,
      selected: undefined
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      horario: undefined
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getHorarioFromValue = this.getHorarioFromValue.bind(this);
  }

  getHorarioFromValue(value){
    for (var i = this.props.model.coursetime.length - 1; i >= 0; i--) {
      var item = this.props.model.coursetime[i];
      if ( parseInt(item.id) === parseInt(value)){
        return item.horario;
      }
    }
    return undefined;
  }

  onChange(e) {
    var value = e.target.value;
    var horario = this.getHorarioFromValue(value);
    this.setState({ horario: horario });
  }



  onClick(e) {
    //&& e.clientX !== 0 && e.clientY !== 0
    if (e.type === 'click' ) {
      this.onChange(e);
    } else {
      console.log('prevented "onClick" on keypress');
    }
  }


  render() {
    let listItems = this.props.model.coursetime.map(function(item) {      
      return(
        <option value={item.id} key={item.id}>{item.value}</option>
      );
    });

    let renderSelector = ({ input, meta: { touched, error } }) => (
      <div>
        <select {...input} onClick={this.onClick} >
          <option value="">Seleccione una opción...</option>
          {listItems}
        </select>

        {touched && error && <span>{error}</span>}

      </div>
    );


    return (
      <div>
        <label>{this.props.model.label}</label>
        <Field name={this.props.model.label} component={renderSelector} />
        
        {this.state.horario && (<label>{this.state.horario}</label>)}

      </div>
    );
  }


}