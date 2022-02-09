import {Tab} from "../component/tab/tab.js";

export class Application extends Element {
    render(){
       return  <workspace>
            <top>
            <Tab>22222222222</Tab>
            </top>
            <center.horizontal>
            <left>left</left>
            <center.grow.editor>editor</center>
            <right>right</right>
            </center>
            <bottom>下</bottom>
     </workspace>
    }
}