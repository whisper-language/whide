import * as sys from "@sys";

function refreshFolder(path,node,ctx){
    console.log("path:",path);
    let list =sys.fs.$readdir(path)
    //TODO 排序
   
    let dirlist=[];
    let filelist=[];
    
    for(var i of list){
        if(i.type==1){
            let seg=i.name.split(".");
            var ext= seg[seg.length-1];
            let resolve=ctx.file_resolve.mapping[ext];
            if(!resolve){
                resolve=ctx.file_resolve.mapping['txt']
            }
            filelist.push({
                ...i,
                ...{
                    resolve:resolve
                }
            });
        }else{
            dirlist.push(i);
        }
    }

    let sortlist=[...dirlist,...filelist];
    for(var i of sortlist){
        node.push({
            isDir:i.type==2,
            unfold:false,
            name:i.name,
            resolve:i?.resolve,
            folder:[]
        })
    }
    console.log(node);
}


export default refreshFolder;