import React from "react"

import { CiHeart } from "react-icons/ci"
import { TProject } from "./Carousel";

import formatValue from "./utils/formatValue";

function Card({ project }: { project: TProject }) {

    return (
        <div className="p-4 border rounded-lg border-gray-200 shadow-lg h-[350px] flex flex-col justify-between select-none cursor-pointer">
            <div>
                <span className="uppercase font-semibold text-[rgb(181,155,63)] bg-[rgb(254,248,216)] p-1 px-2 rounded">rouanet</span>
            </div>
            <h2 className="mt-1 truncate text-base font-medium text-neutral-800">{project.nome}</h2>
            <div className="mt-4 font-light text-sm text-neutral-600">
                {project.municipio}
                <span className="text-neutral-800 mx-1">•</span>
                {project.uf}
            </div>
            <div className="mt-4 line-clamp-3 font-light text-sm text-neutral-600">{project.resumo}</div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <h3 className="mt-2 font-light text-neutral-800">Aprovado</h3>
                    <h3 className="mt-2 font-light text-neutral-800">Captado</h3>
                </div>
                <div className="flex flex-col ml-8">
                    <h3 className="mt-2 font-medium text-neutral-800">{formatValue(parseFloat(project.valor_aprovado))}</h3>
                    <h3 className="mt-2 font-medium text-neutral-800">{formatValue(parseFloat(project.valor_captado))}</h3>
                </div>
            </div>
            <div className="flex mt-auto">
                <button className="rounded grow text-lg font-light bg-gray-50 text-gray-400 uppercase flex justify-center items-center hover:bg-teal-700 hover:text-neutral-900 duration-200">adicionar</button>
                <button className="ml-4"><CiHeart size='42' className="text-neutral-300 hover:text-rose-500 duration-200" /></button>
            </div>
        </div>
    )
}

export default Card
