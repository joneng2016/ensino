# Diferentes arquiteturas para diferentes problemas - 2

- Professor Jonathan Morris Samara

---

# Arquitetura de Microserviços
**Organização e Manutenção de Sistemas Modernos**

---

# Introdução

- **Microserviços** são uma abordagem arquitetural que organiza um aplicativo como um conjunto de serviços pequenos, autônomos e focados em funcionalidades específicas.
- Facilita a **manutenção**, **escalabilidade** e **resiliência** do sistema como um todo.
- Cada serviço é desenvolvido, implantado e escalado independentemente, permitindo maior **flexibilidade**.

---

# Características dos Microserviços
- **Desacoplamento**: Cada componente do sistema é separado em pequenos serviços independentes que operam de maneira autônoma.
- **Resiliência**: Alterações ou falhas em um serviço não afetam diretamente os outros, aumentando a robustez do sistema.

---

# Escalabilidade Independente
- **Escalabilidade Modular**: Cada microserviço é um módulo separado, permitindo que seja escalado independentemente dos demais serviços.
- **Eficiência de Recursos**: Recursos podem ser alocados de acordo com a demanda específica de cada serviço, garantindo desempenho otimizado.

---

# Desenvolvimento Ágil
- **Paralelismo de Equipes**: Diferentes equipes podem trabalhar simultaneamente em diversos microserviços, promovendo agilidade no desenvolvimento.
- **Entrega Contínua**: O ciclo de desenvolvimento é acelerado, permitindo que novas funcionalidades sejam lançadas de forma contínua e sem interrupções.

---

# Facilidade de Implantação
- **Implantação Independente**: Cada microserviço pode ser implantado de forma autônoma, facilitando a implementação de novas funcionalidades ou correções de bugs.
- **Risco Reduzido**: O risco de falhas é menor, pois as mudanças podem ser feitas sem impactar o sistema como um todo, melhorando a resposta a mudanças.

---

# Tecnologias Diversificadas
- **Liberdade Tecnológica**: Cada microserviço pode ser construído utilizando a tecnologia que melhor se adapta ao problema específico que resolve.
- **Flexibilidade**: Não há necessidade de padronizar a linguagem de programação ou o banco de dados em toda a aplicação, permitindo a utilização das melhores ferramentas para cada caso.

---

# Benefícios dos Microserviços
- **Manutenção Simplificada**: A modularidade facilita a manutenção e atualização do sistema. Equipes podem se concentrar em melhorar ou corrigir serviços específicos sem a necessidade de entender todo o sistema.
- **Resiliência**: A arquitetura desacoplada torna o sistema mais robusto. Problemas em um microserviço não afetam diretamente os outros, reduzindo a probabilidade de falhas totais.

---

# Benefícios dos Microserviços (continuação)
- **Escalabilidade Otimizada**: Cada serviço pode ser escalado conforme suas necessidades, permitindo uma utilização mais eficiente dos recursos e garantindo que a aplicação possa crescer de acordo com a demanda.
- **Eficiência Operacional**: A possibilidade de escalar serviços específicos resulta em melhor desempenho e eficiência de custos.

---

# Desafios dos Microserviços
- **Complexidade de Orquestração**: A gestão de múltiplos serviços requer uma abordagem sofisticada para orquestrar e monitorar o sistema de forma eficiente.
- **Comunicação entre Serviços**: Geralmente realizada via APIs ou mensagens, essa comunicação pode introduzir latência e aumentar a complexidade operacional.
- **Distribuição do Estado**: Manter a consistência e a integridade dos dados entre os diferentes serviços pode ser desafiador. Requer práticas avançadas de gestão de dados.
- **Manutenção e Monitoramento**: A complexidade de monitorar e manter vários microserviços distribuídos pode ser um desafio significativo, exigindo ferramentas e processos sofisticados.

---

# Exemplo

```
// user-service/index.js
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
```

```
// product-service/index.js
const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

let products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 }
];

// Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Get product by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
```

```
// order-service/index.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3003;

app.use(express.json());

let orders = [];

// Create a new order
app.post('/orders', async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
        const productResponse = await axios.get(`http://localhost:3002/products/${productId}`);

        const order = {
            id: orders.length + 1,
            user: userResponse.data,
            product: productResponse.data
        };

        orders.push(order);
        res.status(201).json(order);

    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
});

// Get all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
```

