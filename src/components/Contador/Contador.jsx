import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core'

const styleButton = {
    backgroundColor: "#94FFFC",
    margin: "0px 10px"
}

const Contador = () => {
    const [passo, setPasso] = useState(1);
    const [valor, setValor] = useState(0);

    const onAdd = () => {
        setValor(valor + passo)
    }

    const onSub = () => {
        setValor(valor - passo)
    }

    return (
        <div>
            <Typography>Contador</Typography>
            <Typography>Passo: {passo} </Typography>
            <Typography>Valor: {valor} </Typography>
            <div>
                <Button style={styleButton} variant="contained" onClick={onAdd}>+</Button>
                <Button style={styleButton} variant="contained" onClick={onSub}>-</Button>
            </div>
        </div>
    )
}

export default Contador