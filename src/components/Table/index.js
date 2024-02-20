import styles from './Table.module.scss';
import React from 'react';

function Table(props) {

    return (
    <div className={styles.table}>
      <table cellPadding="0" cellSpacing="0" border="0">
      <tbody>
        <tr>
        <td>{props.id}</td>
        <td>{props.ngdu}</td>
        <td>{props.seh}</td>
        <td>{props.skva}</td>
        <td>{props.conskva}</td>
        <td>{props.gno}</td>
        <td>{props.htanga}</td>
        <td>{props.nasos}</td>
        <td>{props.dopob}</td>
        {/* <td>{props.paker}</td> */}
        <td>{props.zaboy}</td>
        {/* <td>{props.date}</td>
        <td>{props.time}</td>
        <td className={styles.table_td_pr}>{props.prishina}</td>
        <td>{props.grup}</td>
        <td>{props.status}</td> */}
        {/* <td><input onClick={() => props.setEditingOpened(true)} type="button" value='Редактировать' className={styles.table_edit}/></td>
        <td><input type="button" value='Удалить' className={styles.table_delete}/></td> */}
        </tr>
      </tbody>
      </table>
    </div>
    );
  }

export default Table;