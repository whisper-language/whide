import { Tab } from "../component/tab/tab";
import { TabItem } from "../component/tab/tabItem";
import { CodeEditor } from "./codeEditor/CodeEditor";

export class EditorView extends Element {
    ctx;
    openlist=[
        
    ];

    pathhash=new Map();
    
    this(props,kids){
        this.ctx=props.ctx;
        this.ctx.ev.on("editorview","editor",(payload)=>{
            // 判断是否存在
            if(this.pathhash.get(payload)){
                console.log("设置为活动状态")
                return
           }else{
               this.pathhash.set(payload,true);
           }
           console.log("打开文件"+payload)
           var f=payload.split("\\");
           this.openlist.push({
               title:f[f.length-1],
               path:payload
           })
           this.patch(this.render())
        })
    }

    render(){
        console.log("渲染===============")
        var s=this.openlist.map((s,i)=><TabItem title={s.title}><CodeEditor ctx={s} /></TabItem>);
        return  <editorView styleset={__DIR__ + "EditorView.css#EditorView"} ><Tab>{s}</Tab></editorView>;
    }
}