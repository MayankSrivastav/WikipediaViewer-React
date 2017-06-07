class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      results: ''
    };
  }
}

class Custom extends React.Component {  
  render() {
    return (
      <div className="Custom">
        <SearchBar />
      </div>      
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Random />
        <Custom />
      </div>      
    ); 
  }  
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);