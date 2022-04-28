import React, { Component } from "react";

class Lista extends Component {

  constructor(props) {
    super(props)
    this.state = {
      feed: [
        {
          id: 1,
          userName: 'Daniel',
          curtidas: 1,
          comentarios: 1,
        },
        {
          id: 2,
          userName: 'Rafael',
          curtidas: 100,
          comentarios: 50,
        },
        {
          id: 3,
          userName: 'Jairo',
          curtidas: 150,
          comentarios: 40,
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Feed</h2>
        {
          this.state.feed.map((user) => {
            return (
              <div>
                <hr />
                <h3>Nome: {user.userName}</h3>
                <h3>{user.curtidas}{user.curtidas > 1 ? " Curtidas" : " Curtida"}</h3>
                <h3>{user.comentarios}{user.comentarios > 1 ? " Comentarios" : " Comentario"}</h3>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Lista;
