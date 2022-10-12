import React, { useState } from 'react';
import './App.css';
import MyTransfer, {IArrayModel} from './components/mytransfer';

function App() {
  // Data Source
  // All data goes here
  let source : IArrayModel[] = [
    {key:"1", value:"test 1"},
    {key:"2", value:"test 2"},
    {key:"3", value:"test 3"},
    {key:"4", value:"test 4"},
    {key:"5", value:"test 5"},
    
  ]
  // Selected Keys 
  let selectedKeys : string[] = [];
  // if 3 and 5 are selected it should be like 
  selectedKeys = ["3", "5"];

  const [selectedDataKeys, setSelectedDataKeys] = useState<string[]>(selectedKeys);
  console.log("source :", source)

  return (
    <div className="App">
      <header className="App-header">
        


        <MyTransfer 
          source={source} 
          selectedDataKeys={selectedDataKeys} 
          setSelectedDataKeys={setSelectedDataKeys}
          sourceTitle="Source"
          targetTitle="Title"
        />
        
   
        <div>Selected keys : 
          {selectedDataKeys.map(k=> k + ", ")}
        </div>
        
 
      </header>
    </div>
  );
}

export default App;
