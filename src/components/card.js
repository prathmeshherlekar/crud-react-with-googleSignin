import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineNumber} from 'react-icons/ai'
import React from 'react'

export default function Card({ data }) {
    var textColor;
    if(data.cardVarient==='warning'){
        textColor='text-dark'
    }else if(data.cardVarient==='success'){
        textColor='text-white'
    }
    return (
        <>
            <div class="col-xl-3 col-md-6 mb-4">
                <div class={`card border-left-dark shadow h-100 py-2 bg-${data.cardVarient}`}>
                    <div class={`card-body ${textColor}`}  >
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold  text-uppercase mb-1">
                                    {data.title}
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{data.value}</div>
                            </div>
                            <div class="col-auto">
                                <AiOutlineNumber className="text-gray-300"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
