import React from "react"

type TProps = {
    length: number;
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}
function Dots({ length, currentIndex, setCurrentIndex }: TProps) {

    return (
        <div className="flex">
            {
                Array.from({ length: length }, (_, index) => ( // that creates an empty array of the projects
                    <div key={index} onClick={() => setCurrentIndex(index)} // and then mapping over it is more performant.
                        className={`${index === currentIndex ? "bg-gray-300" : "border-[3px] border-gray"} h-3 w-3 rounded-full mx-1`} />
                ))
            }
        </div>
    )
}

export default Dots