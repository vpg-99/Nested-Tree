import { useState } from "react";
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

  return (
    <div className="app">
      <div className="tree-container">
        <TagView
          node={treeData}
          onUpdate={(updatedNode) => setTreeData(updatedNode)}
        />
      </div>
    </div>
  );
}

export default App;
