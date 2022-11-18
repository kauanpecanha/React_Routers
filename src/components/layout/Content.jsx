import React from 'react'
import '../layout/Content.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import About from '../../views/examples/About'
import NotFound from '../../views/examples/NotFound'


const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" exact element={<Home />} />
            {/* utiliza-se o atributo exact pois caso não o seja utilizado, pode-se entrar nesta página por engano, se o usuário entrar em uma que não existe, assim sendo redirecionado para esta */}
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            {/* path = "*" faz com que toda e qualquer url que seja diferente das já listadas, o redirecionará para uma página de erro */}
        </Routes>
    </main>
)

export default Content;