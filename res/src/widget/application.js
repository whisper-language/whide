import {Tab} from "../component/tab/tab.js";
import { TabItem } from "../component/tab/tabItem.js";
import { FileTree } from "../views/FileTree.js";
import { Menu } from "../views/Menu.js";
import { Toolbar } from "../views/Toolbar.js";
import { CodeEditor } from "../views/CodeEditor.js";
import ev from "../utils/eventbus.js";
import { Statebar } from "../views/Statebar.js";

export class Application extends Element {
    ctx={
        ev,
        rootpath:"c://test",
        roottree:[
            {
                isDir:true,
                unfold:true,
                name:"src",
                folder:[
                    {
                        isDir:false,
                        name:"main.c"
                    },
                    {
                        isDir:false,
                        name:"readme.txt"
                    },
                    {
                        isDir:true,
                        unfold:true,
                        name:"subdir",
                        folder:[
                            {
                                isDir:false,
                                name:"test.c"
                            },
                            {
                                isDir:false,
                                name:"test1.c"
                            }
                        ]
                    }
                ]
            },
            {
                unfold:false,
                isDir:true,
                name:"doc",
                folder:[]
            },
            {
                isDir:false,
                name:"readme.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
            {
                isDir:false,
                name:"test.txt"
            },
        ]
    };
    render(){
       return  <workspace>
            <top>
                <Menu></Menu>
                <Toolbar></Toolbar>
            </top>
            <center.horizontal>
            <left.grow>
                <Tab>
                    <TabItem title="目录">
                        <FileTree ctx={this.ctx}></FileTree>
                    </TabItem>
                    {/* <TabItem title="版本">版本控制</TabItem> */}
                </Tab>
            </left>
            <center.grow.editor>
                <Tab>
                    <TabItem title="file1.txt">
                        <CodeEditor ctx={this.ctx} ></CodeEditor>
                    </TabItem>
                </Tab>
            </center>
            {/* <right>
                <Tab>
                    <TabItem title="属性">内容1</TabItem>
                    <TabItem title="事件">内容2</TabItem>
                </Tab>
            </right> */}
            </center>
            <bottom.flex.vertical>
                    <Tab.grow>
                        <TabItem title="日志">日志</TabItem>
                        <TabItem title="控制台">控制台</TabItem>
                    </Tab>
                    <Statebar ctx={this.ctx}></Statebar>
            </bottom> 
     </workspace>
    }
}