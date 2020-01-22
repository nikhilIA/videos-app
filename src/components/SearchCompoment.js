import React from 'react';
import './search-component.css';

class SearchComponent extends  React.Component {
  state = {term: ''} ; 

  onInputChange = (event) => {
    //console.log(event.target.value);
    this.setState({term: event.target.value});
    
    //call back code here
    

  };

  onSubmitForm = (event) => {
    event.preventDefault(); 
    this.props.onFormSubmit(this.state.term);
  } 


  
  render(){
      return(
        <div className="search-component">
         <form onSubmit={this.onSubmitForm}>
        <div className="search-bar">
         <label>Search Videos</label>   
         <input type="text" onChange={this.onInputChange} value={this.state.term} placeholder="Please search Videos"/>
        </div>

         </form>

        </div>
      );
  }
};

export default SearchComponent;