import './Registration.css'
import logo2 from '../src/All Images/side-image.avif';


function Recruiters() {
    return (
        <div>
            <div class="container maincontent text-start">
                <div class="row">
                    <div class="d-flex flex-row col-12 col-md-6">
                        <div class=" card forms">
                            <h2 class="heading1">Create an account</h2>
                            <p class="para2">It only takes a couple of minutes to get started!</p>
                            <div class="d-flex flex-row">
                                <a href="./"> <button type="button" class="b2"> Login
                                </button></a>
                                <button  type="button" class="b2" id="Jobbtn">Sign Up 
                                <input type="radio" name="type" id="" className='mx-2' />
                                </button>
                            </div>
                            <div class="d-flex flex-row">
                                <a href="/Registration"> <button  type="button" class="b2" id="Jobbtn">Job Seekers 
                                <input type="radio" name="type" id="" className='mx-2' />
                                </button></a>
                                <button  type="button" class="b2" id="Jobbtn">Recruiters 
                                <input type="radio" name="type" id="" className='mx-2' />
                                </button>
                            </div>
                            <form className='forms2'>
                                <label className='heading2'>Company Name</label><br />
                                <input type="text" className='p1' placeholder='Enter your full name' /><br />

                                <label className='heading2'>Email ID</label><br />
                                <input type="email" className='p1' placeholder='Enter your Email ID' /><br />

                                <label className='heading2'>Password</label><br />
                                <input type="password" className='p1' placeholder='Enter your Password' /><br />

                                <label className='heading2'>Mobile Number</label><br />
                                <select style={{ marginLeft: "10px" }}>
                                    <option>+91</option>
                                </select>
                                <input type="text" className='pp1' placeholder='Enter your Mobile Number' /><br />

                                {/* <div id="gender1">
                                    <label class="heading2">Gender</label><br />
                                    <input type="radio" class="l1" name="gender" />Male
                                    <input type="radio" class="l1" name="gender" />Female
                                    <input type="radio" class="l1" name="gender" />prefex not to saybr
                                    <br />
                                    <br />
                                </div> */}
                                <p><i class="fa-sharp fa-solid fa-circle-check" style={{ color: "green" }} /> I would like to get latest updates on Whatsapp</p>
                                <p class="para3" style={{ marginLeft: "2px" }}>By Clicking Register, you agree to the Terms and
                                    Conditions & Privacy
                                    policy of pabjobs.com</p>
                                <button class="Registerbtn">Register Now</button>

                            </form>
                            <div>
                                <p class="para1  d-md-none">Already Registration? <span class="span1">Login</span> here</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-12 col-md-5 remove">
                        <img src={logo2} alt="pic" class="image2" />
                        <p class="para4"><i class="fa-solid fa-circle-check" style={{ color: "blue" }}></i> Build your profile
                            and let recruiters
                            find you</p>

                        <p class="para4"><i class="fa-solid fa-circle-check" style={{ color: "blue" }}></i>Get job posting
                            delivered right to your
                            email</p>


                        <p class="para4"><i class="fa-solid fa-circle-check" style={{ color: "blue" }}></i> Find a job and grow
                            your career</p>



                    </div>




                </div>
            </div>

        </div>
        //siva koteswara rao
    )
}
export default Recruiters;