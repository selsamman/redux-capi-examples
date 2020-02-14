import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import { todoAPI } from '../api'

export default ({id}) => {

  const [editing, setEditing] = useState(false);
  const enableEditing = () => setEditing(true);
  const disableEditing = () => setEditing(false);

  const { todo, completeTodo, deleteTodo, updateTodo } = todoAPI({id: id});

  return (
    <li className={classnames({
      completed: todo.completed,
      editing: editing
      })}>
      editing ? (
        <TodoTextInput text={todo.text}
                      editing={this.state.editing}
                      onSave={(text) => {updateTodo(text); disableEditing()}}
        />
       ) : (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={completeTodo} />
           <label onDoubleClick={enableEditing}>
            {todo.text}
           </label>
           <button className="destroy"
                   onClick={deleteTodo} />
        </div>
      )
    </li>
  )
}
