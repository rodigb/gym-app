import React from 'react'
import './cards.scss'
 


//creating the card component interface

type CardProps = {

 
    title: string
 


}



//creating the card component
export const Card = ({title}: CardProps)  => {
    return(
     
            <div data-testid="cards-1" className="card">
                <div className="image-holder">

                    <div className="overlay">

                    </div>
                    {/* image property */}
                    {/* <img src={coverImage}></img> */}

                </div>
                <div className="text-section">
                    <h1 data-testid="title-field" className="title">
                    {/* title property */}
                        {title}

                    </h1>

                </div>

            </div>
 
    )
}