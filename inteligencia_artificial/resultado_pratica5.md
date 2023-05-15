
const numberOfInteraction = 10000
const timeOfOneInteraction = 0.005

target("350px","10px")

artefact("artefact1", "350px", "300px")
artefact("artefact2", "550px", "300px")
artefact("artefact3", "150px", "300px")


artefact("artefact4", "50px", "300px")
artefact("artefact5", "50px", "500px")
artefact("artefact6", "50px", "100px")


artefact("artefact7", "550px", "300px")
artefact("artefact8", "550px", "500px")
artefact("artefact9", "550px", "100px")


artefact("artefact10", "350px", "100px")
artefact("artefact11", "250px", "100px")


artefact("artefact12", "350px", "500px")
artefact("artefact13", "250px", "500px")

artefact("artefact14", "0px", "300px")
artefact("artefact10", "650px", "300px")

const art = new Agent("agentOne",`${600*Math.random()}px`, `${((600-500)*Math.random()) + 550}px`)

let counter = 0

const maxCounter = 700
const halfCounter = 350

function main () {
    const whatIsInFront = art.detectedWhatIsInFront()
 
    if (art.getMyPositionY() > 50) {
        if (whatIsInFront.length > 0) {
            art.plusFivePxX()
        } else {
            art.plusFivePxY()
        }
    } else if (counter < maxCounter) {
        
        if ((counter < halfCounter) && (art.getMyPositionX() <= 630)) {
            art.plusFivePxX()
        } else if((counter == halfCounter)) {
            art.plusFivePxY()
        } else if((counter >= halfCounter + 1) && (art.getMyPositionX() >= 0)) {
            art.lessFivePxX()
        }    

        counter++
    } else {
        counter = 0;
    }
}
