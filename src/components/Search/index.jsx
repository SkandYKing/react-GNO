import React from 'react';
import styles from './Search.module.scss';

const Search = ({searchValue, setSearchValue}) => {
    return (
        <div  className={styles.search_block}>
            <img height={30} width={30} src='img/magnifying-glass.png' alt='Поиск по НГДУ'/>
            <input 
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)} 
            placeholder='Поиск по НГДУ' 
            />
            {searchValue && (
            <img onClick={() => setSearchValue('')} className={styles.closeIcon} src='../img/close.png' alt='Закрыть'/>
            )}
        </div>
    );
};
  
export default Search;