import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Dimmer, Loader} from 'semantic-ui-react';
import Home from "./components/Home";
import People from "./components/People";
import Starships from "./components/Starships";

function App() {
  const [people, setPeople] = useState([]);
  const [starships, setStarships] = useState([]);
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

    fetchPeople();
    fetchStarships();
  

  },[]);


  return (
    <div className='App'>
      <Router>
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
        </Switch>)}
        
      </Container>
      </Router>
      
    </div>
 
   )
  }

export default App;
