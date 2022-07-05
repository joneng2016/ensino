export default class Process  {

    private static instance:Process;
    private inputSentence:string;
    private finalText:string;

    private constructor() {
        this.inputSentence = ""
        this.finalText = ""
    }

    public static start() {
        if (!Process.instance) {
            Process.instance = new Process()
        }

        return Process.instance
    }
    
    public execute() {
        try {
            this.buildTheText()
        } catch (error) {
            console.error(error)
        }
    }

    public setSentence(inputSentence:string) {
        this.inputSentence = inputSentence;
    }

    public getFinalText() {
        return this.finalText
    }

    private buildTheText() {
        this.finalText = "Meu nome é  " + this.inputSentence;
    }
}