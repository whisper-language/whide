
{/*  */}
import { $ } from "@sciter";
import * as sys from "@sys";
import * as srt from "@sciter";

export class CodeEditor extends Element {
    ctx;

    this(props,kids){
        this.ctx=props.ctx;
    }

    render(props,kids){
        console.log("读取"+this.ctx.path)


        
        sys.fs.open(this.ctx.path, "r+", 0o666).then(f=>{
            
            //读取文件状态
           f.read(100).then(c=>{
                console.log("读取到内容")
                console.log( c)
                var encodedString = String.fromCharCode.apply(null, c),
                decodedString = decodeURIComponent(escape(encodedString));
                console.log("结果"+decodedString);
           })
        })

        return  <codeEditor.flex.horizontal styleset={__DIR__ + "CodeEditor.css#CodeEditor"}>
            <plaintext >  打开文件 {this.ctx.path}  </plaintext>
        </codeEditor>
    }
}