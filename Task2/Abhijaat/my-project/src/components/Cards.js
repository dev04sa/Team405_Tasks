import React, { Component } from 'react'

export class Cards extends Component {



  render() {
    let {url,key} = this.props;
    return (
    <>
            <div className="card" id={key}>
            <img src= {url} className="card-img-top" alt="..."/>
    
            </div>




    </>
    )
  }
}

export default Cards
