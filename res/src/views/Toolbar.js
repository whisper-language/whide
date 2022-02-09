export class Toolbar extends Element 
{
  componentDidMount() {
    
  }
  render(props,kids) {
    return <toolbar styleset={__DIR__ + "Toolbar.css#Toolbar"}>
        <div.item>
            构建
        </div>
        <div.item>
            运行
        </div>
        <div.item>
            打包
        </div>
    </toolbar>
  }
}