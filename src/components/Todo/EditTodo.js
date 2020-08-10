import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../commons/GlobalState'
import { Link, useHistory } from 'react-router-dom'
import {Form, Row, Col, Input, Button } from 'antd'

const EditTodo = (props) => {
  const { todos, editTodo } = useContext(GlobalContext)
  const [selectedTodo, setSelectedTodo] = useState({
    id: '',
    title: '',
    text: ''
  })
  const history = useHistory()
  const currentTodoId = props.match.params.id
  const [form] = Form.useForm();
  
   useEffect( () => {
    const todoId = currentTodoId
    const selectedTodo = todos.find(todo => todo.id === todoId)
    setSelectedTodo(selectedTodo)
  }, [currentTodoId, todos])
  

  const onSubmit = (ev) => {
    editTodo(selectedTodo);
    history.push('/')
  }

  const handleChange = (ev) => {
    setSelectedTodo({ ...selectedTodo, [ev.target.id]: ev.target.value})
  }
  return (
    <Form onFinish={onSubmit} layout={"vertical"} initialValues={selectedTodo}>
      <h1>Edit ToDo</h1>

      <Form.Item label={"Editar título de ToDo"} name={'title'} >
        <Input type={"text"} 
               placeholder={selectedTodo.title} 
               allowClear={true} 
               help="Por favor, escribe el nuevo título para el ToDo"
               onChange={ (ev) => handleChange(ev)}
               value={selectedTodo.title}
        />
      </Form.Item>
      <Form.Item label={"Edita detalle de ToDo"} name={'text'} >
        <Input type={"text"} 
               placeholder={selectedTodo.text} 
               allowClear={true} 
               help="Por favor, escribe un nuevo detalle para el ToDo"
               onChange={ ev => handleChange(ev)}
               value={selectedTodo.text}

        />
      </Form.Item>
      <Row>
        <Col>
          <Button type={"primary"} htmlType={"submit"}>Actualizar</Button>
          <Button type={"primary"} className={"ml-2"} danger>
            <Link to={"/"}>Cancelar</Link>
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default EditTodo
