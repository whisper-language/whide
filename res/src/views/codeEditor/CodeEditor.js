
{/*  */}
import { $ } from "@sciter";
import * as sys from "@sys";
import * as srt from "@sciter";

export class CodeEditor extends Element {
    ctx;

    this(props,kids){
        this.ctx=props.ctx;
        var _this=this;
        console.log("渲染")
        sys.fs.open(this.ctx.path, "r+", 0o666).then(f=>{
            let stat=sys.fs.$stat(this.ctx.path);
            f.read(Number(stat.st_size)).then(c=>{
                console.log("更新文件内容"+srt.decode(c));
                var x=<text>{srt.decode(c)}</text>;
                srt.$("plaintext").innerText=srt.decode(c)
                _this.patch(_this.render());
            })
        })
    }

    render(){
        return  <div styleset={__DIR__ + "CodeEditor.css#CodeEditor"}>
            <plaintext></plaintext>
        </div>
    }
}