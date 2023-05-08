# Prática 2

Faça o clone do projeto - https://github.com/joneng2016/multi-agent-jshtml

Dentro do arquivo main, defina o estado inicial do agente e seu respectivo mundo na seguinte estrutura

```
...
const timeOfOneInteraction = 0.1

target("350px","10px")
// artefact("artefactOne", "350px", "300px")

const agent = new Agent("agentOne","0px", "600px")

function main () {
...
```

Dentro da função main, usando os métodos do agente crie uma estratégia para que ele chege em "target", que é o círculo vermelho na tela
