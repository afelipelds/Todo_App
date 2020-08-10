import React, { useContext } from 'react'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../commons/GlobalState'

const getDay = () => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  let newDate = new Date()
  let dayName = days[newDate.getDay()]
  let numberOfMonth = newDate.getDate()
  let monthOfYear = months[newDate.getMonth()]
  return (
    <small>{`${dayName}, ${numberOfMonth} de ${monthOfYear}`}</small>
  )
}

const ListTodo = props => {

  const { todos, removeTodo } = useContext(GlobalContext)
  
  console.log('todos ─>', todos)
  return (<>
    <Row>
      <Col>
        <h3>Todo List</h3>
        <small>{getDay()}</small>
      </Col>
    </Row>
    <Row>
      <h2>
        Todos: {todos.length}
      </h2>
    </Row>
    {todos.map( todo => (
      <Row key={todo.id}>
        <Col>
          <h3>{todo.title}</h3>
        </Col>
        <Col>
          <p>{todo.text}</p>
        </Col>
        <Col>
          <Button type={"primary"}>
            <Link to={`/edit/${todo.id}`}>Editar</Link>
          </Button>
          <Button onClick={() => removeTodo(todo.id)}  type={"primary"} danger>
            Eliminar
          </Button>
        </Col>
      </Row>  
    ))}

    
  </>)
}

export default ListTodo
