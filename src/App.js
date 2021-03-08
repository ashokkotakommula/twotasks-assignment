import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TaskOne from './pages/taskone/TaskOne'
import TaskTwo from './pages/taskTwo/TaskTwo'
import './App.css';


function App() {
  return (
    <Router>
      <Switch>  
        <Route exact path="/"><TaskOne /></Route>
        <Route path="/task-two"><TaskTwo /></Route>
      </Switch>
    </Router>
  );
}

export default App;
