import { useState } from "react";
import "../styles/TagView.css";

function TagView({ node, onUpdate }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(node.name);

  // Toggle expand/collapse
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle data field changes
  const handleDataChange = (e) => {
    const updatedNode = { ...node, data: e.target.value };
    onUpdate(updatedNode);
  };

  // Handle adding a new child
  const handleAddChild = () => {
    const updatedNode = { ...node };

    // Remove data property if it exists and add children
    if (updatedNode.data !== undefined) {
      delete updatedNode.data;
    }

    // Initialize children array if it doesn't exist
    if (!updatedNode.children) {
      updatedNode.children = [];
    }

    // Add new child
    updatedNode.children.push({
      name: "New Child",
      data: "Data",
    });

    onUpdate(updatedNode);
    setIsExpanded(true);
  };

  // Handle child updates
  const handleChildUpdate = (index, updatedChild) => {
    const updatedNode = { ...node };
    updatedNode.children = [...updatedNode.children];
    updatedNode.children[index] = updatedChild;
    onUpdate(updatedNode);
  };

  // Handle name editing
  const handleNameClick = () => {
    setIsEditingName(true);
    setEditedName(node.name);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };
  // Handle name change with keyboard keys
  const handleNameKeyDown = (e) => {
    if (e.key === "Enter") {
      const updatedNode = { ...node, name: editedName };
      onUpdate(updatedNode);
      setIsEditingName(false);
    } else if (e.key === "Escape") {
      setIsEditingName(false);
      setEditedName(node.name);
    }
  };

  const handleNameBlur = () => {
    setIsEditingName(false);
    setEditedName(node.name);
  };

  return (
    <div className="tag-view">
      <div className="tag-header">
        <button className="toggle-button" onClick={toggleExpand}>
          {isExpanded ? "v" : ">"}
        </button>

        {isEditingName ? (
          <input
            type="text"
            className="name-input"
            value={editedName}
            onChange={handleNameChange}
            onKeyDown={handleNameKeyDown}
            onBlur={handleNameBlur}
            autoFocus
          />
        ) : (
          <span className="tag-name" onClick={handleNameClick}>
            {node.name}
          </span>
        )}

        <button className="add-child-button" onClick={handleAddChild}>
          Add Child
        </button>
      </div>
      

      {isExpanded && (
        <div className="tag-content">
          {/* Show data field if node has data */}
          {node.data !== undefined && (
            <div className="data-field">
              <label>Data</label>
              <input
                type="text"
                value={node.data}
                onChange={handleDataChange}
                className="data-input"
              />
            </div>
          )}

          {/* Show children recursively if node has children */}
          {node.children && node.children.length > 0 &&  (
            <div className="children-container">
              {node.children.map((child, index) => (
                <TagView
                  key={index}
                  node={child}
                  onUpdate={(updatedChild) =>
                    handleChildUpdate(index, updatedChild)
                  }
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TagView;
