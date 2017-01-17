import React from 'react';
import './index.css';
import List from '../list';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            columns : [
                            { id:1, name: "To Do", tasks: [  /*{ id:1, message: " tarea 1" }, { id:2, message: " tarea 2" }, { id:3, message: " tarea 3" }*/ ]  },
                            { id:2, name: "Doing", tasks: [  /*{ id:1, message: " tarea 4" } */ ]},
                            { id:3, name: "Done", tasks: [ ]  }
                      ]
        }        
    }    
    

    render() {
        return (
        <div className="dashboard">
            {
                this.state.columns.map((column) => {
                    return <List key={column.id}
                                 tasks={column.tasks}
                                 name={column.name}
                        />
                })
            }
        </div>        
        )
    }
}

export default Dashboard;
