import { render } from '@testing-library/react'
import React from 'react'
import Process from "../../services/Process"

interface IFirstProcessProps {}

interface IFirstProcessState {
    finalText?:string
}

export default class FirstProcess extends React.Component<IFirstProcessProps,IFirstProcessState> {    
    
    private processInfs:Process | undefined;

    constructor(props:IFirstProcessProps) {
        super(props)
        this.setState({
            finalText: ''
        })

        this.processInfs = Process.start()
    
        this.processInfs.setSentence('TypeScript')
        this.processInfs.execute()

        this.state = {
            finalText: this.processInfs.getFinalText()
        }
    }
    
    public render() {
        return <div>
                <h3>Olá, {this.state.finalText}</h3>                
            </div>
    }

}