import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="item-grid1">
            <div className="navigationUl">
                <ul>
                    {/* <li><Link to="profile">Профиль пользователя</Link></li> */}
                    <li><Link to="/">Реестр ГНО </Link></li>
                    <li><Link to="workplan">ГНО</Link></li>
                    {/* <li><Link to="report">Оценка технического состояния</Link></li> */}
                </ul>
            </div>
        </div>
    );
  }
  
export default Navigation;