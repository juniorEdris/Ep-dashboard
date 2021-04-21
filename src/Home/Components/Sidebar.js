import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = (props) => {
  const lists = [
    {
      id:1,
      name:'dashboard',
     },
    {
      id:2,
      name: 'blogs',
      subpages: [
        {
          id: 1,
          name:'add new blog',
        },
      ]
     },
    {
      id:3,
      name:'add new blog',
     },
    {
      id:4,
      name:'projects',
     },
    {
      id:5,
      name:'messages',
     },
    {
      id:4,
      name:'notes',
     },
    {
      id:5,
      name:'interactions',
     },
  ]
     return (
        <div className={`left_sidebar col-2 p-0`}>
        <div className={`list_wrapper`}>
          <ul className={`list`}>
            {
              lists.map(list => (
                <li key={list.name} className={props.section === list.name && 'active'}><Link to={"#"} onClick={(e) => { e.preventDefault(); props.setSection(list.name) }}>{list.name}</Link></li>
              
            ))}
          </ul>
        </div>
      </div>
    )
}

export default Sidebar