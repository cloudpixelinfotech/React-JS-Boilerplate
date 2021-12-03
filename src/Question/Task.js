import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';


const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-botton: 8px;
    background-color: ${props => (props.isDragging ? 'lightgeen' : 'white')};
`

class Task extends React.Component {

    render() {
        return (
                <Droppable draggableId={this.props.task.id}>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef}>
                            {this.state.items.map((item, index) => (
                                <Draggable
                                    key={this.props.index}
                                    draggableId={this.props.task.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                        {this.props.task.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
        )
    }
}

export default Task