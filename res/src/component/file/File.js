export class File  extends Element {

    props;
    this(props,kids) {
        this.props=props;
    }

    render(){
        return <div class={"file flex horizontal"} path={this.props.path}>
                    <i.fi.fi-file style={"background-image: url("+this.props.data?.resolve?.icon||+")"}></i>
                    <span.name>{this.props.data.name}</span>
                </div>
    }
}