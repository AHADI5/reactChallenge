import Profile from "./components/Profile";
import Info from "./components/Info";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Interests from "./components/Interests";
import Contacts from "./components/Contacts";
import "./App.css";

export default function App  () {
    return (
        <div className="app-container">
            <Profile/>
            <Info/>
            <Buttons/>
            <div className="about-content">
                <About/>
            </div>
            <div className="interest-content">
                <Interests/>
            </div>
            <Contacts/>
          
        </div>
    )
}