import React from "react";

class Body extends React.Component {
  state = {
    name: "",
  };
  render() {
    return (
      <form
        className="row mt-5 mb-5"
        onSubmit={(evt) => {
          evt.preventDefault();
          this.props.handleSubmit(this.state.name);
        }}
      >
        <div className="col-8">
          <input
            className="form-control"
            style={{ borderColor: "#333" }}
            name="searchName"
            onChange={(e) => {
              this.setState({ name: e.currentTarget.value });
            }}
            value={this.state.name}
          />
        </div>
        <button type="submit" className="btn btn-dark col-4">
          Search
        </button>
      </form>
    );
  }
}

export default Body;