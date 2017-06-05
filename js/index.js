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