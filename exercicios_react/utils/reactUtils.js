import React from 'react'

function childrenWithProps(children, props) {
    return React.Children.map(children, x => React.cloneElement(x, {...props}));
}

export {childrenWithProps}