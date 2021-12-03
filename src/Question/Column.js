import React from 'react';
import Task from './Task.js';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`
const Title = styled.h3`
    padding: 8px;
`
const TaskList = styled.div`
    padding: 8px;
`

class Column extends React.Component {

    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
            
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef}>
                                <Draggable
                                    key={this.props.index}
                                    droppableId={this.props.column.id}
                                    index={this.props.index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                        {this.props.tasks.map((task, index)=> <Task key={task.id} task={task} index={index} /> )}
                                        </div>
                                    )}
                                </Draggable>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </Container>

        )
    }
}

export default Column