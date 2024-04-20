'use client'
import axios from "axios";
import {useState} from "react";
import { getCookie } from "cookies-next";

export default function Products()
{
    const [products, setProducts] = useState(<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>)
    axios.get(
        'http://localhost:3005/products',
        {
            headers:{
                authorization: getCookie('auth_token') 
            }
        }
    ).then((response) => {
        let index = 0;

        response.data.map((product) => {
          
          const htmlCodeToReturn = <tr>
            <td style={{border: "1px solid"}} key={index}>{product.amount}</td>
            <td style={{border: "1px solid"}} key={index}>{product.name}</td>
            <td style={{border: "1px solid"}} key={index}>{product.company}</td>
            <td style={{border: "1px solid"}} key={index}>{product.description}</td>
          </tr>;

          index+=1;

          setProducts(htmlCodeToReturn)
        })
    })

    return (
        <section>
            <h1>Produtos</h1>
            <table style={{border: "1px solid"}}>
                <tr style={{border: "1px solid"}}>
                    <th>quantidade</th>
                    <th>nome</th>
                    <th>empresa</th>
                    <th>descrição</th>
                </tr>
                {products}
            </table>
        </section>
    );
}