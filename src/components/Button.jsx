import React from 'react';

export const Button = ({type,title}) => <button type="button" class={`btn btn-${type} btn-sm`}>{title}</button>

// "btn btn-primary btn-sm"
// btn-secondary