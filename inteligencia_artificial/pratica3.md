# Prática 3

Faça com que o agente chegue em target com o seguinte universo inicial. O agente não pode passar sobre os artefatos. Ele pode detectar o artefato por meio do retorno da seguinte função
```
detectedWhatIsInFront
```


```
const numberOfInteraction = 500
const timeOfOneInteraction = 0.1


target("350px","10px")

artefact("artefactOne", "350px", "300px")
artefact("artefactOne", "150px", "300px")
artefact("artefactOne", "550px", "300px")

const agent = new Agent("agentOne","0px", "600px")
...
```
