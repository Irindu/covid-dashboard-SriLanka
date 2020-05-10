import React from 'react'

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from  'recharts';

const data = [
    {name: 'Banda', uv: 4000},
    {name: 'Page B', uv: 3000},
    {name: 'Page C', uv: 2000},
    {name: 'Page D', uv: 2780},
    {name: 'Page E', uv: 1890},
    {name: 'Page F', uv: 2390},
    {name: 'Page G', uv: 3490},
];

export default class SimpleBarChart extends React.Component{

    constructor(props){
        super(props);
    }

    render () {
        return (
            <BarChart width={600} height={300} data={data}
                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        );
    }
}
