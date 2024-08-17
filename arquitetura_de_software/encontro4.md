# Diferentes arquiteturas para diferentes problemas - 2

- Professor Jonathan Morris Samara

---

# Arquitetura Ponto-a-Ponto: Distribuição Descentralizada e Colaborativa


---
# Introdução

- **Arquitetura Ponto-a-Ponto (P2P)**: Modelo de organização de sistemas distribuídos.
- Cada nó funciona simultaneamente como cliente e servidor.
- Promove a colaboração direta entre nós da rede.
- Elimina a necessidade de uma autoridade centralizadora.

---

# Características da Arquitetura Ponto-a-Ponto

### Descentralização:
- Não há um servidor central.
- Cada nó realiza operações autonomamente.
- Elimina a dependência de um único ponto de falha.
- Melhora a resiliência do sistema.

### Escalabilidade:
- Capacidade de processamento e armazenamento cresce com a adição de mais nós.
- Eficiência em lidar com grandes volumes de dados e tráfego.

---

# Características da Arquitetura Ponto-a-Ponto (Continuação)

### Distribuição de Recursos:
- Nós compartilham e acessam recursos como largura de banda, armazenamento, e potência de processamento.
- Distribuição equitativa e eficiente dos recursos na rede.

### Autonomia dos Nós:
- Nós operam de forma autônoma, decidindo quando e como participar.
- Facilita a inclusão de novos participantes.
- Adaptável a diferentes condições de rede.

---

# Tipos de Arquitetura P2P

### P2P Puro:
- Todos os nós têm as mesmas responsabilidades e funções.
- Não há servidores ou clientes dedicados.

### P2P Híbrido:
- Combina distribuição com alguns servidores centrais para coordenação.
- Auxilia na localização de nós e autenticação de usuários.
- Otimiza o desempenho através de aspectos de centralização e descentralização.

---

# Benefícios dos Microserviços

### Resiliência e Confiabilidade:
- Redes mais resilientes a falhas.
- Operação contínua mesmo se um nó falhar.
  
### Eficiência na Distribuição de Recursos:
- Evita congestionamento de um único servidor.
- Melhora a eficiência no uso dos recursos.

### Custo Reduzido:
- Eliminação da necessidade de infraestrutura central cara.
- Solução econômica para muitas aplicações.

---

# Desafios dos Microserviços

### Gestão da Segurança:
- Falta de controle central dificulta a proteção contra ataques maliciosos.

### Heterogeneidade dos Nós:
- Desempenho inconsistente devido à variação na capacidade de hardware e conectividade.

### Roteamento e Busca:
- Localização e recuperação de recursos em grandes redes P2P requerem algoritmos sofisticados.

---

# Aplicações Comuns

### Compartilhamento de Arquivos:
- Exemplo: BitTorrent utiliza P2P para distribuir arquivos entre usuários.

### Comunicações Descentralizadas:
- Exemplo: Protocolos de voz e vídeo como Skype (versões iniciais) utilizam P2P.

### Blockchain:
- Exemplo: Redes como Bitcoin operam em um modelo P2P para verificação e registro de transações.

---

# Conclusão

- **Arquitetura P2P**: Modelo robusto e escalável para sistemas distribuídos.
- Favorece a colaboração e o compartilhamento de recursos sem controle centralizado.
- Desafios em termos de segurança e gerenciamento.
- Atraente para diversas aplicações modernas.

---

# Arquitetura Publish-Subscribe
- A arquitetura **Publish-Subscribe (Pub/Sub)** facilita a comunicação assíncrona em sistemas distribuídos.
- **Publishers** (publicadores) enviam mensagens sem precisar conhecer os **Subscribers** (assinantes).
- A comunicação é mediada por um sistema de mensageria (broker), que distribui mensagens para assinantes interessados.
---
#  Características da Arquitetura Pub/Sub
- **Desacoplamento**: Produtores e consumidores são independentes no tempo e no espaço.
- **Assinatura Baseada em Interesses**: Assinantes recebem apenas mensagens relevantes.
- **Distribuição Efetiva de Mensagens**: Broker distribui mensagens para os assinantes apropriados.
- **Escalabilidade**: Facilidade para adicionar novos publicadores ou assinantes.
---
#  Funcionamento da Arquitetura Pub/Sub
- **Publicadores**: Enviam mensagens para tópicos.
- **Assinantes**: Se registram em tópicos e recebem mensagens correspondentes.
- **Broker (Mediador)**: Recebe e distribui mensagens entre publicadores e assinantes.
---
#  Benefícios da Arquitetura Pub/Sub
- **Flexibilidade e Modularidade**: Permite fácil adição e remoção de componentes.
- **Alta Disponibilidade e Resiliência**: Falhas em um componente não afetam o sistema como um todo.
- **Facilidade na Adição de Novos Componentes**: Integra novos publicadores ou assinantes sem reconfigurações complexas.
---
#  Desafios da Arquitetura Pub/Sub
- **Garantia de Entrega**: Complexidade na entrega exata das mensagens.
- **Orquestração e Gestão de Mensagens**: Gestão de tópicos e assinaturas pode ser complexa.
- **Latência**: Atrasos podem ocorrer em sistemas distribuídos globalmente.

---
#  Aplicações Comuns da Arquitetura Pub/Sub
- **Sistemas de Notificação**: Atualizações em tempo real para usuários.
- **Processamento de Dados em Tempo Real**: Ex: Apache Kafka para grandes volumes de dados.
- **Arquiteturas de Microserviços**: Comunicação entre serviços sem dependências rígidas.

---
#  Conclusão
- Arquitetura Pub/Sub oferece modularidade e escalabilidade para sistemas distribuídos.
- Desafios incluem garantia de entrega e ge


---

# Arquitetura de Microserviços
**Microserviços**

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
---


# Arquitetura Pipes-and-Filters: Processamento Modular de Dados

---

# Introdução

A arquitetura Pipes-and-Filters organiza o processamento de dados em etapas interconectadas. Cada filtro processa dados, enquanto os pipes conectam e transmitem dados entre filtros.

---

# Características

- **Modularidade**: Filtros independentes.
- **Composição Flexível**: Configuração e reconfiguração de pipelines.
- **Processamento Sequencial**: Dados fluem através de filtros.
- **Reutilização de Componentes**: Filtros reutilizáveis em diferentes pipelines.

---

# Funcionamento

- **Filtros**: Realizam operações específicas sobre os dados.
- **Tubos**: Transportam dados de um filtro para outro e garantem a transmissão correta.

---

# Benefícios

- **Simplicidade e Clareza**: Facilita desenvolvimento e depuração.
- **Flexibilidade e Extensibilidade**: Adição e remoção de filtros sem impacto significativo.
- **Manutenção Facilitada**: Atualização independente de filtros.
- **Paralelismo e Escalabilidade**: Suporta processamento paralelo.

---

# Desafios

- **Overhead de Comunicação**: Pode introduzir overhead, especialmente em sistemas complexos.
- **Sincronização e Ordenação**: Garantir a sequência correta dos dados.
- **Complexidade na Coordenação**: Coordenação difícil em pipelines complexos.

---

# Aplicações Comuns

- **Processamento de Linguagem Natural (NLP)**: Tokenização, análise sintática.
- **Sistemas de Compilação**: Transformação de código-fonte.
- **Processamento de Dados**: Pipelines ETL para dados.

---

# Conclusão

A arquitetura Pipes-and-Filters proporciona um sistema modular e flexível para processamento de dados, com benefícios significativos em clareza, reutilização e manutenção, apesar de desafios na comunicação e coordenação.
