import React from 'react'


function GalleryBody(props) {
    let imgdata=(props.data);
  return (
    <div>
        
        {
          imgdata.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      
    </div>
  )
}

export default GalleryBody
