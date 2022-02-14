import { Tab } from "../component/tab/tab";
import { TabItem } from "../component/tab/tabItem";
import { CodeEditor } from "./codeEditor/CodeEditor";

export class EditorView extends Element {
    ctx;
    openlist=[
        
    ];
    
    this(props,kids){
        this.ctx=props.ctx;
        this.ctx.ev.on("editorview","editor",(payload)=>{
           console.log("打开文件"+payload)
           var f=payload.split("/");
           this.openlist.push({
               title:f[f.length-1],
               path:payload
           })
           this.patch(this.render())
        })
    }

    render(){
        var s=this.openlist.map((s,i)=><TabItem title={s.title}><CodeEditor ctx={s} /></TabItem>);
        console.log("渲染")
        return  <editorView styleset={__DIR__ + "EditorView.css#EditorView"} ><Tab>{s}</Tab></editorView>;
    }
}