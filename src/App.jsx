import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: "",
      newMessage: "",
      chirps: [
        {
          name: "Me",
          message: "Grrr!"
        },
        {
          name: "You",
          message: "Blah!"
        },
        {
          name: "Yal",
          message: "mmmkay."
        },
      ]
    }

    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleChirp = this.handleChirp.bind(this);
  }

  handleNewUser(e) {
    this.setState({ newUser: e.target.value });
  }

  handleNewMessage(e) {
    this.setState({ newMessage: e.target.value });
  }

  handleChirp() {
    let newChirp = {
      name: this.state.newUser,
      message: this.state.newMessage
    }
    this.setState({ chirps: [...this.state.chirps, newChirp] })
  }

  render() {
    return (
      <div className="container">
        <h1>CHIRPER</h1>
        <form>
          <div class="form-group">
            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name" onChange={this.handleNewUser} />
          </div>

          <div class="form-group">
            <textarea class="form-control" id="formControlTextarea" placeholder="Message" onChange={this.handleNewMessage}></textarea>
          </div>
        </form>
        <button type="Chirp" className="btn btn-danger mb-5" onClick={this.handleChirp}>Chirp</button>
        {this.state.chirps.map(chirp => {
          return (
            <>
              <h2>{chirp.name}</h2>
              <p>{chirp.message}</p>
            </>
          )
        })
        }
      </div>
    )
  }
}

export default App;
