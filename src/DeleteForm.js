import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class DeleteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { item: { title: "" } };
    this.delete = props.delete;
  }

  onTitleChange = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
  };

  onButtonClick = () => {
    this.delete(this.state.item);
    this.setState({
      item: { title: "" },
    });
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
        </div>
        <div style={{ height: "50px" }}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.onButtonClick}
          >
            제품 삭제
          </Button>
        </div>
      </div>
    );
  }
}

export default DeleteForm;
