export class Statebar extends Element 
{
  ctx;
  msg="";
  this(props,kids) {
      this.ctx=props.ctx;
      this.ctx.ev.on("statebar","notice",(payload)=>{
        this.componentUpdate({ msg:payload });
      })
  }
  render(props,kids) {
    return <toolbar styleset={__DIR__ + "Statebar.css#Statebar"}>
        <div.item>
            {this.msg}
        </div>
    </toolbar>
  }
}