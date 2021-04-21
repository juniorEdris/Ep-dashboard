import BlogLists from './Bloglists';
import BlogOptions from './BlogOptions';

const Blogs = (props) => {
    return (
        <div className="col-12">
            <h2 className={`section_header`}>my blogs</h2>
            <div className={`row`}>
                <BlogLists allBlogs={ props.allBlogs}/>
                <BlogOptions/>
            </div>
        </div>
     );
}
 
export default Blogs;