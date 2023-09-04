import React from "react";
import { Team, About , Reviews, Navbar, Home, Services, Contact, Footer} from "../E-Taka";



export const Landing =()=>{
    return(
        <div>
            <Navbar/>
            <Home/>
            <Services/>
            <About/>
            <Reviews/>
              <Team/>
            <Contact/>
            <Footer/>
            

        </div>
    )
}