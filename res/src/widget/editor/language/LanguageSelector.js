export class LanguageSelector extends Element {
    ctx;

    this(props,kids) {
        this.ctx=props.ctx;
    }

    ["on change at select"](evt,item) { 
        console.log("修改主题")
        this.ctx.ev.fire("theme","notice","文件:"+item.value)
    }

    render(){
        return  <language styleset={__DIR__ + "LanguageSelector.css#LanguageSelector"} >
                    <select>
                        <option  selected value="cn">中文</option>
                        <option  value="en">英文</option>
                        <option  value="jp">日文</option>
                    </select>
                </language>
    }
}