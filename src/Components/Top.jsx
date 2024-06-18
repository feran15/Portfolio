import React, {useState} from 'react'
import Car from '../Components/IMAGE/Car.jpg'
const Top = () => {
    const [type, autotype] = useState()
  return (
    <div className='top-body'>
        <div className="sub-body">
      <p>Hey there👋, I am</p>
      <h2 className='paul'>PAUL ABODUNDE</h2>
      <p id='front'>Front end developer</p>
        </div>
        <div className="img-carrier">
            <img className='img' width={400} height={400} src={Car} alt="" />
        </div>
    </div>
  )
}

export default Top
