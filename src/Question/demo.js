import React from 'react';
import initialData from './initial-data';
import Column from './Column.js';
import { DragDropContext } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';

class Demo extends React.Component {

    state = initialData; 

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if(!destination){
            return;
        }

        if(
            destination.draggableId===source.droppabledId && destination.index===source.index
        ){
            result;
        }

        const column = this.state.columns[source.droppabledId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            }
        }

        this.setState(newState);
    }
    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                {this.state.columnOrder.map((columnId) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);     

                return <Column key={column.id} column={column} tasks={tasks} />
                })}
            </DragDropContext>
        )
    }
}

export default Demo