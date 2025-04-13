import React from 'react';
import Feature from './Feature';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    
    return (
        <div className='flex flex-col border rounded-2xl p-4 mt-2 bg-amber-600 text-white'>
            {/* card header  */}
            <div>
                <h2 className='text-3xl'>{name}</h2>
                <h3 className='text-2xl'>{price}</h3>
            </div>
            {/* card body  */}
            <div className='bg-amber-400 flex-1 p-4 rounded-2xl mt-3'>
                <p>{description}</p>
            {
                features.map((feature, index)=> <Feature key={index+feature} feature={feature}></Feature>)
            }
            </div>
            <button className='btn w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;