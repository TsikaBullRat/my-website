import { RiBook3Fill } from 'react-icons/ri'

export const Poetry = ({style, content}) =>{
    return (
        style?(
            <div className={`poetry ${style}`}>{content}</div>
        ) : (
            <div className="block blockA">
                <RiBook3Fill size={40} color="#fff" />
            </div>
        )
    )
}