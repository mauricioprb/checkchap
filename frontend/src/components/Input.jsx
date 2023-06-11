import React from 'react';

const Input = () => {
    return (
        <div className={"input-container"}>
            <div className={"tag-container"}>
                <span className={"fonte-semibold-m"}>checkchap.tech/</span>
            </div>
            <input className={"input fonte-regular-m"} type="text" placeholder="Link único para a página" />
            <button className={"botao-input fonte-semibold-m"}>Prosseguir</button>
        </div>
    );
}

export default Input;
