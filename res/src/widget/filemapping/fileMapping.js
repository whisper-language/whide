import { Processor } from "./processor";

export class FileMapping extends Element {


    list=[
        {
            match:"*.c",
            processor:"c"
        },
        {
            match:"*.bin",
            processor:"hex"
        },
        {
            match:"*.hex",
            processor:"hex"
        },
        {
            match:"*.java",
            processor:"java"
        },
        {
            match:"*.php",
            processor:"php"
        }

    ];
    render(){
        return <div>
                    增加
                    <div>
                        {
                            this.list.map(item=> <div.cell>
                                <input value={item.match} /> 
                                <Processor data={item.processor}/>
                            </div>)
                        }
                    </div>
                </div>
    }
}