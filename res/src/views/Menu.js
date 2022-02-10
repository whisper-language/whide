

export class Menu extends Element {

  this(props,kids) {
  
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
                <li.command name="edit-copy">文件浏览器</li>
                <li.command name="edit-paste">工具栏</li>
                <li.command name="edit-paste">状态栏</li>
            </menu>
          </li>
          <li>工具
            <menu>
                <li.command name="edit-copy">设置</li>
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