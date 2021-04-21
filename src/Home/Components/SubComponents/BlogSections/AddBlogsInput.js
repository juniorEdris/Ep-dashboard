import "./BlogInput.css";
export default function AddBlogsInput() {
    return (
        <div className={`blog_inputs col-8`}>
            <form action>
                <div className="form-group text-left">
                    <label htmlFor="exampleFormControlInput1">Blog title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Blog title goes here" />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleFormControlTextarea1" >Blog details</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={13} defaultValue={""} style={{resize: 'none'}}/>
                </div>
                <button className={`submit_btn btn w-100 mt-3`} type="submit">Submit form</button>
            </form>

        </div>
    )
}
