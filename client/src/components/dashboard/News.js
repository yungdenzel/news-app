import React, { Component } from 'react';
import axios from 'axios';



import NewsList from './NewsList';



class App extends Component {
  
    constructor(props){
        super(props);

        this.state={news: []};             
                            
                      }
 

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5aaebfe73fa04a4abcd241c6b66ec792')
          .then(response => this.setState({news: response.data.articles}))
          .catch(err => console.log(err));
                   }

                  
    render() {
                 return(
                       <div>                                                 
                             <NewsList articles={this.state.news} />
                             
                    </div>                          
                        )
                     
                        }}  


export default App;