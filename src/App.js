import React from 'react'

import TotalFigures from './components/TotalFigures'
// import Contacts from './components/contacts'
import Wrapper from "./components/Wrapper";

import * as d3 from 'd3-fetch'

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            data: [],
            districts: []
        }

        this.doAPICall = this.doAPICall.bind(this);
        this.getDistrictData = this.getDistrictData.bind(this);
    }

    doAPICall() {
        // fetch('http://jsonplaceholder.typicode.com/users')
        fetch('https://www.hpb.health.gov.lk/api/get-current-statistical/')
            .then(this.processResponse)
            .then((responseData) => {
                this.setState({data: responseData})
            })
            .catch(console.log)
    }

    doAnotherAPIcall() {
        fetch("https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Daily/covid_lk.csv", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://hpb.health.gov.lk/covid19-dashboard/",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        }).then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json)
        }).catch(console.log)
    }

    processResponse(response) {
        let responseJson = response.json();
        console.log("processing..");
        console.log(responseJson);
        if (responseJson) {
            return responseJson;
        }

        return null;
    };

    getDistrictData() {
        let that = this;
        console.log(that);
        console.log("d31");
        d3.csv("https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Districts/districts_lk.csv")
            .then(function (data) {
                console.log("d3");
                console.log(data);
                that.setState({ districts: data })
                console.log("done");
            });
    }

    componentDidMount() {
        //component was just born
        //will only run once when the component is created for the first time
        this.doAPICall();
        this.getDistrictData();

        console.log("second");
        // this.doAnotherAPIcall();
        // this.interval = setInterval(() => {this.doAPICall()}, 10000);
    }


    componentWillUnmount() {
        //cleanup / teardown remove event listeners etc
        // clearInterval(this.interval);
    }

    render() {

        return (
            <div style={{'text-align' : 'center'}}>
                <h1>COVID-19 : Live Situational Analysis Dashboard of Sri Lanka</h1>
                {/*<Contacts contacts={this.state.contacts} />*/}
                <Wrapper data={this.state.data} districts={this.state.districts}/>
            </div>
        )
    }
}

export default App
