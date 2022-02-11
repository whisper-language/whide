export class Search extends Element {
    render(){
        return <search styleset={__DIR__ + "Search.css#Search"} >
            <input  placeholder="搜索" />
        </search>
    }
}