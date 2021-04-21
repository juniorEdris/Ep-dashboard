import AddBlogCategories from './AddBlogCategories';
import AddBlogsInput from './AddBlogsInput';

const AddBlogs = () => {
    return (
        <div className="col-12">
            {/* <h2 className={`section_header`}>Add a new blog</h2> */}
            <div className="row mt-3">
                <AddBlogsInput />
                <AddBlogCategories/>

            </div>
        </div>
     );
}
 
export default AddBlogs;