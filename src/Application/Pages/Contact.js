import { MdLocalPhone } from 'react-icons/md'

export const Contact = ({style, content}) =>{
    return (
        style?(
            <div className={`contact ${style}`}>{content}</div> 
        ) : (
            <div style={{width: "100vw", height: "100vh", display: "flex", alignItems:"center", justifyContent:"center" }}>
                
                <div className='blockA contacts'>
                <h1>Contact Info</h1>
                    <h2>Email Adress: tsika1996190514@gmail.com</h2>
                    <h2>Mobile\Whatapp numbers: 0662067094</h2>
                </div>
            </div>
        )
    )
}