export class Menu2 extends Element 
{
  ctx;

  this(props,kids) {
      this.ctx=props.ctx;
  }

  ["on click at minimize"](evt,item) { 
    this.ctx.ev.fire("menu2","notice","最小化")
     Window.this.state = (Window.this.state==Window.WINDOW_MINIMIZED)?Window.WINDOW_SHOWN:Window.WINDOW_MINIMIZED;
  }

  ["on click at maximize"](evt,item) { 
    this.ctx.ev.fire("menu2","notice","最大化")
    Window.this.state = (Window.this.state==Window.WINDOW_MAXIMIZED)?Window.WINDOW_SHOWN:Window.WINDOW_MAXIMIZED;
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
                <minimize.fas.fa-window-minimize role="window-minimize"></minimize>
                <maximize.fas.fa-window-maximize></maximize>
                <close.fas.fa-window-close></close>
            </div>
  }
}