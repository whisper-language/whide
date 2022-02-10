export class Toolbar extends Element 
{
  componentDidMount() {
    
  }
  render(props,kids) {
    return <toolbar.flex styleset={__DIR__ + "Toolbar.css#Toolbar"}>
        <label.item>环境:</label>
        <select.item title="numbers">
          <option>dev</option>
          <option>stg</option>
          <option>prod</option>
        </select>
        <div.item>
            构建
        </div>
        <div.item>
            运行
        </div>
        <div.item>
            打包
        </div>
        <div.item>
            部署
        </div>
    </toolbar>
  }
}