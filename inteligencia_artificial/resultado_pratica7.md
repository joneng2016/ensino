```
const numberOfInteraction = 500
const timeOfOneInteraction = 0.01

target("350px","10px")

artefact("artefact1", "650px", "300px")
artefact("artefact1", "600px", "300px")
artefact("artefact1", "550px", "300px")
artefact("artefact1", "500px", "300px")
artefact("artefact2", "450px", "300px")
artefact("artefact2", "400px", "300px")
artefact("artefact3", "350px", "300px")
artefact("artefact4", "250px", "300px")
artefact("artefact5", "200px", "300px")
artefact("artefact6", "150px", "300px")
artefact("artefact7", "100px", "300px")
artefact("artefact8", "50px", "300px")
artefact("artefact8", "0px", "300px")

const agent1 = new Agent("agentOne","350px", "600px","green")
const agent2 = new Agent("agentTwo","150px", "600px","blue")

let startAgentOneToWalk = false
let thePositionXToWalk = ''
function main () {
    const isSomeThingInTheFront = agent1.detectedWhatIsInFront()

    const conditionToWalkToSide = isSomeThingInTheFront && 
                                    Array.isArray(isSomeThingInTheFront) &&
                                    isSomeThingInTheFront.length > 0

    if (conditionToWalkToSide) {
        agent1.lessFivePxX()
        agent1.sendMessage(agent1.getMyPositionX(),"agentTwo")
    } else {
        agent1.plusFivePxY()
    }

    const msgsToAgentTwo = [...agent2.watchMyMessages()]

    if (msgsToAgentTwo.length > 0) {
        startAgentOneToWalk = true
        thePositionXToWalk = msgsToAgentTwo.map(e => e.valueOfMessage)[0]
    }

    if (startAgentOneToWalk) {
      if (agent2.getMyPositionX() <= thePositionXToWalk) {
        agent2.plusFivePxX()
      } else {
        agent2.plusFivePxY()
      }
    }

}
```
