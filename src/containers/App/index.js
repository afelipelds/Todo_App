import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Row, Col } from 'antd'
import  Home  from '../../containers/Home'
import { AddTodo, DeleteTodo, EditTodo, ListTodo } from '../../components/Todo'
import { GlobalProvider } from '../../commons/GlobalState'
import '../../assets/scss/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (<>
    <GlobalProvider>
      <Router>
        <Row className="p-4" justify={"center"}>
          <Col className="container" >
            <Row justify={"center"} >
              <Col >
                <h2>ToDo App Test</h2>
              </Col>
            </Row>
            <Row className={"p-4"} justify={"center"}>
              <Col>
                <Switch>
                  <Route exact path={"/"} component={Home} />
                  <Route path={"/add"} component={AddTodo} />
                  <Route path={"/delete"} component={DeleteTodo} />
                  <Route path={"/edit/:id"} component={EditTodo} />
                  <Route path={"/list"} component={ListTodo} />
                </Switch>
              </Col>
            </Row>
          
          </Col>
        </Row>
      </Router>
    </GlobalProvider>
  </>);
}

export default App;
