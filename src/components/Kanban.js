import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const itemsFromBackend = [
  { id: '11', content: "First task" },
  { id: '12', content: "Second task" },
  { id: '13', content: "Third task" },
  { id: '14', content: "Fourth task" },
  { id: '15', content: "Fifth task" }
];

const columnsFromBackend = {
  ['1']: {
    name: "Requested",
    items: itemsFromBackend
  },
  ['2']: {
    name: "To do",
    items: []
  },
  ['3']: {
    name: "In Progress",
    items: []
  },
  ['4']: {
    name: "Done",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

export default class Kanban extends Component {
  constructor(props) {
    super(props);
    this.state = { columns: columnsFromBackend };
    const userStyles = {
      container: {},
      columnContainer: {},
      column: {},
      columnDragOver: {},
      item: {},
      itemDragging: {},
      ...(this.props.styles || {}),
    };
    this.styles = {
      container: { display: "flex", justifyContent: "center", height: "100%", ...userStyles.container },
      columnContainer: { display: "flex", flexDirection: "column", alignItems: "center", ...userStyles.columnContainer },
      column: { background: 'lightgrey', padding: 4, width: 250, minHeight: 500, ...userStyles.column },
      columnDragOver: { background: 'lightblue', padding: 4, width: 250, minHeight: 500, ...userStyles.columnDragOver },
      item: { userSelect: "none", padding: 16, margin: "0 0 8px 0", minHeight: "50px", backgroundColor: "#456C86", color: "white", ...userStyles.item },
      itemDragging: { userSelect: "none", padding: 16, margin: "0 0 8px 0", minHeight: "50px", backgroundColor: "#263B4A", color: "white", ...userStyles.itemDragging },
    };
// ...provided.draggableProps.style
  //snapshot.isDragging ?
  }
  setColumns = (columns) => {
    this.setState({ columns });
  };
  itemClick(item) {
    console.log('click', item);
  }
  render() {
    const setColumns = this.setColumns;
    const columns = this.state.columns;
    return (
      <div style={this.styles.container}>
  <DragDropContext
    onDragEnd={result => onDragEnd(result, columns, setColumns)}
  >
    {Object.entries(columns).map(([columnId, column], index) => {
      return (
        <div
          style={this.styles.columnContainer}
          key={columnId}
        >
        <h2>{column.name}</h2>
        <div style={{ margin: 8 }}>
    <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
        return (
          <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={snapshot.isDraggingOver ? this.styles.columnDragOver : this.styles.column }
      >
        {column.items.map((item, index) => {
          return (
            <Draggable
          key={item.id}
          draggableId={item.id}
          index={index}
            >
            {(provided, snapshot) => {
            return (
              <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
                ...(snapshot.isDragging ? this.styles.itemDragging: this.styles.item),
                ...provided.draggableProps.style,
              }}
              onClick={() => this.itemClick(item)}
          >
            {item.content}
          </div>
          );
          }}
        </Draggable>
        );
        })}
        {provided.placeholder}
      </div>
      );
      }}
    </Droppable>
      </div>
      </div>
    );
    })}
  </DragDropContext>
    </div>
  );
  }
}
