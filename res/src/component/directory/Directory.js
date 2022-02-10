export class Directory extends Element {


    render(props,kids) {
        var sub=props.data.unfold?<div.folder path={props.data.name}>
            {props.data.folder.map((fileitem,i) =>
   
            fileitem.isDir?<Directory data={fileitem} path={props.path+"/"+props.data.name}></Directory>:
            <div.file path={props.path+"/"+props.data.name+"/"+fileitem.name}><i.fas.fa-file></i>{fileitem.name}</div>
        )}
        </div>:"";
        return  <div>
                    <div.directory path={props.path+"/"+props.data.name}> <i.fas.fa-angle-down></i> <i.fas.fa-folder></i>  {props.data.name||"root"}</div>
                     {sub}
                </div>
        ;
    }
}