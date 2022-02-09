import {Tab} from "../component/tab/tab.js";
import { TabItem } from "../component/tab/tabItem.js";
import { FileTree } from "../views/FileTree.js";
import { Menu } from "../views/Menu.js";
import { CodeEditor } from "../views/CodeEditor.js";

export class Application extends Element {
    render(){
       return  <workspace>
            <top>
                <Menu></Menu>
                <toolbar>工具栏</toolbar>
            </top>
            <center.horizontal>
            <left.grow>
                <Tab>
                    <TabItem title="目录">文件数</TabItem>
                    <TabItem title="版本">版本控制</TabItem>
                </Tab>
            </left>
            <center.grow.editor>
                <Tab>
                    <TabItem title="file1.txt">
                        <CodeEditor></CodeEditor>
                    </TabItem>
                    <TabItem title="file2.txt">file2</TabItem>
                </Tab>
            </center>
            <right>
                <Tab>
                    <TabItem title="属性">内容1</TabItem>
                    <TabItem title="事件">内容2</TabItem>
                </Tab>
            </right>
            </center>
            <bottom.flex.vertical>
                    <Tab.grow>
                        <TabItem title="属性">内容1</TabItem>
                        <TabItem title="事件">内容2</TabItem>
                    </Tab>
                    <statusbar>状态栏1</statusbar>
            </bottom>
     </workspace>
    }
}