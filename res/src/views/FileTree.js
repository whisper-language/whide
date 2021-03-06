import { Directory } from "../component/directory/Directory";


import refreshFolder from "../utils/fileutils";
import * as sys from "@sys";
import { File } from "../component/file/File";

export class FileTree extends Element {


    
    rootpath=""

    roottree=[]
    
    ctx

    this(props,kids){
        this.ctx=props.ctx;
        
        this.ctx.ev.on("filetree","workspace_init",(ctx)=>{
            //TODO 加载项目级别的配置文件
            this.rootpath=ctx.rootpath;
            console.log("初始化")
            this.roottree=[];
            refreshFolder(this.rootpath,this.roottree,this.ctx);
            this.patch(this.render());
        })
    }
   
    ["on click at .file"](evt,item) {
        let filepath=item.getAttribute("path");
        let stat=sys.fs.$stat(filepath);
        this.ctx.ev.fire("filetree","notice","文件:"+item.getAttribute("path")+" 文件大小:"+stat.st_size)
        return true;
    }

    ["on doubleclick at .file"](evt,item) {
        this.ctx.ev.fire("filetree","editor",item.getAttribute("path"))
        return true;
    }

    ["on click at .directory"](evt,item) { 
        this.ctx.ev.fire("filetree","notice","文件夹:"+item.getAttribute("path"))
        return true;
    }

    render(){
        return  <filetree styleset={__DIR__ + "FileTree.css#FileTree"} path={this.rootpath}>
                    {this.roottree.map((fileitem,i)=>
                        fileitem.isDir?
                        <Directory data={fileitem} path={this.rootpath} ctx={this.ctx} ></Directory>:
                        <File data={fileitem} path={this.rootpath+"\\"+fileitem.name} ctx={this.ctx}></File>
                    )}
            </filetree>
    }
}