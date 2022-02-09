import { MenuItem } from "./menuItem";

export class MenuBar extends Element 
{
  render(props,kids) {
    var items=kids.map((tabitem,i) =>
            <li.item data={i} >{tabitem[1].name}(A)</li>
    );
    return <menu.horizontal styleset={__DIR__ + "menu.css#menu"}>{items}</menu>
  }
}