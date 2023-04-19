import React, { useEffect, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

import Card from "./Card"
import Dots from "./Dots";

export type TProject = {
    id_projeto: number;
    nome: string;
    uf: string;
    municipio: string;
    valor_captado: string;
    valor_aprovado: string;
    resumo: string;
}

function Carousel() {

    const [projects, setProjects] = useState<TProject[][]>([])
    const [isLoading, setIsloading] = useState<boolean>(true)
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/projects?columns[]=id_projeto&columns[]=nome&columns[]=nome&columns[]=uf&columns[]=municipio&columns[]=valor_captado&columns[]=valor_aprovado&columns[]=resumo', {
            method: "GET",
            headers: { Accept: "Application/json" }
        })
            .then(response => response.json())
            .then((response) => {
                const elementsByRow = 3
                setProjects(response.reduce((acc: any[][], curr: any, i: number) => { //creates an array of 3 objects 
                    return !(i % elementsByRow) ? acc.concat([response.slice(i, i + elementsByRow)]) : acc
                }, []))
            })
            .then(() => setIsloading(false))
    }, [])

    const nextProjects = () => setCurrentIndex(currentIndex + 1)

    const prevProjects = () => setCurrentIndex(currentIndex - 1)

    return (
        <div className="relative mt-4">
            <div className="grid grid-cols-3 gap-4 m-4">
                {!isLoading && projects[currentIndex].map(project => {
                    return <Card key={project.id_projeto} project={project} />
                })}
            </div>
            <div className="flex items-center justify-between mt-16">
                <div className="invisible">.</div>
                <Dots length={projects.length} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                <button className="flex items-end text-gray-400 uppercase text-sm hover:bg-gray-200 hover:text-gray-600 p-2 rounded duration-100">+ Ver todos</button>
            </div>

            {currentIndex > 0 &&
                <button className="absolute bottom-[250px] left-[-1.5rem] rounded-full shadow-lg h-12 w-12 bg-white border
                 border-slate-100 flex justify-center items-center text-2xl text-slate-400" onClick={prevProjects}><IoIosArrowBack /></button>}
            {currentIndex + 1 < projects.length &&
                <button className="absolute bottom-[250px] right-[-1.5rem] rounded-full shadow-lg h-12 w-12 bg-white border
                 border-slate-100 flex justify-center items-center text-2xl text-slate-400" onClick={nextProjects}><IoIosArrowForward /></button>}
        </div>
    )
}

export default Carousel
