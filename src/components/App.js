import React, { Component } from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';

class App extends Component {

  state = {
    videos: []
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });   
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        i have { this.state.videos.length } videos
      </div>
    )
  }
}

export default App;