# ADO2

Tendo em vista o mundo inicial mais embaixo, crie um cenário com a seguinte situação:

* Todos os agentes precisam se mover, necessariamente
* Todos os agentes precisam usar métodos de detecção `detectedWhatIsInFront`.
* Os agentes não podem passar sobre os artefatos
* Cada agente precisa ter uma estratégia única

```
const numberOfInteraction = 500
const timeOfOneInteraction = 0.1

target("350px","10px")

artefact("artefact1", "50px", "300px")
artefact("artefact2", "150px", "300px")
artefact("artefact3", "150px", "300px")
artefact("artefact4", "250px", "300px")
artefact("artefact5", "350px", "300px")
artefact("artefact6", "450px", "300px")
artefact("artefact7", "550px", "300px")
artefact("artefact8", "650px", "300px")

artefact("artefact101", "25px",  "250px")
artefact("artefact201", "125px", "250px")
artefact("artefact301", "125px", "250px")
artefact("artefact401", "225px", "250px")
artefact("artefact501", "325px", "250px")
artefact("artefact601", "425px", "250px")
artefact("artefact701", "525px", "250px")
artefact("artefact801", "625px", "250px")


artefact("artefact9", "50px", "200px")
artefact("artefact10", "150px","200px")
artefact("artefact11", "250px","200px")
artefact("artefact12", "350px","200px")
artefact("artefact13", "450px","200px")
artefact("artefact14", "550px","200px")
artefact("artefact15", "650px","200px")


artefact("artefact16", "50px",  "100px")
artefact("artefact17", "150px", "100px")
artefact("artefact18", "250px", "100px")
artefact("artefact19", "350px", "100px")
artefact("artefact20", "450px", "100px")
artefact("artefact21", "550px", "100px")
artefact("artefact22", "650px", "100px")

artefact("artefact23", "50px", "400px")
artefact("artefact24", "150px","400px")
artefact("artefact25", "250px","400px")
artefact("artefact26", "350px","400px")
artefact("artefact27", "450px","400px")
artefact("artefact28", "550px","400px")
artefact("artefact29", "650px","400px")


artefact("artefact0901",  "25px", "450px")
artefact("artefact1001", "125px","450px")
artefact("artefact1101", "225px","450px")
artefact("artefact1201", "325px","450px")
artefact("artefact1301", "425px","450px")
artefact("artefact1401", "525px","450px")
artefact("artefact1501", "625px","450px")


artefact("artefact30", "50px", "500px")
artefact("artefact31", "150px","500px")
artefact("artefact32", "250px","500px")
artefact("artefact33", "350px","500px")
artefact("artefact34", "450px","500px")
artefact("artefact35", "550px","500px")
artefact("artefact36", "650px","500px")

const agentZero = new Agent("agentZero","50px", "600px", "#cc4e4e")
const agentOne = new Agent("agentOne", "150px", "600px", "#8b9150")
const agentTwo = new Agent("agentOne", "250px", "600px", "#1f919f")
const agentTree = new Agent("agentTree","350px", "600px","#1b8b1f")
const agentFour = new Agent("agentFour","450px", "600px","#2c1208")
const agentFive = new Agent("agentFive","550px", "600px","#3e2909")
const agentSixt = new Agent("agentSixt","650px", "600px","#450707")

function main () {

}

```