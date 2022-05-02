import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item };
    this.search = props.search;
    this.update = props.update;
  }

  onTitleChange = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
  };

  onAuthorChange = (e) => {
    const thisItem = this.state.item;
    thisItem.author = e.target.value;
    this.setState({ item: thisItem });
  };

  onPublisherChange = (e) => {
    const thisItem = this.state.item;
    thisItem.publisher = e.target.value;
    this.setState({ item: thisItem });
  };

  onUserIdChange = (e) => {
    const thisItem = this.state.item;
    thisItem.userId = e.target.value;
    this.setState({ item: thisItem });
  };

  onSearchClick = () => {
    this.search(this.state.item);
  };

  onUpdateClick = () => {
    this.update(this.state.item);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.item !== prevProps.item) {
      this.setState({ item: this.props.item });
    }
  };

  render() {
    const boxStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#f4f9fc",
    };
    const inputBoxStyle = {
      display: "flex",
      flexDirection: "column",
      paddingRight: "50px",
    };
    const inputStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "300px",
    };
    const btnBoxStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "130px",
    };
    return (
      <div style={boxStyle}>
        <div style={inputBoxStyle}>
          <div style={inputStyle}>
            <p>TITLE</p>
            <TextField
              onChange={this.onTitleChange}
              value={this.state.item.title}
            />
          </div>
          <div style={inputStyle}>
            <p>AUTHOR</p>
            <TextField
              onChange={this.onAuthorChange}
              value={this.state.item.author}
            />
          </div>
          <div style={inputStyle}>
            <p>PUBLISHER</p>
            <TextField
              onChange={this.onPublisherChange}
              value={this.state.item.publisher}
            />
          </div>
          <div style={inputStyle}>
            <p>USERID</p>
            <TextField
              onChange={this.onUserIdChange}
              value={this.state.item.userId}
            />
          </div>
        </div>
        <div style={btnBoxStyle}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.onSearchClick}
          >
            제품 검색
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={this.onUpdateClick}
          >
            제품 수정
          </Button>
        </div>
      </div>
    );
  }
}

export default UpdateForm;
