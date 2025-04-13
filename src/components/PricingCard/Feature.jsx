import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    
    return (
        <p className='flex mt-3 bg-amber-500 p-2 rounded-md'><CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
    );
};

export default Feature;