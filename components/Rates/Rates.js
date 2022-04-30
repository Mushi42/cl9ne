import React, { Component } from 'react';
import { getCurrenyData } from '../../pages/api/currency'

class Rates extends Component {
    state = {
        tablHead: [],
        tableData: [],
        updateDate: null,
    }

    componentDidMount() {
        getCurrenyData().then(resp => {
            let head = [];
            let body = [];
            resp && resp.length > 1 && resp.forEach(rate => {
                head.push(rate.name);
                body.push(rate.convertRate)
            });

            this.setState({ tablHead: head, tableData: body })
        })
    }
    render() {
        return (
            <section className="currency-rates-area pt-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Currency Rates</h2>
                        <div className="bar"></div>
                        <p>Latest Currency Rates Based on <strong>NGR</strong></p>
                    </div>

                    <div className="table-responsive currency-rates-table">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    {
                                        this.state.tablHead.length ? this.state.tablHead.map((head, i) => (
                                            <th key={i} scope="col">{head}</th>
                                        )) : null
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {
                                        this.state.tableData.length ? this.state.tableData.map((data, i) => (
                                            <td key={i}>{data.toFixed(3)}</td>
                                        )) : null
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="row currency-rates-info">
                    </div>
                </div>
            </section>
        );
    }
}

export default Rates;