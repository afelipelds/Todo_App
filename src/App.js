import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home  from './components/Home'
import { AddTodo, DeleteTodo, EditTodo } from './components/Todo'
import './assets/scss/index.scss'

function App() {
  return (<>
    <Router>
      <h2>Nav</h2>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/add"} component={AddTodo} />
        <Route path={"/delete"} component={DeleteTodo} />
        <Route path={"/edit/:id"} component={EditTodo} />
        
      </Switch>
    </Router>
  </>);
}

export default App;
