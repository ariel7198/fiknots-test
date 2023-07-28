import style from "./style/ParametersCard.module.css"

interface ParameterCard{
    prefix?: String,
    title: String,
    value: String,
    unit?: String,
    description: String,
    colorClass: String,
}

export default function ParameterCards( props: ParameterCard ) {

    return(
        <div className={`${style.parameterCard} md:min-w-[200px] lg:min-w-[300px] card mx-3 bg-white`}>
            <div className="card-body">
                <div className="flex flex-row items-end"> 
                    <span className="font-bold"> {props.prefix} </span> 
                    <h3 className="text-5xl font-black"> {props.value} </h3> 
                    <p className="text-2xl font-bold"> {props.unit} </p>
                </div>

                <h4 className={`${props.colorClass} text-3xl font-medium`}> {props.title} </h4>
                <p className={`${props.colorClass} font-medium`}> {props.description} </p>
            </div>
        </div>
    )
}