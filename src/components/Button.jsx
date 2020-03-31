import React from 'react';

export const Button = ({type,title, onClick}) => <button onClick={onClick} type="button" className={`btn btn-${type} btn-sm`}>{title}</button>