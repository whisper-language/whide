

export class Menu extends Element {

  this(props,kids) {
  }

  ["on click at .command"](evt,i) {
      var widget= i.getAttribute("widget")
      var wnd = new Window({ 
        url   : __DIR__ + "../widget/"+widget+"/"+widget+".htm", 
        state : Window.WINDOW_SHOWN,
        alignment: 5,
    });
  }

  render() {
      return <ul styleset={__DIR__ + "Menu.css#menu-bar"}>
          <li>文件
              <menu>
                <li.command name="new-file" accesskey="^N">新建文件 <span class="accesskey">Ctrl+N</span></li>
                <li.command name="open-file">打开 …<span class="accesskey">Ctrl+O</span></li>
                <li.command name="save-file">保存 <span class="accesskey">Ctrl+S</span></li>
                <li.command name="save-file-as">另存为 …<span class="accesskey">Ctrl+ALT+S</span></li>
              </menu>
          </li>
          <li>编辑
              <menu>
                <li.command name="edit-copy">复制<span class="accesskey">Ctrl+C</span></li>
                <li.command name="edit-paste">剪切<span class="accesskey">Ctrl+X</span></li>
                <li.command name="edit-paste">粘贴<span class="accesskey">Ctrl+O</span></li>
              </menu>
          </li>
          <li>视图
            <menu>
                <li.command name="view-file">文件浏览器</li>
                <li.command name="view-toolbar">工具栏</li>
                <li.command name="view-statebar">状态栏</li>
            </menu>
          </li>
          <li>设置
            <menu>
                <li.command name="setting-keymapping" widget="filemapping">文件映射...</li>
                <li.command name="setting-keymapping" widget="keymapping">按键映射...</li>
                <li.command name="setting-plugin"     widget="plugin">插件...</li>
                <li.command name="setting-theme"      widget="theme">主题...</li>
                <li.command name="setting-toolbar"      widget="toolbar">工具栏...</li>
            </menu>
          </li>
          <li>帮助
            <menu>
                <li.command name="about">关于</li>
            </menu>
          </li>
      </ul>;
  }

}