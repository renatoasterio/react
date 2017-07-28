import React from 'react'

export default props =>(
    <div>
        <h2>Membros da familia</h2>
        {props.children} {props.lastName}
    </div>
)