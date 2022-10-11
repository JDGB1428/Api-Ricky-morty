import React from 'react'
import '../styles.css'

export const CardPerson = ({ character }) => {
    return (
        <>
            {character.map((item, index) => (
                <div key={index} className="col">
                    <div className="card">
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <hr/>
                            <p>Status: {item.status}</p>
                            <p>Species: {item.species}</p>
                            <p>Gender: {item.gender}</p>
                            <p>Location</p>
                            <p>{item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
