import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default prop =>(
    <ul className="sidebar-menu">
        <MenuItem path='#' label='Dashboard' icon='dashboard' /> 
        <MenuItem path='#dashboard2' label='Dashboard sem Redux' icon='dashboard' /> 
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' icon='usd' label='Ciclo de pagamentos' />
        </MenuTree>       
    </ul>
)