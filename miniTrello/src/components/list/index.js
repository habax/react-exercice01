import React from 'react';
import './index.css';
import Card from '../card';
import Editor from '../editor';

class List extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            myTasks : this.props.tasks || []
        }        

        this.updateItems = this.updateItems.bind(this);
    }    

    updateItems(newItem){
        newItem.id = this.state.myTasks.length+1;
        var allTasks = this.state.myTasks.concat([newItem]);
        this.setState({myTasks: allTasks});        
    }

    render() {
        return (
        <ul className="my-trello-list">
            <li><h3 className="title">{this.props.name}</h3></li>
            {
                this.state.myTasks.map((cardInfo) => {
                    return <Card key={cardInfo.id} message={cardInfo.message} />
                })
            }
            <li>
                <Editor updateItems={this.updateItems}/>
            </li>            
        </ul>
        )
    }
}

export default List;
