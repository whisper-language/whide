export class Theme extends Element {
    ctx;

    this(props,kids) {
        this.ctx=props.ctx;
    }

    ["on change at select"](evt,item) { 
        // console.log("修改主题")
        this.ctx.ev.fire("theme","notice","文件:"+item.value)
    }
    
    render(){
        return <theme styleset={__DIR__ + "Theme.css#Theme"} >
                <select>
                    <option value="default" selected value="default-unisex/theme.css">Sciter Unisex, default</option>
                    <option value="flat" value="windows-flat/theme.css">Windows Flat</option>
                    <option value="material" value="android-material/theme.css">Android/Material</option>
                </select>
        </theme>
    }
}