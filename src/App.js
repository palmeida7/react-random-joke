import React from 'react';
import './App.css';
import Loading from './Loading';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    console.log('Constructed')
    this.state = {
      loading:true,
      joke:null
    }
  }

  async componentDidMount(){
    console.log('mount')
    await fetch('https://official-joke-api.appspot.com/random_joke')
    .then(data=>data.json())
    .then(data=>{
      //console.log(data);
      this.setState({loading:false, joke:data})
    })
    // window.setTimeout(()=>{
    //   console.log(this)
    //   this.setState({loading:false})
    // }, 5000)

  }

  render(){
    console.log('rendered')

    //if(this.state.loading) return <div><Loading /></div>

    return (
    
    <React.Fragment>
      
        <div>
          <span>Random Joke of the Day</span>
          {this.state.loading && <Loading />}
          {this.state.joke && 
          <div>{this.state.joke.setup}</div>}
             {this.state.joke && 
          <div>{this.state.joke.punchline}</div>}
        </div>
     
   
    </React.Fragment>
  )}
  }



export default App;
