import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        
        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"> </PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange} 
                    handleClear={this.handleClear} 
                    />

                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    />
            </div>
        )
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createdAt${search}`).then(
            (resp) => this.setState({ ...this.state, description, list: resp.data }));
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleAdd() {
        const description = this.state.description;
        Axios.post(URL, { description, done: false }).then(resp => this.refresh())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleClear(){
        this.refresh();
    }

    handleMarkAsDone(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(resp => this.refresh(this.state.description));
    }

    handleMarkAsPending(todo) {
        Axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        .then(resp => this.refresh(this.state.description));
    }

    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`)
        .then(resp => this.refresh(this.state.description));
    }
}