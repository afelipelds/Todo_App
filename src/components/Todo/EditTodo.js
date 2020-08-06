import React from 'react'
import { Link } from 'react-router-dom'
import {Form, Row, Col, Input, Button } from 'antd'

const EditTodo = () => {

  return (
    <Form layout={"vertical"}>
      <h1>Edit ToDo</h1>

      <Form.Item label={"Editar título de ToDo"}>
        <Input type={"text"} 
               placeholder={"Nuevo Título"} 
               allowClear={true} 
               help="Por favor, escribe el nuevo título para el ToDo"
        />
      </Form.Item>
      <Form.Item label={"Edita detalle de ToDo"}>
        <Input type={"text"} 
               placeholder={"Nuevo Detalle"} 
               allowClear={true} 
               help="Por favor, escribe un nuevo detalle para el ToDo"
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

export default EditTodo
