import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButtom from '../template/iconButtom'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        }
        else if (e.key == 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description, clear } = this.props

        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                        value={description}
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}></input>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButtom style="primary" icon="plus" onClick={() => add(description)} />
                    <IconButtom style="info" icon="search" onClick={search} />
                    <IconButtom style="default" icon="close" onClick={() => clear()} />
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    description: state.todo.description
})
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)