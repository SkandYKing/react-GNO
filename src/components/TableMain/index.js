import React from 'react';
import styles from './TableMain.module.scss';

function TableMain({value, onChangeSort}) {
    const tableMain = [
        {name: '№ заявки', sortProperty: 'id'},
        {name: 'НГДУ', sortProperty: 'ngdu'},
        {name: 'Цех', sortProperty: 'seh'},
        {name: '№ скважины', sortProperty: 'skva'},
        {name: 'Констр скважин', sortProperty: 'conskva'},
        {name: 'ГНО', sortProperty: 'gno'},
        {name: 'Спущенные штанги', sortProperty: 'htanga'},
        {name: 'Насос', sortProperty: 'nasos'},
        {name: 'Доп оборуд', sortProperty: 'dopob'},
        // {name: 'Пакер', sortProperty: 'paker'},
        {name: 'Забой', sortProperty: 'zaboy'},
        // {name: 'Дата', sortProperty: 'date'},
        // {name: 'Время', sortProperty: 'time'},
        // {name: 'Причина простоя', sortProperty: 'prishina'},
        // {name: 'Группа простоев', sortProperty: 'grup'},
        // {name: 'Состояние', sortProperty: 'status'},
    ];
    const onClickListItem = (i) =>{
        onChangeSort(i);
    }
    return (    
                <div className={styles.tbl_header}>
                    <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                        {
                            tableMain.map((obj, i) => (
                                <th 
                                    key={i} 
                                    onClick={() => onClickListItem(obj)}
                                    className={value.sortProperty === obj.sortProperty ? '' : ' '}>
                                    {obj.name}
                                </th>
                            ))
                        }
                        </tr>
                    </thead>
                    </table>
                </div>
    );
  }
  
export default TableMain;