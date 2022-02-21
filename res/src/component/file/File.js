export class File  extends Element {
    ctx;
    props;
    this(props,kids) {
        this.props=props;
        this.ctx=props.ctx;
    }


    ["on click at li"]( evt, i ) {
        var action= i.getAttribute("action")
        if(action=="widget"){
          var widget= i.getAttribute("widget")
          var wnd = new Window({ 
              type:Window.DIALOG_WINDOW,
              url   : __DIR__ + "../widget/"+widget+"/"+widget+".htm", 
              state : Window.WINDOW_SHOWN,
          });
        }
        if(action=="msg"){
          let msg=i.getAttribute("msg")
          let payload=i.getAttribute("payload");
          this.ctx.ev.fire("file",msg, payload)
        }
        return true;
    }

    ["on contextmenu at .file"]( evt, i ) {
        evt.source = Element.create(<menu.context>
            <li widget="file" >新建文件</li>
            <li widget="folder" >新建文件夹</li>
            <li widget="rename" >重命名</li>
            <hr></hr>
            <li action="msg" msg="open_explorer" payload={this.props.path} >在资源管理器打开</li>
            {/* <li action="msg" msg="open_term"  payload={this.props.path} >在终端打开</li> */}
            <hr></hr>
            <li action="msg" msg="copy_to_clipboard"  payload={this.props.path} >复制绝对路径</li>
            {/* <li action="msg" msg="copy_to_clipboard"  payload={this.props.path} >复制路劲</li> */}
            <hr></hr>
            <li widget="delete" >删除</li>
          </menu>);
        return true;
     }

    render(){
        return <div.file.flex.horizontal path={this.props.path}>
                    <i.fi.fi-file style={"background-image: url("+this.props.data?.resolve?.icon||+")"}></i>
                    <span.name>{this.props.data.name}</span>
                </div>
    }
}