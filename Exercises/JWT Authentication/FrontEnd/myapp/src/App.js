import react,{Component} from 'react'
import './App.css';
import Login from './components/Login';
import CreatePost from './components/CreatePost';

class App extends Component
{

  constructor(){
    super();

    this.state={
      login:null,
      store:null,
      post:null
    }

  }

  componentDidMount(){
    this.storeCollector();
  }

  storeCollector()
  {

    let store = JSON.parse(localStorage.getItem('login'));

    if(store && store.login)
    {
      this.setState({
        login:true,
        store:store,
      });
    }

  }


  render(){
    return(
      <div className='App'>
        {!this.state.login?
          <Login collectorFunc={this.storeCollector}/>
          :
          <CreatePost store={this.state.store}/>
        }
      </div>
    );

    ;
  }
};

export default App;
