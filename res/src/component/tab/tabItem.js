export class TabItem extends Element 
{
  componentDidMount() {
    
  }
  render(props,kids) {
    return <tabitem styleset={__DIR__ + "tab.css#tabitem"}>{kids}</tabitem>
  }
}