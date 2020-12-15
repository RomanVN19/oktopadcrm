import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const testItems = [
  { id: '11', title: "First task" },
  { id: '12', title: "Second task" },
  { id: '13', title: "Third task" },
  { id: '14', title: "Fourth task" },
  { id: '15', title: "Fifth task" }
];

const testData = [
  {
    id: 'id1',
    title: 'col 1',
    items: testItems,
  },
  {
    id: 'id2',
    title: 'col 2',
  },
];

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns.find(item => item.id === source.droppableId);
    const destColumn = columns.find(item => item.id === destination.droppableId);
    const sourceItems = sourceColumn.items || [];
    const destItems = destColumn.items || [];
    sourceColumn.items = sourceItems;
    destColumn.items = destItems;
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns(columns.slice());
  } else {
    const column = columns.find(item => item.id === source.droppableId);
    const copiedItems = column.items;
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns(columns.slice());
  }
};

export default class Kanban extends Component {
  constructor(props) {
    super(props);
    this.state = { columns: testData };
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
    {columns.map((column) => {
      return (
        <div
          style={this.styles.columnContainer}
          key={column.id}
        >
        <h2>{column.title}</h2>
        <div style={{ margin: 8 }}>
    <Droppable droppableId={column.id} key={column.id}>
        {(provided, snapshot) => {
        return (
          <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={snapshot.isDraggingOver ? this.styles.columnDragOver : this.styles.column }
      >
        {(column.items || []).map((item, index) => {
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
            {item.title}
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
