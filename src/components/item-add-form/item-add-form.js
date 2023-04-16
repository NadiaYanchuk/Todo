import React, { Component } from "react";
import { Button, Input } from "antd";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
    inputError: false,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
      inputError: false,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    if (!label) {
      this.setState({ inputError: true });
      return;
    }
    this.setState({ label: "", inputError: false });
    const cb = this.props.onItemAdded || (() => {});
    cb(label);
  };

  render() {
    const { inputError } = this.state;
    const inputStyle = inputError ? { borderColor: "red" } : {};
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <Input
          placeholder="What needs to be done?"
          value={this.state.label}
          onChange={this.onLabelChange}
          style={inputStyle}
        />

        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </form>
    );
  }
}