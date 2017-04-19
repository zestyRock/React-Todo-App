import React from 'react'
import {partial} from '../../lib/util'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  return (
    <li>
      <input 
        type="checkbox" 
        onChange={handleToggle}
        defaultChecked={props.isComplete}/>
          {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}