import React, { useEffect, useState } from 'react'
import CardPhone from '../components/CardPhone'




function PhoneList({ lista}) {

  return (
    <div className="lista">
          
          {
              lista.map((phone) => { 
                  return (
                      
                      <CardPhone key={phone.id} name={phone.name} manufacturer={phone.manufacturer} description={phone.description} color={phone.color} image={phone.imageFileName} processor={phone.processor} ram={phone.ram} screen={phone.screen } />
                  )
              })
          }
    </div>
  )
}

export default PhoneList