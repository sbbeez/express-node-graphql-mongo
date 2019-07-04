import React, { Component } from "react";
import Loader from "../components/Loader";

import { getPlayers } from "../service/fetch";

class PlayerList extends Component {
  state = {
    isLoading: true,
    playerList: [],
    selectedPlayers: []
  }

  async componentDidMount() {
    let players = await getPlayers();
    this.setState({
      isLoading: false,
      playerList: players
    });
  }

  checkIfSelected(id) {
    return this.state.selectedPlayers.indexOf(id) > -1
  }

  onPlayerSelected(p) {
    if (this.state.selectedPlayers.indexOf(p._id) < 0) {
      let newSelectedPlayers = [...this.state.selectedPlayers, p._id];
      if (newSelectedPlayers.length > 2) newSelectedPlayers.shift();
      this.setState({ selectedPlayers: newSelectedPlayers });
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ?
          <Loader /> :
          <div>
            {this.state.playerList.map((p, i) => {
              return <div
                onClick={() => this.onPlayerSelected(p)}
                key={i}
                style={{ textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <img style={{ width: 60, height: 50, borderRadius: 30 }} src={p.thumbnail_url} />
                <p style={{ display: "inline" }}>{p.name}</p>
                {this.checkIfSelected(p._id) ?
                  <img
                    style={{ width: 10, height: 10 }}
                    src="https://www.healthandsafetysigns.co.uk/wp-content/uploads/2017/08/tick.png" /> : <div />}
              </div>
            })}
            <br />
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => this.props.history.push("/comparePlayer", { playerIds: this.state.selectedPlayers })}
                disabled={this.state.selectedPlayers.length < 2}>Compare</button>
            </div>
          </div>}
      </div>
    )
  }
}

export default PlayerList;