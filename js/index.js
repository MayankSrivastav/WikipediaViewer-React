class SearchBar extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      results: ''
    };
  }

  handleClick() {       
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" 
              + document.getElementById('search').value; 
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