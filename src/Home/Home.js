import { useState } from 'react'
import './AdminRoot.css'
import RootBody from './Components/RootBody';
import Sidebar from './Components/Sidebar';

export default function Home(props) {
  const [section, setSection] = useState('dashboard');
  return (
    <div className={``}>
      <main className={``}>
        <div className={`container-fluid`}>
          <div className="row">
            <Sidebar section={ section} setSection={ setSection}/>
            <RootBody section={section}/>
          </div>
        </div>
      </main>

    </div>
  )
}