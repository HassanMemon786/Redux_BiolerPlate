import React, { Component } from 'react'

class Child extends Component {
    //   static getDerivedStateFromProps(props, state){
    //     console.log("getDerivedStateFromProps Children", props);
    //     return null;
    // }

    // componentWillMount(){
    //     console.log("Component Destroy..");
    // }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}

export default Child;
