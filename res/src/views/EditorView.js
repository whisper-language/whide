import { Tab } from "../component/tab/tab";
import { TabItem } from "../component/tab/tabItem";
import { CodeEditor } from "./codeEditor/CodeEditor";

export class EditorView extends Element {
    ctx;
    openlist=[];
    openfilemap=new Map();

    activetab=0;
    
    this(props,kids){
        this.ctx=props.ctx;
        this.ctx.ev.on("editorview","editor",(payload)=>{
            if(this.openfilemap.get(payload)){
                this.ctx.ev.fire("editorview","notice","切换到文件"+payload)
                this.activetab=this.openfilemap.get(payload).tabIdx;
                this.patch(this.render())
                return;
            }else{
                this.ctx.ev.fire("editorview","notice","打开文件"+payload)
                var f=payload.split("\\");
                this.openlist.push({
                    title:f[f.length-1],
                    path:payload
                })
                this.openfilemap.set(payload,{
                    "tabIdx":this.openlist.length-1
                });
                this.activetab=this.openlist.length-1;
                this.patch(this.render())
            }
        })
    }

    closeHandler(idx){
       this.openfilemap.delete(this.openlist[idx].path)
       this.openlist=[...this.openlist.slice(0,idx),...this.openlist.slice(idx+1,this.openlist.length)]
       this.patch(this.render())
    }

    render(){
        console.log("渲染===============")
        var s=this.openlist.map((s,i)=><TabItem title={s.title}><CodeEditor ctx={s} /></TabItem>);
        return  <editorView styleset={__DIR__ + "EditorView.css#EditorView"} >
                    <Tab active={this.activetab} canClose={true} closeHandler={(idx)=>this.closeHandler(idx)}>{s}</Tab>
            </editorView>;
    }
}