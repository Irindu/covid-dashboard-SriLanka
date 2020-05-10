import React from 'react'

import MyCard from './Card'

import SimpleBarChart from "./Recharts";

const style = {
    "margin" : "10px",
    "padding" : "7px",
    "width" : "375px"
}

const styleHeader = {
    "padding-bottom" : "3px",
    "padding" : "1px",
    "margin" : "1px",
    "font-family": "Georgia, Verdana",
    "text-align": "center "

}

function TotalFigures(props) {
    return (
        <div className='border rounded-lg' style={style}>
            <h2 style={styleHeader}>Total Figures (SL)</h2>
            <div>
                <ul className="list-unstyled">
                    <MyCard
                        title="Total Confirmed Cases"
                        count={props.total}
                        image={require('../images/image1.gif')}
                        color={"#6b85de"}
                    />
                    <MyCard
                        title="Deaths"
                        count={props.deaths}
                        image={require('../images/image2.gif')}
                        color={"#ff8484"}
                    />
                    <MyCard
                        title="Recovered & Discharged"
                        count={props.recovered}
                        image={require('../images/image3.gif')}
                        color={"#79ca53"}
                    />
                    <MyCard
                        title="Suspected & Hospitalized"
                        count={props.hospitalized}
                        image={require('../images/image4.gif')}
                        color={"#ff8484"}
                    />
                </ul>
            </div>
            <div style={{"text-align": "center "}} className={"small"}>{"Last updated at: " + props.lastUpdatedOn}</div>
        </div>
    )
}

export default TotalFigures
