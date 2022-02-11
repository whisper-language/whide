import { LanguageSelector } from "./language/LanguageSelector";
import { ThemeSelector } from "./theme/ThemeSelector";
import { LayoutSelector } from "./layout/LayoutSelector";

export class Editor extends Element {

    render(){
        return  <div>
                    <div.section>
                        主题:<ThemeSelector></ThemeSelector>
                        <button.action>应用</button>
                        <button.action>新建</button>
                    </div>
                    <div.section>
                        语言:<LanguageSelector></LanguageSelector>
                        <button.action>应用</button>
                        <button.action>新建</button>
                    </div>
                    <div.section>
                        布局:<LayoutSelector></LayoutSelector>
                        <button.action>应用</button>
                        <button.action>新建</button>
                    </div>
                </div>
    }
}