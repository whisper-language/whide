export class Processor extends Element{
    list=[
        {
            name:"text",
        },
        {
            name:"hex",
        },
        {
            name:"c",
        },
        {
            name:"java",
        },
        {
            name:"php",
        },
        {
            name:"python",
        },
    ]
    render(props,kids){
        return <select(dropdownSelect) value={props.data}>
                {this.list.map(item=><option value={item.name}>{item.name}</option>)}
            </select>
    }
}