const numberOfInteraction = 500
const timeOfOneInteraction = 0.1


target("350px","10px")

artefact("artefactOne", "350px", "300px")
artefact("artefactOne", "150px", "300px")
artefact("artefactOne", "550px", "300px")

const agent = new Agent("agentOne","0px", "600px")


function main () {
    agent.plusFivePxX()
    agent.plusFivePxY() 
    agent.plusFivePxY()

    if (agent.detectedWhatIsInFront().length > 0 && agent.detectedWhatIsInFront().filter(e => e.elementId != "target").length > 0) {        
        agent.plusFivePxX()
        agent.plusFivePxX()
        agent.plusFivePxX()
    } else if (agent.detectedWhatIsInFront().filter(e => e.elementId == "target").length > 0) {
        agent.plusFivePxY()
        agent.plusFivePxX()
    }
}
