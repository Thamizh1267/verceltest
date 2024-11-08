import React from 'react'

const Register = () => {
    return (
        <div className='container'>
            <h1>Job Application Form</h1>
            <form className='one'>
                <div>
                    <label for="Fname">Name : </label>
                    <input type="text" placeholder='First ' />
                    <input type="text" placeholder='Middle ' />
                    <input type="text" placeholder='Last ' />
                </div>
                


                <div>
                    <label for="Mobile">Mobile Number : </label>
                    <input type="number" placeholder='Enter Number' />
                </div>

                <div>
                    <label for="Email">E-Mail : </label>
                    <input type="email" placeholder='Enter Mail' />
                </div>

                <div>
                    <label for="gender">Gender : </label>
                    <input type="radio" name='one' value='Male' />
                    <label for="html">Male </label>
                    <input type="radio" name="one" value='Female' />
                    <label for="html">Female </label>
                    <input type="radio" name='one' value='Prefer not to say' />
                    <label for="html">Prefer not to say </label>
                </div>

                <div>
                <label for="Birth date">Birth Date : </label>
                <input type='date'/>
                </div>

                <div>
                    <label for="job">Job Description : </label>
                    <input type="text" placeholder='Enter Role' />
                </div>

                <div>
                    <label for="Address">Address : </label>
                    <input type="text" placeholder='Street Address' />   
                    <input type="text" placeholder='Address Line 2' /> 
                    <input type="text" placeholder=' City' /> 
                    <input type="text" placeholder=' State' /> 
                </div>

                <div>
                <label for="Skills">Skills : </label>
                <input type='checkbox' />
                <label for="html">HTML5 </label>
                <input type='checkbox' />
                <label for="css">CSS3 </label>
                <input type='checkbox' />
                <label for="javascript">JavaScript </label>
                <input type='checkbox' />
                <label for="bootstrap">Bootstrap </label>
                <input type='checkbox' />
                <label for="react">React.Js </label>
                </div>

                <div>
                    <label for="experience">Experience : </label>
                    <input type="text" placeholder='Write Something' />
                </div>

                <div>
                    <label for="languages">Languages : </label>
                    <input type="text" placeholder='Enter Text' />
                </div>
                  
                <div>
                    <label for="file">Upload Your CV : </label>
                    <input type="file" name='file name' />
                </div>

                
                <div>
                <input type="Submit" value='Apply' />
                </div>






            </form>
        </div>
    )
}

export default Register;
