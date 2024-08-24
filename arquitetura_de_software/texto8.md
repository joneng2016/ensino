# Padrão de Arquitetura Model-View-Controller (MVC)

O padrão de arquitetura Model-View-Controller (MVC) é uma abordagem para organizar o código de aplicativos de software, separando a lógica de negócios da interface do usuário e da interação do usuário. Este padrão é amplamente utilizado em desenvolvimento web e de software para promover a modularidade e a manutenção do código.

## Componentes do MVC

### Model (Modelo)
O **Modelo** representa os dados e a lógica de negócios do aplicativo. Ele é responsável por acessar e manipular os dados, além de aplicar as regras de negócio. O Modelo não tem conhecimento sobre a Interface do Usuário (View) e notifica a View quando os dados são alterados.

#### Responsabilidades do Modelo:
- **Gerenciar os Dados**: Acessar, armazenar e manipular dados.
- **Regras de Negócio**: Aplicar a lógica de negócios.
- **Notificação**: Informar a View sobre mudanças nos dados.

### View (Visão)
A **Visão** é responsável pela apresentação dos dados para o usuário e pela captura da interação do usuário. Ela exibe os dados fornecidos pelo Modelo e envia as ações do usuário para o Controller.

#### Responsabilidades da Visão:
- **Exibição de Dados**: Mostrar dados ao usuário.
- **Interação do Usuário**: Capturar e encaminhar ações do usuário para o Controller.

### Controller (Controlador)
O **Controlador** atua como intermediário entre o Modelo e a Visão. Ele recebe as ações do usuário da View, processa essas ações (geralmente fazendo alterações no Modelo) e atualiza a View conforme necessário.

#### Responsabilidades do Controlador:
- **Receber Entrada**: Capturar as ações do usuário da View.
- **Atualizar o Modelo**: Modificar os dados do Modelo com base nas ações do usuário.
- **Atualizar a Visão**: Solicitar à View que exiba os dados atualizados.

## Fluxo de Dados no MVC

1. **Usuário Interage com a View**: O usuário realiza uma ação na interface.
2. **Ação Enviada para o Controller**: A View envia a ação do usuário para o Controller.
3. **Controller Atualiza o Modelo**: O Controller processa a ação, altera o Modelo conforme necessário.
4. **Modelo Notifica a View**: O Modelo informa a View sobre as mudanças.
5. **View Atualiza a Interface**: A View é atualizada para refletir as mudanças no Modelo.

## Vantagens do MVC

- **Separação de Preocupações**: Isola a lógica de negócios da interface do usuário e da entrada do usuário.
- **Facilidade de Manutenção**: Facilita a manutenção e a escalabilidade do código.
- **Reusabilidade**: Permite a reutilização dos componentes Model e View.

## Conclusão

O padrão MVC promove uma arquitetura de software bem estruturada e flexível, ideal para aplicações complexas. Ao separar claramente as responsabilidades entre Modelo, Visão e Controlador, ele ajuda a manter o código organizado e a facilitar a manutenção e evolução do sistema.

