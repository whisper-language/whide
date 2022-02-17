import refreshFolder from "../../utils/fileutils";
import { File } from "../file/File";

export class Directory extends Element {
    props
    unfold
    this(props,kids) {
        this.props=props;
        this.unfold=this.props.data.unfold;
    }
    ["on click at li"]( evt, i ) {
        var widget= i.getAttribute("widget")
        var wnd = new Window({ 
            type:Window.DIALOG_WINDOW,
            url   : __DIR__ + "../../widget/"+widget+"/"+widget+".htm", 
            state : Window.WINDOW_SHOWN,
            caption :i.innerText,
            parameters :this.this.props,
        });
        return true;
    }

    ["on contextmenu at div.directory"]( evt, source ) {
        evt.source = Element.create(<menu.context>
            <li widget="file" >新建文件</li>
            <li widget="folder" >新建文件夹</li>
            <li widget="rename" >重命名</li>
            <hr></hr>
            <li widget="delete" >删除</li>
          </menu>);
        return true;
    }
    ["on contextmenu at div.file"]( evt, source ) {
        evt.source = Element.create(<menu.context>
            <li widget="file" >新建文件...</li>
            <li widget="folder" >新建文件夹</li>
            <li widget="rename" >重命名</li>
            <hr></hr>
            <li widget="delete" >删除</li>
          </menu>);
        return true;
     }
 

    ["on click at div.directory"]( event, source ) {
        if(this.props.data.folder.length==0){
            refreshFolder(this.props.path+"\\"+this.props.data.name,this.props.data.folder)
            this.componentUpdate({ unfold:!this.unfold ,props:this.props});
        }else{
            this.componentUpdate({ unfold:!this.unfold});
        }
       return true;
    }

   

    render() {
        var sub=this.unfold?<div.folder path={this.props.data.name}>
            {this.props.data.folder.map((fileitem,i) =>
            fileitem.isDir?<Directory data={fileitem} path={this.props.path+"\\"+this.props.data.name}></Directory>:
            <File data={fileitem} path={this.props.path+"\\"+this.props.data.name+"\\"+fileitem.name}></File>
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