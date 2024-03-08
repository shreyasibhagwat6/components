import { GoChevronDown } from "react-icons/go";
import { useState, useEffect, useRef } from "react";
import Panel from "./Panel";

function Dropdown ({ options, onChange, value }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }
    
    useEffect(() => {
        const handler = (event) => {
            if (divEl.current) {
                return;
            }
            
            // clicking outside of the dropdown will close the dropdown
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);

        // to remove the dropdown 
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);
    
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

    return <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer " onClick={handleClick}>
            {content}
            <GoChevronDown />
        </Panel>
        {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
    </div>
}

export default Dropdown;