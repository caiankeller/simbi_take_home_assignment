import React from 'react'
import ReactDOM from 'react-dom/client'

import Carousel from "./Carousel"
import '../css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="antialiased h-screen flex flex-col justify-center items-center">
      <div className="w-[1000px]">
        <span className="text-teal-700 text-2xl font-medium">Ver outros Projetos do Proponente</span>
        <Carousel />
      </div>
    </div>
  </React.StrictMode>,
)
