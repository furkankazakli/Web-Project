
import React from 'react';
import POPOSSpace from './POPOSSpace';
import eskiksr from '../src/images/res1.jpg'
import tazeksr from '../src/images/res2.jpeg'
import gravyer from '../src/images/gravyer.jpg'
import bal from '../src/images/bal1.jpg'
import yag from '../src/images/sari-yag-eritilmisyag-kars-trabzon-krsmetinbey-200x200.jpg'
import er from '../src/images/er1.jpg'
function POPOSList() {
    return (
      <div className="POPOSList">
        <POPOSSpace
        name = "Eski Kaşar" 
        image = {eskiksr}
        buton="Satın Al"
        />
        <POPOSSpace
        name = "Taze Kaşar" 
        image = {tazeksr}
        buton="Satın Al"
        />
        <POPOSSpace
        name = "Gravyer" 
        image = {gravyer} 
        buton="Satın Al"
        />
         <POPOSSpace
        name = "Yöresel Petek Bal" 
        image = {bal} 
        buton="Satın Al"
        />
         <POPOSSpace
        name = "Eritilmiş Yağ" 
        image = {yag} 
        buton="Satın Al"
        />
         <POPOSSpace
        name = "Kars Eriştesi" 
        image = {er} 
        buton="Satın Al"
        />
      </div>
    )
  }
  export default POPOSList