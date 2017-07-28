import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastName='Asterio'>
            <Member name='Renato'  />
            <Member name='Nathalia'  />
            <Member name='Lorenzo'  />
            <Member name='Teste'  />
        </Family>
    </div>
    , document.getElementById('app'));