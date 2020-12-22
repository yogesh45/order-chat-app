import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [items, setItems] = useState('');
  const [date, setDate] = useState('');
  const [mobileErr, setMobileErr] = useState('');

  const currentDate = new Date();

  const onJoin = (e) => {
    const mobileReg = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;
    if(name != '' && mobile.trim() != '' && items.trim() != '' && date.trim() != ''){  
        if(mobileReg.test(mobile)){
          return null;
        }
        else{
          e.preventDefault()
          setMobileErr('Invalid Mobile number')
        }
    }
    else{
      e.preventDefault()
    }
    
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Mobile number" className="joinInput mt-20" type="text" onChange={(event) => setMobile(event.target.value)} />
          {
            setMobileErr ? <div className='err'>{mobileErr}</div> : ''
          }
          
        </div>
        <div>
          <input placeholder="Items to be ordered" className="joinInput mt-20" type="text" onChange={(event) => setItems(event.target.value)} />
        </div>
        <div className='mt-20 labeldiv'>
          <div>Expected delivery date/time.</div>
          <input placeholder="Items to be ordered" type='date' placeholder='Expected delivery date/time.' className="joinInput" onChange={(event) => setDate(event.target.value)} />
        </div>
        <Link onClick={(e) => onJoin(e)} to={`/chat?name=${name}&mobile=${mobile}&items=${items}&date=${date}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
