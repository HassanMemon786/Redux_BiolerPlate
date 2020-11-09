import React from 'react';
import Child from "./components/Child";
import { connect } from "react-redux";
import {set_data} from "./store/action";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      // data: []
    }
  }

  // static getDerivedStateFromProps(props, state){
  //  console.log("getDerivedStateFromProps", state);
  //  return null;
  // }

  // componentDidMount(){
  //   console.log("componentDidMount");
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       data: data
  //     })
  //   })
  //   .catch(err=>console.log(err));
  // }


  // shouldComponentUpdate(){
  //  if(this.state.count < 5){
  //    return true;
  //  }
  //  else{
  //    return false;
  //  }
  // }

  // getSnapshotBeforeUpdate(preProps, preState){
  //   console.log("getSnapshotBeforeUpdate==>", preState);
  //   return 10;
  // }

  // componentDidUpdate(preProps, preState, snapShot){
  //   console.log(snapShot);
  // }
  render(){
    console.log("Redux==>", this.props)
  return (
    <div>
        <h1>LifeCycle Method</h1>
        {/* {this.state.data.map((v,i)=> {
          return <h4>{v.title}</h4>
        })} */}
        {/* <h2>{this.state.count}</h2> */}
        {this.state.count < 5 &&   <Child count={this.state.count}/>}
        <button onClick={()=>this.setState({count:this.state.count + 1})}>Increment</button>
        <button onClick={()=>this.setState({count:this.state.count - 1})}>Decrement</button>
        <br />
        <button onClick={()=> this.props.set_data("Data gaya")}>Set Data</button>
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
    username: state.auth.username,
    email: state.auth.email,
    app_name: state.app.app_name
  })

const mapDispatchToProps = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
