import React from 'react'
import equal from 'fast-deep-equal'
import Media from "react-bootstrap/Media";
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
    "margin" : "3px",
    "padding" : "3px",
    "width" : "350px",
    // "display": "inline",
    "display": "inline-block",
    "float": "center"
}

class Card extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: this.props.title,
            count: this.props.count,
            image: this.props.image,
            color: this.props.color
        }

    }

    // style={Object.assign({}, styleOuter, divStyle2, divStyle)}

    componentDidUpdate(prevProps) {
        if (!equal(this.props.count, prevProps.count)) {
            this.setState({
                count: this.props.count
            });
        } else {
            console.log("no state change")
        }
    }


    render() {
        const styleNumber = {
            "color" : this.state.color
        }
        return (
            <div className='border rounded-lg' style={style}>
                <Media as="li">
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={this.state.image}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>{this.state.title}</h5>
                        <h3 style={styleNumber}>{this.state.count}</h3>
                    </Media.Body>
                </Media>
            </div>
        )
    }

}

export default Card
