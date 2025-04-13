import React from 'react';

const Link = ({route}) => {
    return (
       
         
                <li className='lg:mr-10 px-4 rounded-md p-0.5 mt-2 hover:bg-amber-300'>
                    <a href={route.url}>{route.name}</a>
                </li>
           
        
    );
};

export default Link;