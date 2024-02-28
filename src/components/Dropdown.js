import { useState } from "react";

function Dropdown ({ options, onSelect, selection }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setIsOpen(false);
        console.log(option);
        onSelect(option);
    }
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    
    const renderedOptions = options.map((option) => {
        return(
        <div onClick={() => {handleOptionClick(option)}} key={option.value}>
            {option.label}
        </div>
    )});

    let content = 'Dropdown';
    if(selection) {
        content = selection.label;
    }

    return <div>
        <div onClick={handleClick}>{content}</div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
}

export default Dropdown;