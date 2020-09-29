import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

export default (props) => {
    const [nome, setNome] = useState('Sergio Costa')
    return (
        <>
            <h3>{nome}</h3>
            <TextField id="outlined-basic" label="escreva seu nome" variant="outlined" value={nome}
                onChange={e => setNome(e.target.value)} />

        </>
    );
};