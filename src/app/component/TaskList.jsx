import React from 'react';
import {connect} from 'react-redux';

export const TasksList = ({tasks, name}) => {
    console.log(tasks);
    return (<div>
        <h1>{name}</h1>
        {tasks && tasks.map(task => {
            return (<h4>{task.name}</h4>)
        })}
    </div>)
};


function mapStateToProps(state, ownProps) {
    let groupId = ownProps.id
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task =>  task.group === groupId)
    }
}

export const ConnectedTaskList = connect(mapStateToProps)(TasksList);