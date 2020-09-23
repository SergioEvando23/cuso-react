import React from 'react'
import './App.css'

import Primeiro from './components/Basicos/Primeiro'
import ComParametro from './components/Basicos/ComParametro'
import ComFilhos from './components/Basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Basicos/Repeticao'
import Condicional from './components/Basicos/Condicional'
import CondicionalComIf from './components/Basicos/CondicionalComIf'
import Pai from './Comunicação/direta/Pai'
import Super from './Comunicação/indireta/Super'

export default (props) =>
    <div className="App">

        <Card titulo="#08 Comunicação Indireta" color="#82683B">
            <Super></Super>
        </Card>

        <Card titulo="#07 Comunicação Direta" color="#CD1719">
            <Pai></Pai>
        </Card>

        <Card titulo="#06 Condicional v2" color="#F38630">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>

        <Card titulo="#05 Condicional v1" color="#0087CB ">
            <Condicional numero={10}></Condicional>
        </Card>

        <Card titulo="#04 Repetição" color="#D0C91F">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 Componente Com Filhos" color="#FF4C65">
            <ComFilhos>
                <ul>
                    <li> Sarah Beatriz</li>
                    <li> Enzo Murfin </li>
                    <li> Aurora Liz </li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 Componente Com Parametro" color="#5BB12F">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>

        <Card titulo="#01 Primeiro Componente" color="#982395">
            <Primeiro></Primeiro>
        </Card>



    </div >
