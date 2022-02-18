import * as env  from "@env"
import * as sys from "@sys";
import * as srt from "@sciter";

export class Boot {
    mainfile_path="";
    mainfile={};
    ctx;
    init(ctx){
        this.ctx=ctx;
        console.log("初始化工作区");
        this.ctx.ev.on("boot","workspace_persistence",(ctx)=>{
            sys.fs.open(this.mainfile_path,"w+").then(f=>{
                console.log("写入文件"+this.mainfile_path);
                f.$write(JSON.stringify(this.ctx));
                f.close();
            })
        })


        this.ctx.ev.on("boot","open_explorer",(ctx)=>{
            console.log("在资源管理器打开"+"/root,"+ctx)
            env.exec("explorer","/root,"+ctx.replaceAll("/","\\"))
        })

        this.ctx.ev.on("boot","workspace_new",(payload)=>{
            //新建工作目录
            var selectFolder=Window.this.selectFolder({
                caption:"新建项目目录"
            });
            console.log("打开目录"+selectFolder.split("//")[1]); 
            this.ctx.rootpath=selectFolder.split("//")[1];
            this.ctx.ev.fire("golbal","workspace_persistence", this.ctx.rootpath)
            this.ctx.ev.fire("boot","workspace_init",this.ctx)
        })

        this.ctx.ev.on("boot","workspace_change",(payload)=>{
            //切换工作沐浴露
            this.ctx.rootpath=payload;
            this.ctx.ev.fire("golbal","workspace_persistence", this.ctx.rootpath)
            this.ctx.ev.fire("boot","workspace_init",this.ctx)
        })


        this.initworkspace();
    }
    initworkspace() {
        var home=env.variable("whide_home");
        if(home==""){
            if(env.PLATFORM=="Windows"){
                let appdata=env.variable("APPDATA");
                home=appdata+"\\whide"
                sys.fs.$mkdir(home);
            }
        }
        this.mainfile_path=home+"\\index.json"
       
        sys.fs.open(this.mainfile_path,"a+").then(f=>{
            console.log(f);
            f.stat().then(s=>{
                    let filesize=Number(s.st_size)
                    f.read(filesize).then(c=>{
                        console.log("初始化读取"+filesize);
                        if(Number(filesize)==0){
                            var selectFolder=Window.this.selectFolder({
                                caption:"选择项目目录"
                            });
                            console.log("打开目录"+selectFolder.split("//")[1]); 
                            this.ctx.rootpath=selectFolder.split("//")[1];
                            this.ctx.ev.fire("golbal","workspace_persistence", this.ctx.rootpath)
                        }else{
                            let main=JSON.parse(srt.decode(c))
                            this.ctx.rootpath=main.rootpath;
                        }
                        this.ctx.ev.fire("boot","workspace_init",this.ctx)
                    })
            })
        })
    }
}