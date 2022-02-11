
{/*  */}
import { $ } from "@sciter";

export class CodeEditor extends Element {

    componentDidMount() {
     
    }
    


    render(props,kids){
        return  <plaintext styleset={__DIR__ + "CodeEditor.css#CodeEditor"}>
        <text>这是文本编辑区域</text>
        <text>这是文本编辑区域2</text>
      </plaintext>;
    }
}