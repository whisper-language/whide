export class Directory extends Element {


    render(props,kids) {
        var sub=props.data.unfold?<div.folder path={props.data.name}>
            {props.data.folder.map((fileitem,i) =>
   
            fileitem.isDir?<Directory data={fileitem} path={props.path+"/"+props.data.name}></Directory>:
            <div.file path={props.path+"/"+props.data.name+"/"+fileitem.name}>{fileitem.name}</div>
        )}
        </div>:"";
        return  <div>
                    <div.directory path={props.path+"/"+props.data.name}>{props.data.name||"root"}</div>
                    {sub}
                </div>
        ;
    }
}