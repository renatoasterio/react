import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro"> </PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)
