import React, { Component } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onTermChange = (e) => {
    const { onSearchChange = () => {} } = this.props;
    this.setState({
      term: e.target.value,
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <Input
        placeholder="Search..."
        value={this.state.term}
        onChange={this.onTermChange}
        prefix={<SearchOutlined />}
      />
    );
  }
}