import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

import Axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount() {
        Axios.get(`${BASE_URL}/billingCycles/summary`).then(res => {
            this.setState(...this.state, res.data)
            //this.setState(...this.state,  {credit: 150, debt: 30} )
        })
    }

    render() {
        const { credit, debt } = this.state

        return (
            <div>
                <ContentHeader title="Dashboard - Sem Redux" small="Versão 2.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit + debt}`} text="Valor consolidado    " />
                    </Row>
                </Content>
            </div>
        )
    }
}