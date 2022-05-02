import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { item: { title: "", author: "", publisher: "", userId: "" } };
    this.add = props.add;
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

  onButtonClick = () => {
    if (this.state.item.title === "") {
      return;
    }
    this.add(this.state.item);
    this.setState({
      item: { title: "", author: "", publisher: "", userId: "" },
    });
  };

  render() {
    // css style
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
        <div style={{ height: "50px" }}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.onButtonClick}
          >
            제품 추가
          </Button>
        </div>
      </div>
    );
  }
}

export default CreateForm;
