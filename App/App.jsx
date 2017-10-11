import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Pagination from './Pagination.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentList: [], currentLength: 0 };
  }

  handleNewList(newList) {
    //reset currentList
    this.setState({ currentList: [] });

    axios.get(`https://www.reddit.com/r/${newList}/new.json`).then(result => {
      console.log('result', result);
      result.data.data.children.forEach(news => {
        var tempNews = {
          title: news.data.title,
          thumbnail: news.data.thumbnail,
          permalink: news.data.permalink,
          routeName: newList
        };
        this.setState({
          currentList: this.state.currentList.slice().concat(tempNews),
          currentLength: this.state.currentLength + 1
        });
      });
    });
  }

  render() {
    return (
      <div>
        <h3>List of comments</h3>
        <span><input type="button" value="Chicago Bulls" onClick={() => this.handleNewList('chicagobulls')} /></span>
        <span><input type="button" value="Chicago Bears" onClick={() => this.handleNewList('chicagobears')} /></span>
        <span><input type="button" value="INFJ" onClick={() => this.handleNewList('infj')} /></span>
        <Pagination list={this.state.currentList} currentLength={this.state.currentLength} />
      </div>
    );
  }
}
export default App;
