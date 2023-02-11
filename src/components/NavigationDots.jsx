import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {['home', 'about', 'menu', 'chef','awards', 'contact'].map((item, index) => (
                <a 
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#DCCA87'} : { }} 
                />
            ))}
        </div>
    )
}

export default NavigationDots;