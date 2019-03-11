import React from 'react';
import './App.css';


class GroList extends React.Component {

  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {

    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }
  render() {
    const { name } = this.state;

    return (
      
      <div class="form">
        <form  onSubmit={this.handleSubmit}>
          <input 
            value={name} 
            name="name"
            onChange={this.handleChange}
            required 
            placeholder="Add An Item" 
          />
        </form>
      </div>
    )
  }
}

export default GroList;