import { useState } from "react"
import { useNavigate } from "react-router-dom"


const initState={
    name:"",
    email:"",
    subject:"",
    message:""
}

const Contact = () => {
    const [formData, setFormData] = useState(initState)
    const navigate = useNavigate()

    const collectFormData = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const {name, email, subject, message} = formData

    const submitFormData = (e)=>{
        e.preventDefault()
        if(name && email && subject && message){
            alert("Thank You !! We will reach You Shortly...")
            setFormData(initState)
            navigate("/")
        }
    }

    return (
        <>
            <div id="contact-page" className="container">
                <div className="bg">
                    <div className="row">    		
                        <div className="col-sm-12">    			   			
                            <h2 className="title text-center">Contact <strong>Us</strong></h2>    			    				    				
                            <div id="gmap" className="contact-map">
                            <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.104131020137!2d88.425240450702!3d22.575208385108827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1669574181570!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>			 		
                    </div>    	
                    <div className="row">  	
                        <div className="col-sm-8">
                            <div className="contact-form">
                                <h2 className="title text-center" style={{marginTop:"20px"}}>Get In Touch</h2>
                                <div className="status alert alert-success" style={{display: "none"}}></div>
                                <form id="main-contact-form" className="contact-form row" name="contact-form" onSubmit={submitFormData}>
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            value={formData.name}
                                            onChange={collectFormData}
                                            className="form-control" 
                                            required="required" 
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={formData.email}
                                            onChange={collectFormData}
                                            className="form-control" 
                                            required="required" 
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            value={formData.subject}
                                            onChange={collectFormData}
                                            className="form-control" 
                                            required="required" 
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <textarea 
                                            name="message" 
                                            value={formData.message}
                                            onChange={collectFormData}
                                            id="message" 
                                            required="required" 
                                            className="form-control" 
                                            rows="8" 
                                            placeholder="Your Message Here"
                                        >
                                        </textarea>
                                    </div>                        
                                    <div className="form-group col-md-12">
                                        <button  className="btn btn-primary pull-right">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact-info">
                                <h2 className="title text-center" style={{marginTop:"20px"}}>Contact Info</h2>
                                <address>
                                    <p>E-Cart Inc.</p>
                                    <p>Plot-9, Eco Intelligent Park, Unit No- 7E, 7th Floor, EM Block, Sector V, Bidhannagar,  700091</p>
                                    <p>Kolkata, West Bengal</p>
                                    <p>Mobile: +91 9012345678</p>
                                    <p>Fax: 1-714-252-0026</p>
                                    <p>Email: info@e-cart.domain.com</p>
                                </address>
                                <div className="social-networks">
                                    <h2 className="title text-center">Social Networking</h2>
                                    <ul>
                                        <li>
                                            <a href="#!"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="fa fa-google-plus"></i></a>
                                        </li>
                                        <li>
                                            <a href="#!"><i className="fa fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>    			
                    </div>  
                </div>	
            </div>
            {/* <!-- / #contact - page-- > */}
        </>
    )
}

export default Contact