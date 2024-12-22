import React, { Component } from 'react'

 class TestComp extends Component {
    state = {
        product: "laptop",
    }
    componentDidMount() { 
        console.log("this is cdm life cycle");
     }

  render() {
    return (
      <div>
        TestComp {this.props.product}
      </div>
    )
  }
}
export default TestComp;
