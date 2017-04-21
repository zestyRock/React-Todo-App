import React from 'react'
import {partial} from '../../lib/util'
import {pipe} from '../../lib/util' 

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove = partial(props.handleRemove, props.id)

  return (
    <li>
     <span className='delete-item'><a href="#" onClick={handleRemove}>X</a></span>
      <input 
        type="checkbox" 
        onChange={handleToggle}
        defaultChecked={props.isComplete}
        />
          {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}