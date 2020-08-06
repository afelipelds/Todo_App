import React from 'react'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import {  } from 'antd'

const ListTodo = props => {
  return (<>
    <Row>
      <Col>
        <h3>ToDo List</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3>ToDo item 1</h3>
      </Col>
      <Col>
        <Button type={"primary"}>
          <Link to={"/edit/1"}>Editar</Link>
        </Button>
        <Button type={"primary"} danger>
          Eliminar
        </Button>
      </Col>
    </Row>  
    <Row>
      <Col>
        <h3>ToDo item 2</h3>
      </Col>
      <Col>
        <Button type={"primary"}>
          <Link to={"/edit/2"}>Editar</Link>
        </Button>
        <Button type={"primary"} danger>
          Eliminar
        </Button>
      </Col>
    </Row>  
    <Row>  
      <Col>
        <h3>ToDo item 3</h3>
      </Col>
      <Col>
        <Button type={"primary"}>
          <Link to={"/edit/3"}>Editar</Link>
        </Button>
        <Button type={"primary"} danger>
          Eliminar
        </Button>
      </Col>
    </Row>
  </>)
}

export default ListTodo
