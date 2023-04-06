import React from 'react';
import Header from '../Header/Header';
import "./AppLayout.scss";


const AppLayout = ({children}) => {
  return (
    <div className="layout">
        <div className="header">
            <Header />
        </div>
        <div className="content">
            {children}
        </div>
    </div>
  )
}

export default AppLayout