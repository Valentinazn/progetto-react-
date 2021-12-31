
import React from "react"
import { Link } from "react-router-dom"


import meditationSound from '../sounds/meditationSound.mp3'

import timer from '../svg/timer.svg'



export default function Timer(){
     
    
     const [ isDuration, setIsDuration ] = React.useState(0)
     const [isPlaying, setIsPlaying] = React.useState({
       audio: new Audio(meditationSound),
       playing: false,
     })


     let icon = isPlaying.playing ? 'Pause.svg' : 'Play.svg'
     

     function handleClick() {
       setIsPlaying( prevState =>{
         return {
           ...prevState,
           playing : !prevState.playing}
       })

      isPlaying.playing ? isPlaying.audio.pause() : isPlaying.audio.play()

      isPlaying.audio.ontimeupdate  = () =>{

         let currentTime = isPlaying.audio.currentTime
         let elapsed = isDuration - currentTime
         let seconds = Math.floor( elapsed % 60 ).toString().padStart(2,'0')
         let minuts = Math.floor( elapsed / 60 ).toString().padStart(2,'0')
    
         document.getElementById('time-display').textContent = `${minuts} : ${seconds}`

         if( currentTime >= isDuration){
           isPlaying.audio.pause()
           isPlaying.audio.currentTime = 0
         }
       }

     }

        function chooseTime(){
            const player = prompt('Inserisci i secondi che desideri: ')
            setIsDuration( prevState => player)
            document.getElementById('time-display').textContent = `${Math.floor( player / 60).toString().padStart(2,'0')} : ${Math.floor(  player % 60).toString().padStart(2,'0')}`
      }

         

    return(

       <>

      <div className="play-container">

        <nav>
         <Link to="/"  className="top-text">EasyMed</Link>
       </nav>

         <h2 id="time-display" className="time-display">00:00</h2>

          <div className="timer">
            <div className="play-background"  onClick={handleClick}>
               <img  className="play" src={require(`../svg/${icon}`).default} alt="play"/>
            </div>

            <div className="play-background" onClick={chooseTime}>
              <img  className="play" src={timer} alt="timer"/>
            </div>

          </div>

          <p>Music by <a href="/users/sergioacs-21415682/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=4224">SERGIOACS</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=4224">Pixabay</a></p>
  </div>

   
  </>

  )

}

