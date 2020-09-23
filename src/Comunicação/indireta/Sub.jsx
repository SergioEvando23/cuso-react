import React from 'react'


export default props => {

    function acao() {
        props.ifClick(Math.random(), 'Gerado:')
    }

    return (
        <div>
            <botton onClick={acao}>Click Aqui</botton>
        </div>
    );
};