import * as sys from "@sys";

function refreshFolder(path,node){
    console.log("path:",path);
    let list =sys.fs.$readdir(path)
    //TODO 排序
   
    let dirlist=[];
    let filelist=[];
    for(var i of list){
        if(i.type==1){
            dirlist.push(i);
        }else{
            filelist.push(i);
        }
    }
    let sortlist=[...filelist,...dirlist];
    for(var i of sortlist){
        node.push({
            isDir:i.type==2,
            unfold:false,
            name:i.name,
            folder:[]
        })
    }
}


export default refreshFolder;