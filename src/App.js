import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Container, Dimmer, Loader} from 'semantic-ui-react';
import Home from "./components/Home";
import People from "./components/People";
import Starships from "./components/Starships";
import Details from "./components/Details";
import { isAuthenticated } from "./services/auth";
import SignIn from "./pages/signin/index";
import SignUp from "./pages/signup/index";
import GlobalStyle from './styles/global';

function App() {
  const [people, setPeople] = useState([]);
  const [starships, setStarships] = useState([]);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchStarships(){
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }

    async function fetchDetails(){
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setDetails(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchStarships();
    fetchDetails();
  

  },[]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  
  const BrowserRouter = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Login</h1>} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/app" component={() => <h1>App</h1>} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );


  return (
    <div className='App'>
      <Router>
      <GlobalStyle />
      <Navbar />
      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (<Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/people'>
            <People data={people}/>
          </Route>
          <Route exact path='/starships'>
            <Starships data={starships}/>
          </Route>
          <Route exact path='/details'>
            <Details data={details}/>
          </Route>
          
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
            
         
        </Switch>)}
        
      </Container>
      </Router>
      
    </div>
 
   )
  }

export default App;
