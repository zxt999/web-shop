import {Sequelize, DataTypes} from 'sequelize';
import { NextApiRequest } from 'next'


export const GET = async function (request:NextApiRequest) {
    const { searchParams } = new URL(request.url??'');
    const sku = searchParams.get('sku');




    const sequelize = new Sequelize('web-shop', 'root', '12345678', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        dialectModule: require('mysql2'),
        dialectOptions: {
            socketPath: "/tmp/mysql.sock"
        }
    });

    async function testConnection() {
        try {
             await sequelize.authenticate();
             console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    await testConnection();

    const Products = sequelize.define('Products', {
        // 定义表的字段
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    let products;

    if(sku){
        products =  [await Products.findByPk(sku)];
    }else{
        products = await Products.findAll();
    }










// //1
// //     const c = a();
// //     console.log('before await c:',c);
// // //2
//     const b = await a();
//     console.log('VVVV',b);
// // //3
//     a().then(data=>{
//         console.log('in then:',data)
//     })
// //
     return Response.json({result:products})
}