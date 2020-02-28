import React from 'react';
import {connect} from 'react-redux';
import {ConnectedTaskList} from './TaskList';

export const Dashboard = ({groups}) => (
    <div>
        <h2>Dashboard</h2>
        {groups && groups.map(group => {
            return (
                <ConnectedTaskList id={group.id} name={group.name}/>
            )
        })}
    </div>
);

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);