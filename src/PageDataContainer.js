import React from 'react';
import RepeatModule from './RepeatModule';

export default class PageDataContainer extends React.Component {   

  getInitialState() {
    return { pageData: [] 
    }
  }

  constructor(props) {
    super(props);
  }

  render() {

    let modules = this.props.pageData.map(function(model) {      
      return(
        <RepeatModule model={model} />
      );
    });   

    return (
      <div>
        {modules}
      </div>
    );
    

  }


}