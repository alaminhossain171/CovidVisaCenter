import React from 'react';
import '../../Assets/CSS/Account/Registration.css'
import { Form } from 'react-bootstrap';
const Reg = () => {
    return (
        <>
            <div className="container container-bg-color mb-3">



                <div class="card mt-2 card-title1">
                    <div class="card-body center-title">
                        <h5 className='card-title mx-5'>Center Details</h5>
                    </div>
                </div>
                <div className="card-body shadow">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="mx-5">

                                    <form className='center-Details-form'>


                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label text-muted">Name</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="inputPassword" placeholder='Unity throught population center' />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label text-muted">Country</label>
                                            <div class="col-sm-5">
                                                <Form.Select aria-label="Default select example" className='text-muted'>

                                                    <option value="1">Bangladesh</option>
                                                    <option value="2">Country-2</option>
                                                    <option value="3">Country-3</option>
                                                </Form.Select>
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label text-muted">Zip code</label>
                                            <div class="col-sm-4">
                                                <input type="text" class="form-control" id="inputPassword" placeholder='1230' />
                                            </div>
                                        </div>

                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label text-muted">HotLine</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" id="inputPassword" placeholder='00 91123 498 762' />
                                            </div>
                                        </div>

                                    </form>
                                    {/* Right side form start */}
                                </div>
                            </div>
                            <div className="col-md-6 d-flex  align-items-center">
                                <form className='right-side-form'>

                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-3 col-form-label text-muted">City</label>
                                        <div class="col-sm-8">
                                            <Form.Select aria-label="Default select example" className='text-muted'>

                                                <option value="0">Dhaka</option>
                                                <option value="1">City-2</option>
                                                <option value="2">City-3</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-3 col-form-label text-muted">Area</label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" id="inputPassword" placeholder='Uttara' />
                                        </div>
                                    </div>




                                </form>





                            </div>
                        </div>


                    </div>

                </div>






                {/*............ person details start.................. */}

                <div class="card mt-5 card-title1">
                    <div class="card-body center-title">
                        <h5 className='card-title mx-5'>Person details</h5>
                    </div>
                </div>


                <div className="card-body shadow">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="mx-5">

                                    <form className='center-Details-form'>


                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label text-muted">Name</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" id="inputPassword" placeholder='HM Asaduzzaman Kamal' />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label text-muted">Email</label>
                                            <div class="col-sm-9">
                                                <input type="mail" class="form-control" id="inputPassword" placeholder='asaduzzaman.uttps@gmail.com' />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label text-muted">NID</label>
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control" id="inputPassword" placeholder='123 234 234' />
                                            </div>
                                        </div>

                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-3 col-form-label text-muted">Mobile</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" id="inputPassword" placeholder='018 2700 7441' />
                                            </div>
                                        </div>

                                    </form>
                                  
                                </div>
                            </div>
                            <div className="col-md-6 d-flex  justify-content-center">
                                <form className='right-side-form'>

              
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-5 col-form-label text-muted">Create password</label>
                                        <div class="col-sm-7">
                                            <input type="password" class="form-control" id="inputPassword" placeholder='p a s s w o r d' />
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-5 col-form-label text-muted">Confirm password</label>
                                        <div class="col-sm-7">
                                            <input type="password" class="form-control" id="inputPassword" placeholder='p a s s w o r d' />
                                        </div>
                                    </div>


                                </form>





                            </div>
                        </div>


                    </div>

                </div>
                


                {/*............. person details end ....................*/}

{/* ...............Documents form details start ........................*/}

<div class="card mt-5 card-title1">
                    <div class="card-body center-title">
                        <h5 className='card-title mx-5'>Documents</h5>
                    </div>
                </div>


                <div className="card-body shadow">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="mx-5">

                                    <form className='center-Details-form'>


                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-5 col-form-label text-muted">Trade License</label>
                                            <div class="col-sm-4">
                                                <input type="text" class="form-control" id="inputPassword" placeholder='987 654 567' />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-5 col-form-label text-muted">Document 1</label>
                                            <div class="col-sm-5">
                                                <input type="mail" class="form-control" id="inputPassword" placeholder='asaduzzaman.uttps@gmail.com' />
                                            </div>
                                        </div>
                                       

                                       

                                    </form>
                                  
                                </div>
                            </div>
                            <div className="col-md-6 d-flex  justify-content-center">
                                <form className='right-side-form'>

              
                                <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-5 col-form-label text-muted">Document 2</label>
                                            <div class="col-sm-6">
                                                <input type="text" class="form-control" id="inputPassword" placeholder='987 654 567' />
                                            </div>
                                        </div>
                                        <div class="mb-3 row">
                                            <label for="inputPassword" class="col-sm-5 col-form-label text-muted">Document 3</label>
                                            <div class="col-sm-5">
                                            
                       <div className="input-file">
                       <input type="file" id='file' />
<label htmlFor="file" className='text-muted'>Attatch a file <i className="fas fa-paperclip mx-2"></i></label>

                       </div>


                                            </div>
                                        </div>


                                </form>





                            </div>
                        </div>


                    </div>

                </div>


{/*............... Documents form details end ..............................*/}







            </div>
        </>
    );
};

export default Reg;