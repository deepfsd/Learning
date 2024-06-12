import { useState } from "react"


interface props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}


function ListGroup({ items, heading, onSelectItem }: props) {

    // useState is a hook, its allow us to tap in build-in function of react    

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, index) =>
                (<li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={item}
                    onClick={() => {
                        setSelectedIndex(index),
                            onSelectItem(item)
                    }}>
                    {item}
                </li>))}
            </ul >
        </>
    );
}

export default ListGroup; 