import "./BlogInput.css";
export default function AddBlogCategories() {
    return (
        <div className={`blog_categories col-4`}>
            <form action="">
            <div className="form-row">
            <div className="form-group  col-12 text-left">
              <label htmlFor="district">District</label>
              <select
                id="district"
                className="form-control custom-select form-control-lg"
                >
                <option selected>Choose...</option>
                <option>Area-one</option>
                <option>Area-two</option>
                <option>Area-three</option>
              </select>
            </div>
            <div
              className="form-group col-12 text-left"
              >
              <label htmlFor="area">Area</label>
              <select id="area" className="form-control custom-select form-control-lg">
                <option selected>Choose...</option>
                <option>Area-one</option>
                <option>Area-two</option>
                <option>Area-three</option>
              </select>
            </div>
          </div>
</form>
        </div>
    )
}
