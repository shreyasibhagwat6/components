import { GoChevronDown } from "react-icons/go";
import { useState } from "react";

function Dropdown ({ options, onChange, value }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    
    const renderedOptions = options.map((option) => {
        return(
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => {handleOptionClick(option)}} key={option.value}>
            {option.label}
        </div> 
    )});

    let content = 'Dropdown';
    if(value) {
        content = value.label;
    }

    return <div className="w-48 relative">
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
            {content}
            <GoChevronDown />
        </div>
        {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
}

export default Dropdown;