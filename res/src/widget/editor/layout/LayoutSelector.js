export class LayoutSelector extends Element {
    ctx;

    this(props,kids) {
        this.ctx=props.ctx;
    }

    ["on change at select"](evt,item) { 
        console.log("修改主题")
        this.ctx.ev.fire("theme","notice","文件:"+item.value)
    }

    render(){
        return  <language styleset={__DIR__ + "LayoutSelector.css#LayoutSelector"} >
                    <select>
                        <option  selected value="default">默认</option>
                    </select>
                </language>
    }
}