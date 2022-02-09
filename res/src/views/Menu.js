import { MenuItem } from "../component/menu/menuItem";
import { MenuBar} from "../component/menu/menuBar";

export class Menu extends Element 
{
  componentDidMount() {
    
  }
  render(props,kids) {
    return <MenuBar>
                <MenuItem name="文件"></MenuItem>
                <MenuItem name="编辑"></MenuItem>
                <MenuItem name="视图"></MenuItem>
                <MenuItem name="项目"></MenuItem>
                <MenuItem name="构建"></MenuItem>
                <MenuItem name="帮助"></MenuItem>
            </MenuBar>
  }
}