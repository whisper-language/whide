
{/*  */}
import { $ } from "@sciter";

export class CodeEditor extends Element {

    componentDidMount() {
     
    }
    
    render(props,kids){
        return  <codeEditor.flex.horizontal styleset={__DIR__ + "CodeEditor.css#CodeEditor"}>
            <plaintext >  11  </plaintext>
        </codeEditor>
    }
}