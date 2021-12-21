import {useNavigate } from 'react-router-dom'


export default function Home() {
   
  let navigate = useNavigate()
      

    return (
         <>
         <div className="intro" >

          <div className="container container-intro">
           <h3 className="top-text">EasyMed</h3>
          </div>

        </div>
        
         <div  className="main-content">

         <div className="container">

           <h2>Trovi la meditazione troppo impegnativa?</h2>
           <p>Con EasyMed puoi meditare dove vuoi ma soprattutto QUANTO vuoi!</p>
           <p>Imposta il timer, lasciati avvolgere da un suono di sottofondo e rilassati...</p>
          
           <div  className="btn-collector">

             <button onClick={ () => { navigate( "/timer" ) } } className="btn btn-primary">
             MEDITA ORA
             </button>

           </div>

       </div>
       
      </div>

      </>
   
    )
}