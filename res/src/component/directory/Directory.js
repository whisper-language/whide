import refreshFolder from "../../utils/fileutils";

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
          </menu>);
        return true;
    }
    ["on contextmenu at div.file"]( evt, source ) {
        evt.source = Element.create(<menu.context>
            <li widget="file" >新建文件...</li>
            <li widget="folder" >新建文件夹</li>
            <li widget="rename" >重命名</li>
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
            fileitem.isDir?<Directory data={fileitem} path={this.props.path+"\\"+this.props.data.name} ></Directory>:
            <div.file path={this.props.path+"\\"+this.props.data.name+"\\"+fileitem.name}><i.fas.fa-file></i>{fileitem.name}</div>
        )}
        </div>:"";
        return  <div>
                    <div.directory path={this.props.path+"\\"+this.props.data.name}> {this.unfold?<i.fas.fa-angle-down></i>:<i.fas.fa-angle-right></i>} <i.fas.fa-folder></i>  {this.props.data.name||"root"}</div>
                     {sub}
                </div>
        ;
    }
}