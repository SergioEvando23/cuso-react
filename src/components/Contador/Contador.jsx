import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styleButton = {
    backgroundColor: "#94FFFC",
    margin: "0px 10px"
}

const Contador = () => {
    const [passo, setPasso] = useState(null);
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
            <div>
                <Typography id="standard-basic">Passo: </Typography>
                <TextField id="standard-basic" variant="standard" style={styleButton, { width: "30px ", fontSize: "1rem" }} value={passo}
                    onChange={e => setPasso(+e.target.value)} />
            </div>

            <Typography>Valor: {valor} </Typography>
            <div>
                <Button style={styleButton} variant="contained" onClick={onAdd}>+</Button>
                <Button style={styleButton} variant="contained" onClick={onSub}>-</Button>
            </div>
        </div>
    )
}

export default Contador