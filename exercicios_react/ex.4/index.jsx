import React from 'react'
import ReactDOM from 'react-dom'
import {Primeiro, Segundo} from './component'

ReactDOM.render(
    <div>
        <Primeiro value='t' />
        <Segundo value='renato' />
    </div>
    , document.getElementById('app'));