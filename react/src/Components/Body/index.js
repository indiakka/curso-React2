import React from "react";
import Card from "../Card";


export default function Body ()
{
    const datos = [
        {
            url:'https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415_1280.jpg' ,
            name: 'name',
            descripcion: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.`,
        },
         {
            url:'https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415_1280.jpg' ,
            name: 'name',
            descripcion: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.`,
        },
          {
            url:'https://cdn.pixabay.com/photo/2015/11/06/11/43/businessman-1026415_1280.jpg' ,
            name: 'name',
            descripcion: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.`,
        }
    ]
    return (
        <div className="flex flex-col mx-5">
            <div className="flex flex-row justify-center">
                <div className="m-5 w-2/5">
                    <h2 className="text-3xl font-semibold">Titulo de body</h2>
                    <p className="text-xl">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged.            
                    </p>
                </div>    
                <div className="m-5 ml-32 w-2/5">
                    <h2 className="text-3xl font-semibold">Titulo de opciones</h2>
                    <li>Opci??n 1</li>
                    <li>Opci??n 2</li>
                    <li>Opci??n 3</li>
                    <li>Opci??n 4</li>
                    <li>Opci??n 5</li>
                </div>
            </div>
            <div className="flex flex-row">
                <Card datos={datos} />
            </div>
        </div>
    )
}