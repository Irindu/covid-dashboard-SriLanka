import React from 'react'

import {PieChart, Pie, Sector, Cell, Legend, Tooltip} from 'recharts';
import equal from 'fast-deep-equal'

const data = [
    {name: 'Recoveries', value: 321},
    {name: 'Deaths', value: 9},
    {name: 'Active Cases', value: 517}
];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const colorsProperty = {
    Recoveries : '#79ca53',
    Deaths : '#e4494d',
    'Active Cases' : '#0384c5'
}

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        // <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
        <text x={x} y={y} fill="white" textAnchor={'middle'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const formatter=(value, entry, index) => {
    const { color } = entry;

    return <span style={{ color }}>{value}</span>;
};


export default class BreakDownChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.districts, prevProps.districts)) {
            this.setState({data: this.props.districts});
        } else {
            console.log(this.props.districts)
            console.log("no state change in charts")
        }

    }


    render() {
        return (
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={300}
                    cy={200}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={65}
                    outerRadius={110}
                    fill="#8884d8"
                >

                    {
                        data.map((entry, index) => <Cell fill={colorsProperty[entry.name]}/>)
                    }
                </Pie>
                <Tooltip/>
                <Legend verticalAlign="bottom"  height={36} />
            </PieChart>
        );
    }
}

