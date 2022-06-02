import React from "react";
import Boton from "../Boton";


export default function InicioBaner ()
{
    return (
        <div className="flex flex-row m-5">
            <div className="mx-5 w-2/5">
                <img alt='' src='https://cdn.pixabay.com/photo/2022/02/19/07/17/tree-blossoms-7022041__340.jpg'/>
            </div>
            <div className="m-5 w-2/5">
                <h2 className="text-3xl font-semibold">Titulo</h2>
                <p className="text-xl">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. 
                </p>
                <div className="m-5 w-2/5">
                    <Boton />
                    <p className="text-sm text-center">Descripción corta</p>
                </div>    
            </div>
        </div>
    )
}