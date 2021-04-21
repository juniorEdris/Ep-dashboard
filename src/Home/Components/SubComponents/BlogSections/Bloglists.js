import {Link} from 'react-router-dom'
import { data } from '../../../../data';
import BlogLitsItem from './BlogListItem'
import './BlogListItem.css'

const BlogLists = (props) => {
    return (
        <div className={`blogslist col-8`}>
            {
                data?.map(blog => (
                    <Link to={`blog-details/${blog.id}`} key={ blog.title}>

                            <BlogLitsItem blog={ blog} key={ blog.title}/>
                            

                    </Link>
                ))
            }
        </div>
     );
}
 
export default BlogLists
export const getStaticProps= async ()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
  
    return{
        props:{data}
    }
  }