'use client'
import React, {useState} from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Demo() {
    const [name,setName] = useState('');
    return (
        <div className="h-screen text-gray-100 bg-gradient-to-b from-slate-900 to-slate-600 w-full z-50 p-16 flex items-center flex-col">
            <Input className="w-96" size="large" placeholder="Input your name" prefix={<UserOutlined />} onChange={(event)=>{
                setName(event.target.value)
            }}/>
            <p className="font-[monospace] text-4xl sm:text-6xl md:text-7xl mt-5 lg:mt-10 bg-clip-text text-transparent bg-gradient-to-r to-sky-400 from-violet-400 text-center">name:{name}</p>
        </div>
    );
}
