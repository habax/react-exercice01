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
        // drang&drop methods     
        this.dragOver = this.dragOver.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
    }    

    updateItems(newItem){
        newItem.id = this.state.myTasks.length+1;
        var allTasks = this.state.myTasks.concat([newItem]);
        this.setState({myTasks: allTasks});        
    }

    // drang&drop methods
    dragOver(e){        
        //e.preventDefault();
        //this.over = e.target;

    }
    dragStart(e) {
        this.dragged = e.currentTarget; // element do drag
    }
    dragEnd(e){
        //console.log(this.dragged, this.over );        
        this.dragged = undefined;
        //this.over = undefined;
    }
    

    render() {
        return (
        <ul className="my-trello-list" onDragOver={this.dragOver}>
            <li><h3 className="title">{this.props.name}</h3></li>
            {
                this.state.myTasks.map((cardInfo) => {
                    return <Card key={cardInfo.id}  data-id={cardInfo.id}
                            message={cardInfo.message}
                            dragEndMthd={this.dragEnd}
                            dragStartMthd={this.dragStart}       
                             />
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
