import { useState, useEffect } from "react";
import TagView from "./components/TagView";

function App() {
  const [treeData, setTreeData] = useState({
    name: "root",
    data: "root data",
    // children: [
    // //   {
    // //     name: "child1",
    // //     children: [
    // //       { name: "child1-child1", data: "c1-c1 Hello" },
    // //       { name: "child1-child2", data: "c1-c2 JS" },
    // //     ],
    // //   },
    // //   { name: "child2", data: "c2 World" },
    // ],
  });

  const [exportData, setExportData] = useState(null);
  const [isExportVisible, setIsExportVisible] = useState(false);

  // Function to generate export JSON
  const generateExportData = (node) => {
    const result = { name: node.name };

    if (node.children) {
      result.children = node.children.map((child) => generateExportData(child));
    } else if (node.data !== undefined) {
      result.data = node.data;
    }

    return result;
  };

  // Auto-update export data when tree changes (if export is visible)
  useEffect(() => {
    if (isExportVisible) {
      const cleanData = generateExportData(treeData);
      const jsonString = JSON.stringify(cleanData, null, 2);
      setExportData(jsonString);
    }
  }, [treeData, isExportVisible]);

  const handleExport = () => {
    setIsExportVisible(true);
    const cleanData = generateExportData(treeData);
    const jsonString = JSON.stringify(cleanData, null, 2);
    setExportData(jsonString);
  };

  const handleHideExport = () => {
    setIsExportVisible(false);
    setExportData(null);
  };

  return (
    <div className="app">
      <div className="tree-container">
        <TagView
          node={treeData}
          onUpdate={(updatedNode) => setTreeData(updatedNode)}
        />
      </div>
      <div style={{ display: "flex", gap: "10px"}}>
        {!isExportVisible ? (
          <button className="export-button" onClick={handleExport} style={{ fontWeight: "bold" }}>
            Export
          </button>
        ) : (
          <button className="export-button" onClick={handleHideExport} style={{ fontWeight: "bold" }}>
            Hide Export
          </button>
        )}
      </div>
      {exportData && (
        <div className="export-data" style={{ marginTop: "20px" }}>
          <pre style={{ whiteSpace: "pre-wrap" }}>{exportData}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
