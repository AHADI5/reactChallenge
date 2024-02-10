import reacLogo from "../imgs/react-2.svg";
export default function Navbar (){
    return (
       <nav>
            <div className="logo--text">
                <img src={reacLogo} alt="logo"/>
                <h2>ReactFacts</h2>
            </div>
            <h3>React Course - project 1</h3>
       </nav>
    )
}