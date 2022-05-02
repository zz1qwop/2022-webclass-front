import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class ReadForm extends Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item };
    this.search = props.search;
  }

  onTitleChange = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
  };

  onButtonClick = () => {
    this.search(this.state.item);
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
            <TextField value={this.state.item.author} disabled={true} />
          </div>
          <div style={inputStyle}>
            <p>PUBLISHER</p>
            <TextField value={this.state.item.publisher} disabled={true} />
          </div>
          <div style={inputStyle}>
            <p>USERID</p>
            <TextField value={this.state.item.userId} disabled={true} />
          </div>
        </div>
        <div style={{ height: "50px" }}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.onButtonClick}
          >
            제품 검색
          </Button>
        </div>
      </div>
    );
  }
}

export default ReadForm;
