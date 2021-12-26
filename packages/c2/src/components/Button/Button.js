
const Button = ({className, text}) => {
    return (
        <button className={`${className} bg-white text-gray-medium font-medium px-[22.5px] border-0`}>{text}</button>
    )
}

export default Button