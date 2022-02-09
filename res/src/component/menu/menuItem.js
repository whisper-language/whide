export class MenuItem extends Element 
{
  componentDidMount() {
    
  }
  render(props,kids) {
    return <menuItem styleset={__DIR__ + "menu.css#menuitem"}>{kids}</menuItem>
  }
}