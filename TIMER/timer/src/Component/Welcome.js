import React, {Component} from 'react';
import './Welcome.css';
class Welcome extends Component{
 
    state={
          heure:0,
          minute:0,
          seconde:0,
          time:0
      }
  
  calcule=()=>{
     var n=this.state.time;
      
    
     
   
      this.setState({ heure: Math.floor(n/3600)}); 
      this.setState({ minute: Math.floor(n/60) % 60}); 
      this.setState({ seconde: n % 60});    
          
    
  }
  reset =()=>{
    this.setState({ heure:0});
    this.setState({ minute:0});
    this.setState({ seconde:0});
      this.setState({ time:0});

  }
 
    render()
    { 
        return(
            <div>
                     <div className="glob">
                        <h2>Here is my Timer </h2>
                        <input className="inpt" placeholder="Yours time" type="text" onChange={e => this.setState({time: e.target.value})}></input>
                        <p className="parg">You are stay:&nbsp; &nbsp;<span className="nb"> {this.state.heure}&nbsp; </span> Hours,&nbsp; &nbsp; <span className="nb">{this.state.minute}&nbsp;</span>  Minutes ,&nbsp; 
                        <span className="nb">   {this.state.seconde}&nbsp; &nbsp; </span>Second</p>
                        <button className="btn-action" type="button" onClick={this.calcule}>Satrt</button>
                        <button className="btn-action reset"   type="button" onClick={this.reset}>Reset</button>
                       
                        </div>
                        </div>
        );
    }
}
export default Welcome;