export class Directory extends Element {
    props
    unfold
    this(props,kids) {
        this.props=props;
        this.unfold=this.props.data.unfold;
    }


    ["on contextmenu at div.directory"]( evt, source ) {
        evt.source = Element.create(<menu.context>
            <li>新建文件</li>
            <li>新建文件夹</li>
            <li>在文件夹内查找</li>
            <hr/>
            <li>重命名</li>
            <li>剪切</li>
            <li>复制</li>
            <li>粘贴</li>
            <li>删除</li>
            <hr/>
            <li>maven
                <menu>
                  <li.command >clean</li>
                  <li.command >test</li>
                  <li.command >package</li>
                  <li.command >deply</li>
                </menu>
            </li>
            <li>git
                <menu>
                  <li.command name="new-file">pull</li>
                  <li.command name="new-file">push</li>
                  <li.command name="new-file">log</li>
                  <li.command name="new-file">merge</li>
                </menu>
            </li>
          </menu>);
        return true;
    }
    ["on contextmenu at div.file"]( evt, source ) {
        evt.source = Element.create(<menu.context>
            <li>新建文件</li>
            <li>新建文件夹</li>
            <li>在文件内查找</li>
            <hr/>
            <li>重命名</li>
            <li>剪切</li>
            <li>复制</li>
            <li>粘贴</li>
            <li>删除</li>
            <hr/>
          </menu>);
        return true;
     }
 

    ["on click at div.directory"]( event, source ) {
       this.componentUpdate({ unfold:!this.unfold });
       return true;
    }

    render() {
        var sub=this.unfold?<div.folder path={this.props.data.name}>
            {this.props.data.folder.map((fileitem,i) =>
            fileitem.isDir?<Directory data={fileitem} path={this.props.path+"/"+this.props.data.name}></Directory>:
            <div.file path={this.props.path+"/"+this.props.data.name+"/"+fileitem.name}><i.fas.fa-file></i>{fileitem.name}</div>
        )}
        </div>:"";
        return  <div>
                    <div.directory path={this.props.path+"/"+this.props.data.name}> {this.unfold?<i.fas.fa-angle-down></i>:<i.fas.fa-angle-right></i>} <i.fas.fa-folder></i>  {this.props.data.name||"root"}</div>
                     {sub}
                </div>
        ;
    }
}