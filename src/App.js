
import './App.css';
import React , {useState , useEffect} from 'react';
import { IoMoon , IoSunnySharp , IoMenu , IoClose , IoLogoFacebook , IoLogoLinkedin, IoLogoGithub , IoPlanet } from "react-icons/io5";
import backVideo from './materials/video.mp4'
import mask from './materials/mask.jpg'
function App() {
  const [isDayNight , setIsDayNight] = useState(true)
  const [isMenu , setIsMenu] = useState(true)
  useEffect(()=>{
    if(!isDayNight){
      document.documentElement.className = 'dark'
    }else{
      document.documentElement.className = ''
    }
  },[isDayNight])

  return <>
    <header>
      <nav>
        <div className="logo">
          <a href="/">ocean</a>
        </div>
        <div className="nav_btns">
          <div className="dayNight_btns btns" onClick={()=>setIsDayNight(!isDayNight)}>
            {
              isDayNight && <IoMoon className="dark_mode"/>
            }
            {
              !isDayNight && <IoSunnySharp className="light_mode"/>
            }
          </div>
          <div className="menu_btns btns" onClick={()=>setIsMenu(!isMenu)}>
             {
              isMenu && <IoMenu className="open"/>
            }
            {
              !isMenu && <IoClose className="close"/>
            }
          </div>
        </div>
      </nav>
    </header>

    <section className='main'>
     <video src={backVideo} autoPlay muted type='mp4' loop></video>
     <img src={mask} alt="." className='mask' />
     <h2 className='ocean'>ocean</h2>
    </section>

    <section className={`${isMenu ? 'side_menu ' : 'side_menu side_menu_active'}`}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Apout</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </section>
    <section className='social_links'>
      <ul>
        <li><a href="https://www.facebook.com/mostafatarekaioup/" title='Facebook' target='facebook'><IoLogoFacebook/></a></li>
        <li><a href="https://www.linkedin.com/in/mostafa-tarek-050936193" title='LinkedIn' target='linked'><IoLogoLinkedin/></a></li>
        <li><a href="https://github.com/MostafaTarekAioup" target='github' title='GitHub'><IoLogoGithub/></a></li>
        <li><a href="https://mostafa-tarek-portfolio.netlify.app/" target='portfolio' title='Portfolio'><IoPlanet/></a></li>
      </ul>
    </section>
  </>
}

export default App;
