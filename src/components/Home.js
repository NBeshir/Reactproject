import React, {Component} from 'react';
import SigninForm from './SigninForm';

class Home extends Component{

constructor(props){
    super(props)
    this.state={
        route:'Home'
    }
}

     onClick =()=>{
if(this.state.route === "Home"){
 this.setState({route:SigninForm})
}
     }
    render(){
        return(
            <div>
            <nav>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#" onClick={this.onClick
                
                
                
                }>Sign In</a></li>
                
            </ul>
        </nav>
           
            </div>
        )
    }

}
export default Home;