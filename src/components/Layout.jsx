import React from 'react';

export const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div className='container mx-auto'>
                {children}
            </div>
        </React.Fragment>
    )
}