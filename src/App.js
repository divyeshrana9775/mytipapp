import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { hydrate } from 'react-dom';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      total:'',
      service:'',
      partysize:'',
      totalTip: '',
      tip: 0,
      tipperperson: 0,
      amountperperson: 0,
      totalper:0
    };
    this.total = this.total.bind(this);
    this.service = this.service.bind(this);
    this.partysize = this.partysize.bind(this);
    this.gentip = this.gentip.bind(this);
  }
  total(e) { 
    this.setState({
      total: e.target.value
    })
  }
  service(e) { 
    this.setState({
      service:e.target.value
    })
  }
  partysize(e) { 
    this.setState({
      partysize:e.target.value
    })
  }
 
  gentip(e) {
    e.preventDefault();
    let tip = parseFloat(this.state.total * this.state.service / 100).toFixed(2)
    this.setState({
      tip:tip
    })
    let totalper = parseFloat(this.state.total) + parseFloat(tip)
    this.setState({
      totalper:totalper
    })

    let tipperperson = parseFloat(tip / this.state.partysize)
    this.setState({
      tipperperson:tipperperson
    })
 
    let amountperperson = parseFloat(totalper / this.state.partysize)
    this.setState({
      amountperperson:amountperperson
    })
  }

    render(){ 
      return (
        <div>
          <h1>Tip Calculator</h1>
          <form onSubmit={this.gentip}>
            <label>BILL AMOUNT
            <input type='text' placeholder='$' value={this.state.total} onChange={this.total} />
            </label>
            <label>SERVICE
            <input type='text' placeholder='$' value={this.state.service} onChange={this.service} />
            </label>
            <label>PARTY SIZE
            <input type='text' value={this.state.partysize} onChange={this.partysize} />
            </label>
            <input type='submit'/>
          </form>
          <h2>TIP AMOUNT : {this.state.tip}</h2>
          <h2>TIP PER PERSON : {this.state.tipperperson}</h2>
          <h2>AMOUNT PER PERSON : {this.state.amountperperson}</h2>
          <h2>TOTAL AMOUNT : {this.state.totalper}</h2>
        </div>
      )
    }
   
}

export default App;
