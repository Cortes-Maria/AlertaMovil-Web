import React, { Component } from 'react'
import axios from 'axios'

export default class Alertas extends Component {

    state = {
        alertas: [],
        seen: false
    }

    async componentDidMount() {

        const res = await axios.get('https://my-json-server.typicode.com/cortes-maria/Alerts/alerts');
        this.setState({ alertas: res.data });

    }

    

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.alertas.map(alert => (
                            <div className="col-md-4 p-2" key={alert.place}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-center">{alert.disaster}</h5>
                                        <p className="text-center">{alert.place}</p>
                                        <div className="row">
                                            <div className="col-sm">
                                                <p className="text-center">{alert.dateTime}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>

        )
    }
}


