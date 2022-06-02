import React from "react";

export default function index (props)
{
    let datos = props.datos;
    return (
        <>
            {
                datos.map( (item, index) => (
                <div key={index} className="flex flex-row mb-32">
                    <div className=" w-2/5">
                        <img alt=''
                            src={item.url}
                            style={{ width: '100px' }}
                        />
                    </div>
                    <div className=" w-2/5">
                        <h2 className="text-2xl font-semibold">{item.nombre}</h2>
                        <p className="text-md">
                            {item.descripcion}
                        </p>
                        <p className="text-sm text-center">Descripción corta</p>
                        
                    </div>
                </div>
                ))
            }
        
        </>
    )
}