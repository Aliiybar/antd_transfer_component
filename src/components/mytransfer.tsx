import { Transfer } from 'antd'
import { useState } from 'react';
import "antd/dist/antd.css";

export interface IArrayModel
{
   key: string;
   value: string;
 }

export default function MyTransfer(props:any) : any {
    const source =  props.source as IArrayModel[]
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
   // const [targetKeys, setTargetKeys] = useState<string[]>();

return(
    <Transfer
    dataSource={source}
    titles={[props.sourceTitle, props.targetTitle]}
    render={item => item.value}
    selectedKeys={selectedKeys}
    targetKeys={props.selectedDataKeys}
    onChange={(nextTargetKeys) => {
        props.setSelectedDataKeys(nextTargetKeys)
    }}
    onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    }}
    />
)

}