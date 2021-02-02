import React from "react";
import { connect } from "react-redux";
import "./Statistics.css";

const Statistics = ({ statistics, isStatisticsPage }) => {
    return (
        <div className="statistics-block" style={isStatisticsPage ? {display: "block"} : {display: "none"}}>
            <h1>STATISTICS</h1>
            <section className="statistics-table">
                <table>
                    <thead>
                        <tr className="first-row"><th></th><th>Attempts</th><th>Mistakes</th><th>Correct</th><th>%</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Addition</td><td className="data">{statistics.addition.attempts}</td>
                            <td className="data">{statistics.addition.wrong}</td>
                            <td className="data">{statistics.addition.correct}</td>
                            <td className="data">{statistics.addition.attempts ? Math.trunc(Math.round(statistics.addition.correct / statistics.addition.attempts * 100)) : 0}</td></tr>
                        <tr><td>Substraction</td><td className="data">{statistics.substraction.attempts}</td>
                            <td className="data">{statistics.substraction.wrong}</td>
                            <td className="data">{statistics.substraction.correct}</td>
                            <td className="data">{statistics.substraction.attempts ? Math.trunc(Math.round(statistics.substraction.correct / statistics.substraction.attempts * 100)) : 0}</td></tr>
                        <tr><td>Multiplication</td><td className="data">{statistics.multiplication.attempts}</td>
                            <td className="data">{statistics.multiplication.wrong}</td>
                            <td className="data">{statistics.multiplication.correct}</td>
                            <td className="data">{statistics.multiplication.attempts ? Math.trunc(Math.round(statistics.multiplication.correct / statistics.multiplication.attempts * 100)) : 0}</td></tr>
                        <tr><td>Division</td><td className="data">{statistics.division.attempts}</td>
                        <td className="data">{statistics.division.wrong}</td>
                        <td className="data">{statistics.division.correct}</td>
                        <td className="data">{statistics.division.attempts ? Math.trunc(Math.round(statistics.division.correct / statistics.division.attempts * 100)) : 0}</td></tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        statistics: state.statistics,
        isStatisticsPage: state.isStatisticsPage
    }
}

export default connect(mapStateToProps)(Statistics);