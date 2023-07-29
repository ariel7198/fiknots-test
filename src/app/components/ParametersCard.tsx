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
        <div className={`${style.parameterCard} sm:min-w-[100px] md:w-[200px] lg:min-w-[300px] card mx-3 bg-white`}>
            <div className="card-body flex flex-col justify-start content-end flex-no-wrap">
                <div className="flex flex-row items-end"> 
                    <span className="text-3xl font-bold"> {props.prefix} </span> 
                    <h3 className="md:text-4xl lg:text-7xl font-black"> {props.value} </h3> 
                    <p className="md:text-2xl lg:text-3xl font-bold"> {props.unit} </p>
                </div>

                <h4 className={`${props.colorClass} md:text-lg lg:text-3xl font-medium grow-0`}> {props.title} </h4>
                <p className={`${props.colorClass} md:text-base lg:text-lg font-medium`}> {props.description} </p>
            </div>
        </div>
    )
}