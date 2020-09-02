import React from 'react'
import {List,ListItem,ListItemText} from '@material-ui/core'
import './todo.css'

function Todo(props) {
    return (
        <div >
            <List>
        <ListItem >
          <ListItemText className="todo" primary={props.text} secondary="some random deadline" />
        </ListItem>
        </List>
        </div>
    )
}

export default Todo
