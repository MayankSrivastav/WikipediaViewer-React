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

    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: (data) => {        
        var res = data.query.pages;
        var html = "";        
        $.each(res, function(k, v) {
          html += '<a href="' + "https://en.wikipedia.org/?curid=" + v.pageid + '"target="_blank"><article class="article">'
            + '<header><h2>&#x2022; ' + v.title + '</h2><header>'
            + '<p class="extract">'+ v.extract + '</p>'            
            + '</article></a>';          
        });        
        this.setState({results: html});     
      },
      error: function(err) {
        alert(err);
      }
    });

  } 
    render() {
      return (
        <div className="SearchBar">
          <input type="search" id="search"></input>
          <button type="button" id="search-btn" onClick={this.handleClick}>search</button>
          <div className="results">{$('.results').html(this.state.results)}</div>
        </div>
      );  
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