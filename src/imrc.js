class okay extends Component {
    state = {  }
    render() { 
        return ( 
    <div className="App">
      <div className='container'> 
        <div className='row'>
          <div className='offset-md-3 col-md-6'>
              <div className='form-group files'>
                <label>Upload your file</label>
                <input type='file' name="file" onChange={this.onChangeHandler} className='form-control'/>
              </div>
              <button type="button" className='btn btn-primary'> Upload Image </button>
          </div>
        </div>
      </div>
    </div>
         );
    }
}
 
export default okay;