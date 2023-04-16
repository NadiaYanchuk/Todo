import React from "react";
import "./todo-list-item.css";
import { Button, Space } from "antd";
import { ExclamationCircleOutlined, DeleteOutlined } from "@ant-design/icons";

const TodoListItem = ({
  important,
  done,
  label,
  onToggleImportant,
  onToggleDone,
  onDelete,
  id,
}) => {
  let classNames = "todo-list-item";

  if (important) {
    classNames += " important";
  }

  if (done) {
    classNames += " done";
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>
      <Space>
        <Button
          type={important ? "primary" : "default"}
          shape="circle"
          icon={<ExclamationCircleOutlined />}
          onClick={() => onToggleImportant(id)}
          className="important-button"
        />
        <Button
          type="primary"
          className="ant-btn-danger"
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => onDelete(id)}
        />
      </Space>
    </span>
  );
};

export default TodoListItem;