export class Tab extends Element 
{  
    select=0;

    canClose=false;
    
    closeHandler=(idx)=>{};

    kids;
    //缓存呀  减少渲染
    stores=new Map();

    this(props,kids) {
        this.kids=kids;
        this.select=props.active||0;
        this.canClose=props.canClose;
        this.closeHandler=props.closeHandler||((idx)=>{});
    }

    ["on click at closeHandler"](evt,item) { 
       return this.closeHandler(item.getAttribute("idx"));
    }

    ["on click at span.item"](evt,item) { 
        this.componentUpdate({ select:item.getAttribute("data") });
    }
    //渲染
    render(props,kids) {
        this.select=props?.active||this.select;
        var items=this.kids[0].map((tabitem,i) =>{
            let h=<div.cell.flex.horizontal><span.name>{tabitem[1].title}</span>{this.canClose?<closeHandler.fi.fi-close idx={i}></closeHandler>:<></>}</div>;
            return this.select==i?<span.item.flex.horizontal.select data={i} >{h}</span>:<span.item.flex.horizontal data={i} >{h}</span>
            });
        var content=this.kids[0][this.select];
        return  <tab styleset={__DIR__ + "tab.css#tab"}>
                    <div.title.horizontal>{items}</div>
                    <content>{content}</content>
        </tab>
    }
}