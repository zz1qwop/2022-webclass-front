import React from "react";
import "./App.css";
import BookRow from "./BookRow";
import CreateForm from "./CreateForm";
import DeleteForm from "./DeleteForm";
import ReadForm from "./ReadForm";
import UpdateForm from "./UpdateForm";
import { call } from "./service/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchItem: { title: "", author: "", publisher: "", userId: "" },
      updateItem: { id: "", title: "", author: "", publisher: "", userId: "" },
    };
  }

  componentDidMount() {
    call("/book/table", "GET", null).then((response) =>
      this.setState({ items: response.data })
    );
  }

  add = (item) => {
    call("/book", "POST", item).then((response) => {
      this.setState({ items: response.data });
    });
  };

  search = (item) => {
    call("/book/search", "POST", item).then((response) =>
      this.setState({ searchItem: response.data[0] })
    );
  };

  searchForUpdate = (item) => {
    call("/book/search", "POST", item).then((response) =>
      this.setState({ updateItem: response.data[0] })
    );
  };

  update = (item) => {
    call("/book", "PUT", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  delete = (item) => {
    call("/book", "DELETE", item).then((response) =>
      this.setState({ items: response.data })
    );
  };

  render() {
    return (
      <div className="App">
        <CreateForm add={this.add} />
        <ReadForm item={this.state.searchItem} search={this.search} />
        <UpdateForm
          item={this.state.updateItem}
          search={this.searchForUpdate}
          update={this.update}
        />
        <DeleteForm delete={this.delete} />
        <table border="1" width={300}>
          <thead>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>publisher</th>
            <th>userId</th>
            <th>delete</th>
          </thead>
          <tbody>
            {this.state.items.map((item) => (
              <BookRow item={item} key={item.id} delete={this.delete}></BookRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
