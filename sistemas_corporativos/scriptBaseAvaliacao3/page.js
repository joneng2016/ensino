"use client"
import {useState} from 'react';
import styles from './page.module.css'
import axios from 'axios'

export default function Home() {
  const [insert, setInsert] = useState(false);

  function handlerSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target)

    const email = data.get('email')
    const password = data.get('password')
    const nameProduct = data.get('nameProduct')
    const description = data.get('description')
    const company = data.get('company')
    const price = data.get('price')
    const amount = data.get('amount')

    axios.get(`http://localhost:3005/auth/login?email=${email}&password=${password}`)
    .then(e => {
      const token = e.data.token;

      axios.post(
        `http://localhost:3005/products`,
        {
          name: nameProduct,
          description,
          company,
          price,
          amount
        },
        {
          headers: {
            authorization:token
          }
        }
      ).then(element => {
        if (element && element.data && element.data.message === 'Product created') {
          setInsert(true)
        }
      })
    })
  }

  function formProcess() {
    if (insert) {
      return (
        <main>
          <span>Inserção ocorreu com sucesso</span>
        </main>
      )
    }

    return (
      <main>
        <h1>Produtos</h1><form onSubmit={handlerSubmit}>

        <div className={styles.colum}>

          <div>
            <label>
              E-mail
            </label>
          </div>
          <div>
            <input type="email" name="email"></input>
          </div>

          <div>
            <label>
              Senha
            </label>
          </div>
          <div>
            <input type="password" name="password"></input>
          </div>

        </div>

        <div className={styles.colum}>

          <div>
            <div>
              <label>Nome do Produto</label>
            </div>
            <div>
              <input type="text" name="nameProduct" />
            </div>
          </div>

          <div>
            <div>
              <label>Descrição</label>
            </div>
            <div>
              <input type="text" name="description" />
            </div>
          </div>

          <div>
            <div>
              <label>Empresa</label>
            </div>
            <div>
              <input type="text" name="company" />
            </div>
          </div>


          <div>
            <div>
              <label>Preço</label>
            </div>
            <div>
              <input type="number" name="price" />
            </div>
          </div>


          <div>
            <div>
              <label>Quantidade</label>
            </div>
            <div>
              <input type="number" name="amount" />
            </div>
          </div>
        </div>

        <div className={styles.lineButton}>
          <button>Login</button>
        </div>

      </form>
      </main>
    );
  }

  return (
    <main>
      {formProcess()}
    </main>
  )
}
