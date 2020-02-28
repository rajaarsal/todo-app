export const defaultState = {
    users: [{
        id: 'U1',
        name: 'Dev'
    },
    {
        id: 'U2',
        name: 'Dev'
    },
    {
        id: 'U3',
        name: 'Dev'
    }],
    groups: [{
        name: 'Group 1',
        id: 'G1',
        Owner: 'U1'
    },
    {
        name: 'Group 1',
        id: 'G2',
        Owner: 'U2'
    },
    {
        name: 'Group 1',
        id: 'G3',
        Owner: 'U3'
    }],
    tasks: [{
        name: 'Taks 1',
        id: "T1",
        group: 'G1',
        owner: 'U1',
        isComplete: false
    },
    {
        name: 'Taks 1',
        id: "T2",
        group: 'G2',
        owner: 'U2',
        isComplete: false
    },
    {
        name: 'Taks 1',
        id: "T3",
        group: 'G3',
        owner: 'U3',
        isComplete: false
    }],
    comments: [{
        owner: 'U1',
        id: 'C1',
        task: 'T1',
        content: 'Great work!!'

    },
    {
        owner: 'U2',
        id: 'C2',
        task: 'T2',
        content: 'Great work!!'

    },
    {
        owner: 'U3',
        id: 'C3',
        task: 'T3',
        content: 'Great work!!'

    }]
}