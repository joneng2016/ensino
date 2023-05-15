
const numberOfInteraction = 500
const timeOfOneInteraction = 0.1

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

function main () {

}
