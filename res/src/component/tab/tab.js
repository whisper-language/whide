export class Tab extends Element 
{  
    select=0;

    canClose=false;
    
    closeHandler=(idx)=>{};

    kids;
    
    this(props,kids) {
        this.kids=kids;
        this.select=props.active||0;
        this.canClose=props.canClose;
        this.closeHandler=props.closeHandler||((idx)=>{});
    }

    ["on click at closeHandler"](evt,item) { 
       return this.closeHandler(item.getAttribute("idx"));
    }

    ["on click at li.item"](evt,item) { 
        this.componentUpdate({ select:item.getAttribute("data") });
    }
    //渲染
    render(props,kids) {
        this.select=props?.active||this.select;
        var items=this.kids[0].map((tabitem,i) =>{
            let h=<div>{tabitem[1].title}{this.canClose?<closeHandler.fas.fa-window-close idx={i}></closeHandler>:<></>}</div>;
            return this.select==i?<li.item.select data={i} >{h}</li>:<li.item data={i} >{h}</li>
            });
        var content=this.kids[0][this.select];
        return  <tab styleset={__DIR__ + "tab.css#tab"}>
                    <div.title.horizontal>{items}</div>
                    <content>{content}</content>
        </tab>
    }
}