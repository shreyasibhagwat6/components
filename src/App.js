import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App () {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'},
        { label: 'Pink', value: 'pink'},
        { label: 'Yellow', value: 'yellow'},
        { label: 'Indigo', value: 'indigo'},
        { label: 'Orange', value: 'orange'},
        { label: 'Purple', value: 'purple'}
    ]
    return (
    <div className="flex">
        <Dropdown value={selection} onChange={handleSelect} options={options}/>
        <Dropdown value={selection} onChange={handleSelect} options={options}/>
    </div>
)}

export default App;