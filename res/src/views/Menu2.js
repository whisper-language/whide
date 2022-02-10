export class Menu2 extends Element 
{
  ctx;

  this(props,kids) {
      this.ctx=props.ctx;
  }

  ["on click at close"](evt,item) { 
    this.ctx.ev.fire("menu2","notice","退出")
    Window.this.close();
  }

  ["on mousemove at close"](evt,item) { 
    this.ctx.ev.fire("menu2","notice","退出应用程序")
  }

  render(props,kids) {
    return <div styleset={__DIR__ + "Menu2.css#menu2"}>
                <i.fas.fa-window-minimize></i>
                <i.fas.fa-window-maximize></i>
                <i.fas.fa-window-close></i>
            </div>
  }
}