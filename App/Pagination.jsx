import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments.jsx';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start: 0, end: 10 };
  }

  handleNext() {
    var currentStart = this.state.start;
    var currentEnd = this.state.end;

    if (currentEnd + 10 > this.props.currentLength && currentStart + 10 < this.props.currentLength) {
      currentStart += 10;
      this.setState({ start: currentStart - 10, end: this.props.currentLength });
    } else if (currentEnd < this.props.currentLength) {
      currentStart += 10;
      currentEnd += 10;
      this.setState({ start: currentStart, end: currentEnd });
    }
  }

  handlePrev() {
    var currentStart = this.state.start;
    var currentEnd = this.state.end;

    if (currentStart) {
      if (currentEnd === this.props.currentLength) {
        currentEnd = currentStart;
        currentStart -= 10;
        this.setState({ start: currentStart, end: currentEnd });
      } else {
        currentStart -= 10;
        currentEnd -= 10;
        this.setState({ start: currentStart, end: currentEnd });
      }
    }
  }
  //each object has permalink property & routeName for router
  //need to send permalink to component to render

  //fix id here
  render() {
    if (this.props.list.length) {
      var listjsx = this.props.list
        .map((news, idx) => {
          return (
            <a key={idx} href="#">
              <li>
                {news.title}
                <img src={news.thumbnail} alt="(No Image Provided)" height="50" width="50" />
              </li>
            </a>
          );
        })
        .slice(this.state.start, this.state.end);

      return (
        <div>
          <ul>{listjsx}</ul>
          <input type="button" value="Next" onClick={() => this.handleNext()} />
          <input type="button" value="Prev" onClick={() => this.handlePrev()} />
        </div>
      );
    } else {
      return <div>Select a reddit feed.</div>;
    }
  }
}

export default Pagination;
