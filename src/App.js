import React, { Component } from 'react';
import './App.css';
import List from './List'
import GroList from './GroList'
import ReactDOM from 'react-dom';

class App extends Component {
  
  state = {
    groLi: [
      { id: 1, name: "Milk", complete: false, },
      { id: 2, name: "Rice", complete: false, },
      { id: 3, name: "Chicken", complete: false, },
    ]
  };

  
  // state = { groLi: [] }
 

    getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }

  addItem = (name) => {
  const { groLi } = this.state;
  const todo = { name, id: this.getUniqId() , complete: false }
  this.setState({ groLi: [todo, ...groLi] }); 
  }

  handleClick = (id) => {
    this.setState({
      groLi: this.state.groLi.map( todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete, }
        }
        return todo;
      })
    })
  }

  
  
  
  render() {
    const { groLi } = this.state;
    const navComponent = React.createClass({
      render: function() {
        return (
          <nav>
  
          </nav>
        );
      }
    });

  

    return (
      

      <div className="App">
        <li>
          <div class="form">
          <GroList addItem={this.addItem} />

          </div>
          <div class="list">
          <List name="Grocery List" items={groLi} todoClick={this.handleClick} />

          </div>
        </li>


      </div>
    );
  }
}

export default App;




 // renderGroLi = () => {
  //   const { groLi, } = this.state;
  //   return groLi.map( groLi => 
  //     <li key={groLi.id}>{groLi.name}</li>
  //   )
  // };
  