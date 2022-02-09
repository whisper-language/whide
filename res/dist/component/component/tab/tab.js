export class Tab extends Element 
{
    tabs=[1,2,3,4]
    render() {
        var items=this.tabs.map((tabitem) =>
            <li>{tabitem}</li>
        );
        return  <div styleset={__DIR__ + "tab.css#tab"}>
                    <div.title>{items}</div>
                    <div>content</div>
                </div>
    }
}