import React, { useState, useEffect } from 'react';
import TableMain from '../components/TableMain';
import Table from '../components/Table';
import Categories from '../components/Categories';
import Create from '../components/Create';
import Editing from '../components/Editing';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

const App = () => {
    const [createOpened, setCreateOpened] = React.useState(false);
    const [editingOpened, setEditingOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [currentPage, onChangePage] = React.useState(1);
    const [items, setItems] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'Цех',
        sortProperty: 'seh',
    });
    
    React.useEffect(() => {
        const sortBy = sortType.sortProperty
        const order = sortType.name.includes('asc') ? 'desc' : 'asc';
        fetch(
            `https://638a87c57220b45d227e7bb5.mockapi.io/table?page=${currentPage}&limit=8&${
            categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortBy}&order=${order}`,
        )
            .then((res) => res.json())
            .then((arr) =>{
                setItems(arr);
            });
            window.scrollTo(0, 0);
    }, [categoryId, sortType, currentPage]);


    //период по дате
        const [data, setData] = useState([]);
        const [fromDate, setFromDate] = useState("");
        const [toDate, setToDate] = useState("");
        const sortBy = sortType.sortProperty
        const order = sortType.name.includes('asc') ? 'desc' : 'asc';
        React.useEffect(() => {
          fetch(`https://638a87c57220b45d227e7bb5.mockapi.io/table?page=${currentPage}&limit=8&${
            categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortBy}&order=${order}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .then((arr) =>{
                setItems(arr);
            });
            window.scrollTo(0, 0);
        }, [categoryId, sortType, currentPage]);
        const handleFromDateChange = (event) => {
          setFromDate(event.target.value);
        };
        const handleToDateChange = (event) => {
          setToDate(event.target.value);
        };
        const filterData = (data) => {
            if (fromDate && toDate && new Date(fromDate) <= new Date(toDate)) {
              return data.filter(
                (item) =>
                  new Date(item.date) >= new Date(fromDate) &&
                  new Date(item.date) <= new Date(toDate)
              );
            } else {
              return data;
            }
          };
        const sortedData = filterData(data).sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
    return (
        <>
        {createOpened ? <Create onClose={() => setCreateOpened(false)}/> : null}
        {editingOpened ? <Editing onClose={() => setEditingOpened(false)}/> : null}
                <div className="item-grid2">
                    <div className="sort">
                        {/* <div className="inputDate">
                            <h5>Период:</h5>
                            <input type="date" value={fromDate} onChange={handleFromDateChange} />
                            <input type="date" value={toDate} onChange={handleToDateChange} />
                        </div> */}
                        {/* <div onClick={() => setCreateOpened(true)} className="inputButton search-block2 ">
                            <img height={20} width={20} src='img/plus.png' alt='+'/>
                            <input type="button" value='Создать'/>
                        </div> */}
                    </div>
                    <div className="contentBLock">
                        {/* <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/> */}
                        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                    </div>
                </div>
                <div className="item-grid1 contentBLock mb-40">
                </div>
                <section className="item-grid2">
                <div className="item-scroll">
                <TableMain value={sortType} onChangeSort={(i) => setSortType(i)}/>
                        {sortedData//items
                        .filter(obj => {
                            if (obj.ngdu.toLowerCase().includes(searchValue.toLowerCase())){
                                return true;
                            }
                                return false;
                        })


                        .map((obj, index) => (
                            <Table 
                            key={index} 
                            id={obj.id}
                            ngdu={obj.ngdu}
                            seh={obj.seh}
                            skva={obj.skva}
                            conskva={obj.conskva}
                            gno={obj.gno}
                            htanga={obj.htanga}
                            nasos={obj.nasos}
                            dopob={obj.dopob}
                            // paker={obj.paker}
                            zaboy={obj.zaboy}
                            // date={obj.date}
                            // time={obj.time}
                            // prishina={obj.prishina}
                            // grup={obj.grup}
                            // status={obj.status}
                            // setEditingOpened={setEditingOpened}
                            />
                        ))}
                </div>
                <Pagination currentPage={currentPage} onChangePage={onChangePage} />
                </section>
                </>
    )
}
export default App;