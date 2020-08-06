import React from 'react'
import { Link } from 'react-router-dom'
import {Form, Row, Col, Input, Button } from 'antd'

const AddTodo = () => {

  return (
    <Form layout={"vertical"}>
      <h1>Add ToDo</h1>

      <Form.Item label={"Ingresa título de ToDo"}>
        <Input type={"text"} 
               placeholder={"Ingresa el Título"} 
               allowClear={true} 
               help="Por favor, escribe el título del ToDo"
        />
      </Form.Item>
      <Form.Item label={"Ingresa detalle de ToDo"}>
        <Input type={"text"} 
               placeholder={"Ingresa el Detalle"} 
               allowClear={true} 
               help="Por favor, escribe el detalle del ToDo"
        />
      </Form.Item>
      <Row>
        <Col>
          <Button type={"primary"}>Agregar</Button>
          <Button type={"primary"} className={"ml-2"} danger>
            <Link to={"/"}>Cancelar</Link>
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default AddTodo
