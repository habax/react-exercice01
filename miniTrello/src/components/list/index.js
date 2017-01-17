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
        this.deleteItem = this.deleteItem.bind(this);
        // drang&drop methods     
        this.dragOver = this.dragOver.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.drop = this.drop.bind(this);
    }    

    updateItems(newItem){
        var allTasks = this.state.myTasks.concat([newItem]);
        this.setState({myTasks: allTasks});        
    }

    deleteItem(itemId){
        if(confirm("Are you sure to delete this item?")){
            this.state.myTasks.splice(itemId,1);
            this.setState({myTasks: this.state.myTasks});
        }
        
    }

    // drag&drop methods  HELP:https://www.html5rocks.com/es/tutorials/dnd/basics/ , http://enome.github.io/javascript/2014/03/24/drag-and-drop-with-react-js.html
    dragOver(e){        
        e.preventDefault();
    }
    dragStart(e) {
        this.dragged = e.currentTarget; // save element do drag

        this.dragged.style.opacity = '0.4';
        var data = this.state.myTasks[this.dragged.id];
        e.dataTransfer.setData("text", JSON.stringify(data));
    }
    dragEnd(e){
        e.currentTarget.style.opacity = '1';
        
        var id = this.dragged.id;
        this.state.myTasks.splice(id,1);
        this.setState({myTasks: this.state.myTasks});
    }
    drop(e){
        e.preventDefault();
        try{
            var tmp  = JSON.parse(e.dataTransfer.getData('text'));
            this.updateItems(tmp);
        }catch(e){ return;}
    }

    render() {
        return (
        <ul className="my-trello-list" onDrop={this.drop} onDragOver={this.dragOver} >
            <li><h3 className="title">{this.props.name}</h3></li>
            {
                this.state.myTasks.map((cardInfo,id) => {
                    return <Card key={id}  id={id}
                            message={cardInfo.message}
                            dragEndMthd={this.dragEnd}
                            dragStartMthd={this.dragStart}
                            deleteItem={this.deleteItem}
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