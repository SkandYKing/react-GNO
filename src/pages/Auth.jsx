import React from 'react';

const Auth = () => {
    return (
        <div className="contentBLockAuto mb-40">
            <div className='wrapperAuto'>
                <div className='autoBlock'>
                    <h1 className='autoH'>Авторизация</h1>
                    <input type="text" placeholder='Логин'/><br/>
                    <input type="text" placeholder='Пароль'/><br/>
                    <button>Войти</button>
                </div>
            </div>
        </div>
    )
}
export default Auth;