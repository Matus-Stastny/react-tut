import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

var url = "https://jsonplaceholder.typicode.com";

class App extends Component {
  state = {
    todos: [],
    posts: [],
    loading: false
  };

  fetchData = parameter => {
    fetch(`${url}/${parameter}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return this.setState({ [parameter]: data.slice(0, 10) });
      })
      .catch(err => console.error("ERROOOOOR!!!", err));
  };

  render() {
    const { todos, posts } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <button onClick={() => this.fetchData("todos")}>Fetch todos</button>
          <h3>TODOS:</h3>
          {todos.map((todo, index) => (
            <p key={index}>{todo.title}</p>
          ))}
        </div>
        <div>
          <button onClick={() => this.fetchData("posts")}>Fetch posts</button>

          <h3>POSTS:</h3>
          {posts.map((post, index) => (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        <button onClick={() => this.fetchData("bullshit")}>
          Fetch bullshit
        </button>
      </div>
    );
  }
}

export default App;
