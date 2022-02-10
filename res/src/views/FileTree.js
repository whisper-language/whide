import { Directory } from "../component/directory/Directory";


export class FileTree extends Element {
    
    rootpath=""

    roottree=[]
    
    ctx
    this(props,kids){
        this.ctx=props.ctx;
        this.rootpath=props.ctx.rootpath;
        this.roottree=props.ctx.roottree;
    }

    ["on click at .file"](evt,item) { 
        this.ctx.ev.fire("filetree","notice","文件:"+item.getAttribute("path"))
    }

    ["on click at .directory"](evt,item) { 
        this.ctx.ev.fire("filetree","notice","文件夹:"+item.getAttribute("path"))
    }

    render(){
        return  <filetree styleset={__DIR__ + "FileTree.css#FileTree"} path={this.this.rootpath}>
                    {this.roottree.map((fileitem,i)=>
                        fileitem.isDir?<Directory data={fileitem} path={this.rootpath}></Directory>:<div.file path={this.rootpath+"/"+fileitem.name}><i.fas.fa-file></i>{fileitem.name}</div>
                    )}
            </filetree>
    }
}