import {Tab} from "./component/tab/tab.js";
import { TabItem } from "./component/tab/tabItem.js";
import { FileTree } from "./views/FileTree.js";
import { Menu } from "./views/Menu.js";
import { Menu2 } from "./views/Menu2.js";
import { Toolbar } from "./views/Toolbar.js";
import { CodeEditor } from "./views/codeEditor/CodeEditor.js";
import ev from "./utils/eventbus.js";
import { Statebar } from "./views/Statebar.js";
import { Search } from "./views/search/Search.js";
import { Theme } from "./views/theme/theme.js";

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
                folder:[
                    {
                        isDir:false,
                        name:"doc.md"
                    },
                ]
            },
            {
                unfold:false,
                isDir:true,
                name:"case",
                folder:[
                    {
                        isDir:false,
                        name:"main.c"
                    },
                    {
                        isDir:false,
                        name:"main.js"
                    },
                    {
                        isDir:false,
                        name:"main.cpp"
                    },
                    {
                        isDir:false,
                        name:"main.php"
                    },
                    {
                        isDir:false,
                        name:"main.java"
                    },
                    {
                        isDir:false,
                        name:"main.py"
                    },
                    {
                        isDir:false,
                        name:"main.r"
                    },
                    {
                        isDir:false,
                        name:"main.go"
                    },
                    {
                        isDir:false,
                        name:"main.html"
                    },
                    {
                        isDir:false,
                        name:"main.css"
                    },
                    {
                        isDir:false,
                        name:"main.sh"
                    },
                    {
                        isDir:false,
                        name:"main.bat"
                    },
                ]
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
                name:"test1.txt"
            },
        ]
    };

    render(){
       return  <workspace>
            <top>
                <div.flex.horizontal>
                    <Menu></Menu>
                    <Search  ctx={this.ctx}></Search>
                    <caption.grow role="window-caption">Whide-IDE 2022-01-17</caption>
                    {/* <Theme ctx={this.ctx}></Theme> */}
                    <Menu2.shark.grow ctx={this.ctx}></Menu2>
                </div>
                <Toolbar></Toolbar>
            </top>
            <frameset rows="2*,1*">
            <center.horizontal>
            <frameset cols="1*,4*">
            <left.grow>
                <Tab>
                    <TabItem title="目录">
                        <FileTree ctx={this.ctx}></FileTree>
                    </TabItem>
                    {/* <TabItem title="版本">版本控制</TabItem> */}
                </Tab>
            </left>
            <splitter/>
            <center.grow.editor>
                <Tab>
                    <TabItem title="main.py">
                        <CodeEditor ctx={this.ctx} ></CodeEditor>
                    </TabItem>
                </Tab>
            
            </center>
            <splitter/>
            {/* <right>
                <Tab>
                    <TabItem title="属性">内容1</TabItem>
                    <TabItem title="事件">内容2</TabItem>
                </Tab>
            </right> */}
            </frameset> 
            </center>
            <splitter/>
            <bottom.flex.vertical>
                    <Tab.grow>
                        <TabItem title="日志">日志</TabItem>
                        <TabItem title="控制台">控制台</TabItem>
                    </Tab>
                    <Statebar ctx={this.ctx}></Statebar>
            </bottom>
            </frameset> 
     </workspace>
    }
}