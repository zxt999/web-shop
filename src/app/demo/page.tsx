'use client'
import React, {useEffect, useState} from 'react';
import {Image, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {useSearchParams} from 'next/navigation';
import useGettingProducts from "@/app/hooks/useGettingProducts";

type Product = {
    description:string;
    name: string;
    image?:string;
    id:number;
}



export default function Demo() {
    const [name,setName] = useState('');
    const query = useSearchParams();
    const sku = +(query.get('sku')??'');

    const targetProduct = useGettingProducts(sku,name);


    return (
        <div className="h-screen text-gray-100 bg-gradient-to-b from-slate-900 to-slate-600 w-full z-50 p-16 flex items-center flex-col">
            <Input className="w-96" size="large" placeholder="Input your name" prefix={<UserOutlined />} onChange={(event)=>{
                setName(event.target.value)
            }}/>
            <p className="font-[monospace] text-4xl sm:text-6xl md:text-7xl mt-5 lg:mt-10 bg-clip-text text-transparent bg-gradient-to-r to-sky-400 from-violet-400 text-center">name:{name}</p>
            <p>{targetProduct?.description}</p>
            <Image src={targetProduct?.image}/>
        </div>
    );
}
