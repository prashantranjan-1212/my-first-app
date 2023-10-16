import { Component } from "react";

class SayHello extends Component {
    constructor() {
        super();

        this.state = {
            name: {
            firstName: "Prashant",
            lastName: "Ranjan"
            },
            company: "EPAM",
        }
    }
    
    render() {
        return (
            <div>
                <p>Hi, My name is {this.state.name.firstName} {this.state.name.lastName} </p>
                <p>I work at {this.state.company}</p>
                <button 
                    onClick={() => {
                        this.setState(
                        (state, props) => {
                            return {
                            name: { firstName: "Rahul", lastName: "Kumar"}
                            }
                        },
                        () => {
                            console.log(this.state)
                        }
                        );
                    }
                    }
                >
                Change Name
                </button>
            </div>
        );
    }
}

export default SayHello;