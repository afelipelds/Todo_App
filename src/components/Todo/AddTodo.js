import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import {Form, Row, Col, Input, Button } from 'antd'
import { GlobalContext } from '../../commons/GlobalState'

const AddTodo = () => {
  const { addTodo } = useContext(GlobalContext)
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const onSubmit = () => {
    const newTodo = {
      id: uuid(),
      title,
      text
    }
    addTodo(newTodo)
    history.push('/')
  }

  return (
    <Form onFinish={onSubmit} layout={"vertical"}>
      <h1>Add ToDo</h1>

      <Form.Item label={"Ingresa título de ToDo"} name={'title'}>
        <Input type={"text"} 
               placeholder={"Ingresa el Título"} 
               allowClear={true} 
               help="Por favor, escribe el título del ToDo"
               onChange={(ev) => setTitle(ev.target.value)}
               value={title}
        />
      </Form.Item>
      <Form.Item label={"Ingresa detalle de ToDo"} name={'text'}>
        <Input type={"text"} 
               placeholder={"Ingresa el Detalle"} 
               allowClear={true} 
               help="Por favor, escribe el detalle del ToDo"
               onChange={ (ev) => setText(ev.target.value)}
               value={text}
        />
      </Form.Item>
      <Row>
        <Col>
          <Button type={"primary"} htmlType={'submit'}>Agregar</Button>
          <Button type={"primary"} className={"ml-2"} danger>
            <Link to={"/"}>Cancelar</Link>
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default AddTodo
