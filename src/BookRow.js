import React, { Component } from "react";

class BookRow extends Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item };
    this.delete = props.delete;
  }

  onButtonClick = () => {
    this.delete(this.state.item);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.item !== prevProps.item) {
      this.setState({ item: this.props.item });
    }
  };

  render() {
    const item = this.state.item;
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.author}</td>
        <td>{item.publisher}</td>
        <td>{item.userId}</td>
        <td>
          <button onClick={this.onButtonClick}>delete</button>
        </td>
      </tr>
    );
  }
}

export default BookRow;
