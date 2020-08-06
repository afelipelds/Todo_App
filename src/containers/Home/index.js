import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'antd'
import Header from '../../components/Header'
import { ListTodo } from '../../components/Todo'

const Home = () => {
  return (<>
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col>
        <ListTodo />
      </Col>
    </Row>
    <Button type={"primary"}>
      <Link to={"/add"}>Add new</Link>
    </Button>
  </>)
}

export default Home