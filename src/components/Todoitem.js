import React, {Component} from 'react';
import Proptype from 'prop-types'

class Todoitem extends Component {
    getStyle = () => {
       return{
           background: '#f4f4f4',
           textDecoration: this.props.todo.completed ?
           'line-through' : 'none',
           padding: '10px'
       }
    }
    render() {
        const {id, title } = this.props.todo;
        return(
            <div style= {this.getStyle()}>
                <p>
                    <input type='checkbox' onChange= {this.props.markComplete.bind(this, id)}/>
                    {title}
                    <button style = {btnStyle} onClick= {this.props.delTodo.bind(this, id)}>x</button>
                    </p>
            </div>
        )
    }
}

Todoitem.Proptype = {
    todo: Proptype.object.isRequired
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    float: 'right'
}
export default Todoitem;