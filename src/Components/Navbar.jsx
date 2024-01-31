import React ,{useContext}from 'react'
import { SummaryContext } from '../Context';

import {Link} from 'react-router-dom'
export default function Navbar() {
  const { currentSummary} = useContext(SummaryContext);

  return (
    <div className='nav'>
      <h1>QuadBtech</h1>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Summary'>Summary</Link></li>
        <li><a href='https://drive.google.com/file/d/1E4kcsIpea_HlIvWKTolVO7YysXzG3-eQ/view?usp=sharing'>CV</a></li>
      
      </ul>
    </div>
  )
}
