export class File  extends Element {

    props;
    this(props,kids) {
        this.props=props;
    }

    render(){
        console.log(this.props.path)
        return <div.file.flex.horizontal path={this.props.path}><i.fi.fi-file></i><span.name>{this.props.data.name}</span></div>
    }
}