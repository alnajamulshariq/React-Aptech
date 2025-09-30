import  Axios  from 'axios';
import React from 'react'

function Post() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const postUrl = "https://68db6a91445fdb39dc2550e9.mockapi.io/Students";
        Axios.post(postUrl, new URLSearchParams({
            name: e.target[0].value,
            email: e.target[1].value,
            age: e.target[2].value,
            city: e.target[3].value
        }));
        e.target[0].value="",
        e.target[1].value="",
        e.target[2].value="",
        e.target[3].value="",
        console.log("Data Submitted");
        alert("Form Submitted");

    }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <h1 className='text-center'>Insert Your Data</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Your Name' className='form-control'/><br />
                    <input type="email" placeholder='Enter Your Email' className='form-control'/><br />
                    <input type="number" placeholder='Enter Your Age' className='form-control'/><br />
                    <input type="text" placeholder='Enter Your City' className='form-control'/><br />
                    <input type="submit" className='btn btn-primary w-100'/><br />
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>

    
    </>
  )
}

export default Post