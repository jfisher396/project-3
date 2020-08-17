import React, { Component } from "react";
import axios from "axios";

export default class Screens extends Component {
    state = {
        screens: [],
    };
    componentDidMount() {
        axios
            .get("/api/screens")
            .then((response) => this.setState({ screens: response.data }));
    }

    render() {
        const { screens } = this.state;
        return (
            <>
                <div className="container">
                    <h3>Screens</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Model</th>
                                <th scope="col">Quantity Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {screens.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item.model}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}