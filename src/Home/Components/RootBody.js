import Dashboard from './SubComponents/Dashboard/Dashboard';
import Projects from './SubComponents/Projects/Projects';
import Interactions from './SubComponents/Interaction/Interactions';
import Blogs from './SubComponents/BlogSections/Blogs';
import AddBlogs from './SubComponents/BlogSections/AddBlogs';
import Messages from './SubComponents/Messages/Messages';
import Notes from './SubComponents/Notes/Notes';







const RootBody = (props) => {
    return (
        <div className={`col-10`}>
            {props.section ==='dashboard' && <Dashboard/>}
            {props.section ==='projects' && <Projects/>}
            {props.section ==='messages' && <Messages/>}
            {props.section === 'blogs' && <Blogs />}
            {props.section ==='add new blog' && <AddBlogs/>}
            {props.section ==='notes' && <Notes/>}
            {props.section ==='interactions' && <Interactions/>}
        </div>
    );
}
 


export default RootBody;