import {useEffect, useState} from "react";

type Product = {
    description:string;
    name: string;
    image?:string;
    id:number;
}
function useGettingProducts (sku:number, name:string): Product|undefined  {
    const [targetProduct, setTargetProduct] = useState<Product>();
    const [products, setProducts] = useState<Product[]>([]);
    useEffect( () => {
        //fetch(`/api/getProducts${sku?`?sku=${sku}`:''}`).then((res) => res.json()).then((data) => {setProducts(data?.products??[]);});

        const fetchData = async ()=>{
            if(sku){
                const response = await fetch(`/api/getProducts?sku=${sku}`);
                const data = await response.json();
                setTargetProduct(data?.result[0])
            }
            const response1 = await fetch(`/api/getProducts`);
            const data1 = await response1.json();
            setProducts(data1?.result??[])
        };
        fetchData();

    }, [sku]);

    useEffect( () => {
        if(products.length>0 && !!name){
            const targetProduct1 = products.find(p=>p.name===name);
            targetProduct1&&setTargetProduct(targetProduct1);
        }
    }, [name,products]);

    return targetProduct;
}

export default useGettingProducts;