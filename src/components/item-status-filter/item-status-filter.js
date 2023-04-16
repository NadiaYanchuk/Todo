import React from "react";
import { Button } from "antd";
import "./item-status-filter.css";

const filterButtons = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" },
];

const ItemStatusFilter = ({ filter, onFilterChange = () => {} }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames = isActive ? "filter-button active" : "filter-button";

    return (
      <Button
        key={name}
        type="button"
        onClick={() => onFilterChange(name)}
        className={classNames}
      >
        {label}
      </Button>
    );
  });

  return <div className="filter-buttons">{buttons}</div>;
};

export default ItemStatusFilter;