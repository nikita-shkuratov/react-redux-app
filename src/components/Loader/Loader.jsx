import React from 'react';
import './Loader.scss';

export const Loader = () => {
  return (<div className="text-center">
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}