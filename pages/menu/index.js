import MenuPages from '@/components/templates/MenuPages';
import React from 'react';

const index = ({ data }) => {
    return (
        <div>
            <MenuPages data={data} />
        </div>
    );
};

export default index;

export async function getStaticProps() {
    const res = await fetch('https://my-server-pi.vercel.app/food-data');
    const data = await res.json();
    
    return {
        props: {
           data 
        }
    }
}