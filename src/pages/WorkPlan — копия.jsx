import React, { useState, useEffect } from 'react';

const WorkPlan = () => {
  const [cardList, setCardList] = useState([
    {id: 1, order: 3, text:'Карточка 3', image:'/img/bot.jpg'},
    {id: 2, order: 1, text:'Карточка 1', image:'/img/top.jpg'},
    {id: 3, order: 2, text:'Карточка 2', image:'/img/middle.jpg'},
    {id: 4, order: 4, text:'Карточка 4', image:'/img/top.jpg'},
    {id: 5, order: 3, text:'Карточка 3', image:'/img/bot.jpg'},
    {id: 6, order: 1, text:'Карточка 1', image:'/img/top.jpg'},
    {id: 7, order: 2, text:'Карточка 2', image:'/img/middle.jpg'},
  ])

  const [currentCard, setCurrentCard] = useState(null)

  function dragStartHandler(e, card){
    console.log('drag', card)
    setCurrentCard(card)
  }
  function dragEndHandler(e){
    e.target.style.background = 'white'
  }
  function dragOverHandler(e){
    e.preventDefault()
    e.target.style.background = 'lightgray'
  }
  function dragHandler(e, card){
    e.preventDefault()
    setCardList(cardList.map(c => {
      if (c.id === card.id){
        return {...c, order: currentCard.order}
      }
      if (c.id === currentCard.id){
        return {...c, order: card.order}
      }
      return c
    }))
    e.target.style.background = 'white'
  }

  const sortCards = (a, b) => {
    if(a.order > b.order){
      return 1 
    }else{
      return -1
    }
  }

    return (
        <>
        {/* <div className="grid-container">
          <div className="left-column">
            {cardList.sort(sortCards).slice(0, 3).map((card, id) => (
              <div 
                onDragStart={(e) => dragStartHandler(e, card)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dragHandler(e, card)}
                draggable={true}
                className={'cardWork2'}>
                <img src={card.image} alt={card.text} />
                
              </div>
            ))}
          </div>
          <div className="right-column">
            {cardList.sort(sortCards).slice(4, 11).map((card, id) => (
              <div 
                onDragStart={(e) => dragStartHandler(e, card)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dragHandler(e, card)}
                draggable={true}
                className={'cardWork2'}>
                <img src={card.image} alt={card.text} />
                
              </div>
            ))}
          </div>
        </div> */}
        <div className="item-grid1">
            <div className="navigationUl">
              <div className='cardWork'>
                {cardList.sort(sortCards).map(card =>
                  <div 
                    onDragStart={(e) => dragStartHandler(e, card)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dragHandler(e, card)}
                    draggable={true}
                    className={'cardWork2'}>
                    <img src={card.image} alt={card.text} />
                    
                  </div>
                  )}
              </div>
                {/* <ul>
                    <li>Верхняя часть</li>
                    <div className="userPhoto">
                        <img src='/img/top.jpg' alt='Фотография'/>
                    </div>
                    <li>Средняя часть</li>
                    <div className="userPhoto">
                        <img src='/img/bot.jpg' alt='Фотография'/>
                    </div>
                    <li>Нижняя часть</li>
                    <div className="userPhoto">
                        <img src='/img/bot.jpg' alt='Фотография'/>
                    </div>
                </ul> */}
            </div>
        </div>
                <div className="item-grid2">

                </div>
                <div className="item-grid1 contentBLock mb-40">
                </div>
                <section className="item-grid2">
                
                </section>
                </>
    )
}

export default WorkPlan;