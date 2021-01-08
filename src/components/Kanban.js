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

const onDragEnd = (result, columns, setColumns, props) => {
  if (!result.destination) return;
  const { source, destination } = result;

  let newColumns;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns.find(item => item.id === source.droppableId);
    const destColumn = columns.find(item => item.id === destination.droppableId);
    const sourceItems = sourceColumn.items || [];
    const destItems = destColumn.items || [];
    sourceColumn.items = sourceItems;
    destColumn.items = destItems;
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    newColumns = columns.slice();
    setColumns(newColumns);
    if (props.onDragEnd) {
      props.onDragEnd(result);
    }
  } else {
    const column = columns.find(item => item.id === source.droppableId);
    const copiedItems = column.items;
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    newColumns = columns.slice();
    setColumns(newColumns);
  }
  if (props.orderSaveKey) {
    saveOrder(newColumns, props.orderSaveKey);
  }
};

const saveOrder = (data, key) => {
  const order = data.reduce((acc, col) => {
    const colOrder = (col.items || []).reduce((accItems, item, index) => {
      accItems[item.id] = index;
      return accItems;
    }, {});
    acc[col.id] = colOrder;
    return acc;
  }, {});
  localStorage.setItem(key, JSON.stringify(order));
};

const restoreOrder = (columns, key) => {
  let order;
  try {
    order = JSON.parse(localStorage.getItem(key));
  } catch {
  }
  if (!order) {
    return;
  }
  columns.forEach((column) => {
    const colsData = order[column.id];
    if (colsData) {
      (column.items || []).forEach((item) => {
        const itemOrder = colsData[item.id];
        if (itemOrder !== undefined) {
          item.order = itemOrder;
        } else {
          item.order = Number.MAX_SAFE_INTEGER;
        }
      });
      (column.items || []).sort((a, b) => (a.order - b.order));
    }
  });
};

export default class Kanban extends Component {
  constructor(props) {
    super(props);
    this.state = { columns: this.props.data || [] };
    const userStyles = {
      container: {},
      columnContainer: {},
      columnHeader: {},
      column: {},
      columnDragOver: {},
      item: {},
      itemDragging: {},
      ...(this.props.styles || {}),
    };
    this.styles = {
      container: { display: "flex", justifyContent: "center", height: "100%", ...userStyles.container },
      columnContainer: { display: "flex", flexDirection: "column", alignItems: "center", ...userStyles.columnContainer },
      columnHeader: { ...userStyles.columnHeader },
      column: { background: 'lightgrey', padding: 4, width: 250, minHeight: 500, ...userStyles.column },
      columnDragOver: { background: 'lightblue', padding: 4, width: 250, minHeight: 500, ...userStyles.columnDragOver },
      item: { userSelect: "none", padding: 16, margin: "0 0 8px 0", minHeight: "50px", backgroundColor: "#456C86", color: "white", ...userStyles.item },
      itemDragging: { userSelect: "none", padding: 16, margin: "0 0 8px 0", minHeight: "50px", backgroundColor: "#263B4A", color: "white", ...userStyles.itemDragging },
    };
  }
  setColumns = (columns) => {
    this.setState({ columns });
  };
  itemClick(item) {
    if (this.props.itemClick) {
      this.props.itemClick(item);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      const columns = nextProps.data.slice();
      restoreOrder(columns, nextProps.orderSaveKey);
      this.setState({ columns: nextProps.data });
    }
  }

  render() {
    const setColumns = this.setColumns;
    const columns = this.state.columns;
    const { t } = this.props;
    return (
      <div style={this.styles.container}>
  <DragDropContext
    onDragEnd={result => onDragEnd(result, columns, setColumns, this.props)}
  >
    {columns.map((column) => {
      return (
        <div
          style={this.styles.columnContainer}
          key={column.id}
        >
        <h2 style={this.styles.columnHeader}>{t(column.title)}</h2>
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
                ...(item.style || {})
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
