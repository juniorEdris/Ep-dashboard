import './BlogListItem.css'

const BlogLitsItem = (props) => {

    return (
        <div className={`${`blog_wrapper`}`} key={props.blog.id}>
        <div className="row">
            <div className={` col-4`}>
                <img src="./assets/images/java-script.jpg" alt=""/>
            </div>
            <div className={` col-8`}>
                    <p className={`blog_title`}>{ props.blog.title} </p>
                <p className={`blog_details`}>
                        { props.blog.body}
                </p>
            </div>
        </div>
    </div>
     );
}
 
export default BlogLitsItem;