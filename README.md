# Nested-Tree

A React web application for managing nested tags tree structures with expandable/collapsible nodes.

## Features

- 🌲 **Recursive Tree Structure** - Unlimited nesting levels
- 🔽 **Expand/Collapse** - Toggle visibility of children and data
- ✏️ **Editable Data Fields** - Modify tag data in real-time
- ➕ **Dynamic Child Addition** - Add children with automatic structure conversion
- 📤 **JSON Export** - Export clean JSON representation of the tree
- 🏷️ **Inline Name Editing** - Click tag names to edit (Bonus Feature)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Styling (no external CSS frameworks)

## Project Structure

```
Nested-Tree/
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── .gitignore             # Git ignore rules
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Main application component
    ├── App.css            # Application styles
    ├── components/
    │   └── TagView.jsx    # Recursive tag component
    └── styles/
        └── TagView.css    # Tag component styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:8080`

### Build

```bash
npm run build
```

## Data Structure

Each tag node follows this structure:

```json
{
  "name": "tag-name",
  "data": "string data"
}
```

or for parent nodes:

```json
{
  "name": "tag-name",
  "children": [
    { "name": "child1", "data": "data1" },
    { "name": "child2", "data": "data2" }
  ]
}
```

## Usage

1. **Expand/Collapse**: Click the `v` or `>` button to toggle node visibility
2. **Edit Data**: Type directly in the data input field
3. **Add Children**: Click "Add Child" to create a new child node
4. **Export**: Click "Export" to view the JSON structure
5. **Rename Tags**: Click on a tag name, edit, and press Enter (Bonus Feature)
