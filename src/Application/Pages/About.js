import { MdInfo } from 'react-icons/md'

export const About = ({style, content}) =>{
    return (
        style?(
          <div className={`about ${style}`}>{content}</div>  
        ) : (
            <div className="cv-box">
                <div className='cv-header'>
                    <div className='cv-header-imagery'>
                        <MdInfo size={40} color="#FFB319" />
                        <div className="image1"></div>
                    </div>
                    <div className='cv-header-txt'>
                        <h1>Ntsikayomzi Phenyo Ngcakani</h1>
                        <h3>Amteur Web\Cross-Platform developer, and Poet</h3>
                        <h4>I am an analytical mind, that can produce creative an ingenious solutions to a problem. I work quietly keep focused and move fast. I would make a great addition to any team.</h4>
                    </div>
                </div>
                <div className='cv-programming'>
                    <h2>Programming</h2>
                    <h4>I have about 4 years programming experience. I've currently focused on mastering Javascript, CSS, HTML, Reactjs, and React-Native. </h4>
                    <p>So I placed a list of my skills with a ratings of 5</p>
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>
                            <h4>Javascript</h4>
                            <h5>4/5</h5>
                            <p>3 years experience</p>
                        </li>
                        <li>
                            <h4>HTML</h4>
                            <h5>3.5/5</h5>
                            <p>3 years experience</p>
                        </li>
                        <li>
                            <h4>CSS</h4>
                            <h5>3.5/5</h5>
                            <p>3 years experience</p>
                        </li>
                        <li>
                            <h4>C/C++</h4>
                            <h5>2.5/5</h5>
                            <p>1 years experience</p>
                        </li>
                        <li>
                            <h4>Pythons</h4>
                            <h5>1.5/5</h5>
                            <p>1 years experience</p>
                        </li>
                    </ul>
                    <h3>DevTools</h3>
                    <ul>
                        <li>
                            <h4>Node.js</h4>
                            <h5>3.5/5</h5>
                            <p>2 years experience</p>
                        </li>
                        <li>
                            <h4>Git</h4>
                            <h5>3.5/5</h5>
                            <p>4 years experience</p>
                        </li>
                        <li>
                            <h4>Github</h4>
                            <h5>4/5</h5>
                            <p>3 years experience</p>
                        </li>
                        <li>
                            <h4>Firebase</h4>
                            <h5>4/5</h5>
                            <p>2 years experience</p>
                        </li>
                        <li>
                            <h4>MySQl</h4>
                            <h5>1.5/5</h5>
                            <p>1 years experience</p>
                        </li>
                        <li>
                            <h4>Reactjs</h4>
                            <h5>4/5</h5>
                            <p>2 years experience</p>
                        </li>
                        <li>
                            <h4>React-Native</h4>
                            <h5>4/5</h5>
                            <p>2 years experience</p>
                        </li>
                        <li>
                            <h4>Figma</h4>
                            <h5>3/5</h5>
                            <p>2 years experience</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    )
}