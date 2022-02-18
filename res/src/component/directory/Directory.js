import refreshFolder from "../../utils/fileutils";
import { File } from "../file/File";

export class Directory extends Element {
    props
    unfold
    ctx
    this(props,kids) {
        this.props=props;
        this.unfold=this.props.data.unfold;
        this.ctx=this.props.ctx;
    }
    ["on click at li"]( evt, i ) {
        var action= i.getAttribute("action")
        if(action=="widget"){
          var widget= i.getAttribute("widget")
          var wnd = new Window({ 
              type:Window.DIALOG_WINDOW,
              url   : __DIR__ + "../widget/"+widget+"/"+widget+".htm", 
              state : Window.WINDOW_SHOWN,
          });
        }
        if(action=="msg"){
          let msg=i.getAttribute("msg")
          let payload=i.getAttribute("payload");
          this.ctx.ev.fire("menu",msg, payload)
        }
        return true;
    }

    ["on contextmenu at div.directory"]( evt, source ) {
        evt.source = Element.create(<menu.context>
            <li widget="file" >新建文件</li>
            <li widget="folder" >新建文件夹</li>
            <li widget="rename" >重命名</li>
            <hr></hr>
            <li action="msg" msg="open_explorer" payload={this.props.path} >在资源管理器打开</li>
            <li action="msg" msg="open_term"  payload={this.props.path} >在终端打开</li>
            <hr></hr>
            <li widget="delete" >删除</li>
          </menu>);
        return true;
    } 

    ["on click at div.directory"]( event, source ) {
        if(this.props.data.folder.length==0){
            console.log(this.ctx);
            refreshFolder(this.props.path+"\\"+this.props.data.name,this.props.data.folder,this.ctx)
            this.componentUpdate({ unfold:!this.unfold ,props:this.props});
        }else{
            this.componentUpdate({ unfold:!this.unfold});
        }
       return true;
    }

   

    render() {
        var sub=this.unfold?<div.folder path={this.props.data.name}>
            {this.props.data.folder.map((fileitem,i) =>
            fileitem.isDir?<Directory data={fileitem} path={this.props.path+"\\"+this.props.data.name} ctx={this.ctx}></Directory>:
            <File data={fileitem} path={this.props.path+"\\"+this.props.data.name+"\\"+fileitem.name} ctx={this.ctx}></File>
        )}
        </div>:"";
        return  <div>
                    <div.directory.flex.horizontal path={this.props.path+"\\"+this.props.data.name}> 
                        {this.unfold?<i.fi.fi-angle-down></i>:<i.fi.fi-angle-right></i>} <i.fi.fi-folder></i>  
                        <span.name>{this.props.data.name||"root"}</span>
                    </div>
                     {sub}
                </div>
        ;
    }
}