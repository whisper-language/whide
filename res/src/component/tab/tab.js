export class Tab extends Element 
{  
    select=0;
    kids;
    this(props,kids) {
        this.kids=kids;
    }

    ["on click at li.item"](evt,item) { 
        this.componentUpdate({ select:item.getAttribute("data") });
    }
    //渲染
    render() {
        var items=this.kids.map((tabitem,i) =>
            this.select==i?<li.item.select data={i} >{tabitem[1].title}</li>:<li.item data={i} >{tabitem[1].title}</li>
        );
        return  <tab styleset={__DIR__ + "tab.css#tab"}>
                    <div.title.horizontal>{items}</div>
                    <content>{this.kids[this.select]}</content>
                </tab>
    }
}