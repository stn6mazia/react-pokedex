import React from 'react'

export const PokemonThumb = (
    {
        id,
        name,
        type,
        image
    }
) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}
