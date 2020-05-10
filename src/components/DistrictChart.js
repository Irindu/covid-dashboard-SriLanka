import React from 'react'

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import equal from 'fast-deep-equal'

const style = {
    "margin" : "10px",
    "margin-left" : "100px",
    "padding" : "7px",
    "width" : "375px"
}

export default class DistrictChart extends React.Component {

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
            <div style={style}>
                <div style={{'text-align' : 'center'}}>
                    <h5>District Distribution (Top 5)</h5>
                </div>
                <BarChart width={600} height={300} data={this.state.data} layout={'vertical'}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    {/*<YAxis type={'category'} dataKey="district"/>*/}
                    <YAxis type={'category'} dataKey="district"/>
                    <XAxis type={'number'} domain={[0, 160]}/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="cases" fill="#F06EAA" barSize={36}/>
                </BarChart>
            </div>
        );
    }
}
