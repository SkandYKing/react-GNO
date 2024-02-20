import React from 'react';

const ProfileUser = () => {
    return (
        <div className="item-grid2">
            <div className="userBLock">
            <div className="userPhoto">
                <img src='/img/user.png' alt='Фотография'/>
            </div>
            <div  className="user-block">
                <h1>Иванов Артур Федорович</h1>
                <h3>Технолог</h3>
                <div>
                    <p>Исследования на ремонт : 3 шт</p>
                    <p>Выполненно работ : 25 шт</p>
                    <p>Телефон : 8 (8553) 53-53-53</p>
                    <p>Почта : user@tatneft.com</p>
                </div>
                <div className='inputButtonUser'>
                    <input type="button" value='Редактировать'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProfileUser;