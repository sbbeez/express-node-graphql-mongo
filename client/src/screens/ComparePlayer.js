import React, { Component } from "react";
import Loader from "../components/Loader";

import { getPlayerStats } from "../service/fetch";

class ComparePlayer extends Component {
    state = {
        isLoading: true,
        playerStats: []
    }

    async componentDidMount() {
        let stats = await getPlayerStats(this.props.location.state.playerIds);
        this.setState({
            playerStats: stats,
            isLoading: false
        });
    }

    render() {
        return <div>
            {this.state.isLoading ? <Loader /> :
                <table>
                    <tr>
                        <th>Stats</th>
                        <th>Player 1</th>
                        <th>Player 2</th>
                    </tr>
                    {Object.keys(this.state.playerStats[0]).map((s, i) => {
                        return <tr key={i}>
                            <td>{s}</td>
                            <td>{this.state.playerStats[0][s]}</td>
                            <td>{this.state.playerStats[1][s]}</td>
                        </tr>
                    })}
                </table>}
        </div>
    }
}

export default ComparePlayer;