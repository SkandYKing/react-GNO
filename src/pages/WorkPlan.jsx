import React, { useState, useEffect } from 'react';

const WorkPlan = () => {
  const [boards, setBoards] = useState([
    {id:1, title:'Привод', cl:'bl1', items:[{id:1, title:'Привод №2', image:'/img/1.jpg'},{id:2, title:'Привод №42', image:'/img/1.jpg'},{id:3, title:'Привод №3', image:'/img/1.jpg'}]},
    {id:2, title:'Устьевая арматура', cl:'bl2', items:[{id:4, title:'Устьевая арматура №2', image:'/img/2.jpg'},{id:5, title:'Устьевая арматура №77', image:'/img/3.jpg'},{id:6, title:'Устьевая арматура', image:'/img/2.jpg'}]},
    {id:3, title:'Насос', cl:'bl3', items:[{id:7, title:'Насос №45', image:'/img/4.jpg'},{id:8, title:'Насос №45', image:'/img/6.jpg'},{id:9, title:'Насос №6', image:'/img/4.jpg'}]},
    {id:4, title:'Якорь', cl:'bl5', items:[{id:10, title:'Якорь №43', image:'/img/5.jpg'},{id:11, title:'Якорь №2', image:'/img/5.jpg'},{id:12, title:'Якорь №89', image:'/img/5.jpg'}]},
    {id:5, title:'ряд НКТ', cl:'bl6', items:[{id:13, title:'ряд НКТ №2', image:'/img/7.jpg'},{id:14, title:'ряд НКТ №7', image:'/img/7.jpg'},{id:15, title:'ряд НКТ №45', image:'/img/7.jpg'}]},
    {id:6, title:'Пакер', cl:'bl7', items:[{id:16, title:'Пакер №2', image:'/img/8.jpg'},{id:17, title:'Пакер №5', image:'/img/8.jpg'},{id:18, title:'Пакер №5', image:'/img/8.jpg'}]},
    {id:7, title:'Вышка', cl:'bl4', items:[]},
  ]);
  const[currentBoard, setCurrentBoard] = useState(null);
  const[currentItem, setCurrentItem] = useState(null);
  const [inputText, setInputText] = useState('');
  const [resizeable, setResizeable] = useState(true); // Состояние для изменения размеров

  function dragOverHandler(e){
    e.preventDefault();
    if (e.target.className === 'item'){
      e.target.style.boxShadow = '0 4px 3px gray';
    }
  }
  function dragLeaveHandler(e){
    e.target.style.boxShadow = 'none';
  }
  function dragStartHandler(e, board, item){
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dragEndHandler(e){
    e.target.style.boxShadow = 'none';
  }
  function dragHandler(e, board, item){
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(boards.map(b => {
      if (b.id === board.id){
        return board;
      }
      if (b.id === currentBoard.id){
        return currentBoard;
      }
      return b;
    }));
    e.target.style.boxShadow = 'none';
  }

  function dropCardHandler(e, board){
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(boards.map(b => {
      if (b.id === board.id){
        return board;
      }
      if (b.id === currentBoard.id){
        return currentBoard;
      }
      return b;
    }));
    e.target.style.boxShadow = 'none';
  }

  const [openBoards, setOpenBoards] = useState([]); // Состояние для открытых блоков
  const toggleBoard = (boardId) => {
    if (openBoards.includes(boardId)) {
      setOpenBoards(openBoards.filter(id => id !== boardId)); // Если блок уже открыт, закрываем его
    } else {
      setOpenBoards([...openBoards, boardId]); // Если блок закрыт, открываем его
    }
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }
  const handleResizeToggle = () => {
    setResizeable(!resizeable);
  };

return (
  <div className={`cardWork ${resizeable ? 'resizeable' : ''}`}>
    {boards.map((board, boardIndex) => (
      <div
        key={boardIndex}
        className={`${board.cl}board ${openBoards.includes(boardIndex) ? 'open' : ''}`}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropCardHandler(e, board)}
        onClick={() => toggleBoard(boardIndex)}
      >
        <div className="board__title"><h3>{board.title}</h3></div>
        {openBoards.includes(boardIndex) || boardIndex === boards.length - 1 ? (
          <div className="board__items">
            {board.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dragHandler(e, board, item)}
                draggable={true}
                className="item"
              >
                <img src={item.image}/>
                <span><br></br></span>
                {boards[boards.length - 1].id === board.id && (
                  <div class="formgroup field">
                  <input type="text" class="formfield" placeholder={item.title} name="name" id='name' required value={inputText}
                    onChange={handleInputChange} />
                </div>

                )}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    ))}
  </div>
  
);

}

export default WorkPlan;