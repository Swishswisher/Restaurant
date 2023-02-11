import React  from 'react';
import { NavigationDots } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <div className="app__wrapper flex__center">
                <Component />
            </div>
            <NavigationDots active={idName} />
        </div>
    )
}

export default AppWrap;