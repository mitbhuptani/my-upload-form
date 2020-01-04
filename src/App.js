import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {


constructor(props) {
  super(props);
    this.state = {
      selectedFile: null,
      fileName: '',
      fileType: '',
      filecontentbase64: ""
    }
 
}

onChangeHandler=event=>{
  console.log(event.target.files)
  const temp = event.target.files[0]
  const {name,type} = temp
  this.setState({
     selectedFile: event.target.files,
     fileName:name,
     loaded: 0
  })
  
}

onClickHandler = () => {
  const data = new FormData() 
  data.append('file', this.state.selectedFile)

  axios.post("http://localhost:3001/image", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      })

}


uploadFile = async event => {
  let file = this.state.selectedFile[0];
  var reader = new FileReader();
  reader.readAsBinaryString(file)
  console.log(file.type)
  let file_type = file.type
  reader.onload = async () => {
    let file_string = window.btoa(reader.result)
    console.log(file_string)
    this.setState({
      filecontentbase64 : file_string,
      fileType:file_type
    })
    // await fetch("http://localhost:3001/image", {
    //   method: 'POST',
    //   headers: {
    //     'Accept': `${file.type}`,
    //     'Content-Type': `${file.type}`,
    //     'Access-Control-Allow-Origin': "*"
    //   },
    //   body: file_string
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    console.log("file uploaded")
  }
  reader.onerror = error => console.log('Error :', error)
}

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
            <button type="button" className="btn btn-success btn-block" onClick={this.uploadFile}> Upload Image </button>
        </div>
      </div>
    </div>
  </div>
   );
  }
}
 
export default App;