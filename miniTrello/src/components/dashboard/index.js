import React from 'react';
import './index.css';
import List from '../list';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            columns : [
                            { name: "To Do", tasks: [  /*{ message: " tarea 1" }, { message: " tarea 2" }, { message: " tarea 3" }*/ ]  },
                            { name: "Doing", tasks: [  /*{ message: " tarea 4" } */ ]},
                            { name: "Done", tasks: [ ]  }
                      ]
        }        
    }    
    

    render() {
        return (
        <div className="dashboard">
            {
                this.state.columns.map((column, id) => {
                    return <List key={id}
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
