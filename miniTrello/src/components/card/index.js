import React from 'react';
import './index.css';

class Card extends React.Component {
    render() {
        return (
        <li className="card" >
            <div draggable="true"
                id={this.props.id}
                onDragEnd={this.props.dragEndMthd}
                onDragStart={this.props.dragStartMthd}                     
                >
                <div className="viewer">{this.props.message}</div>                
            </div>
        </li>
        )
    }
}

export default Card;
