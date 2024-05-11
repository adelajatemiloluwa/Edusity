import React from 'react'
import './Contact.css'
import messageicon from '../../assets/messageicon.jpeg'
import mailicon from '../../assets/mailicon.jpeg'
import phoneicon from '../../assets/phoneicon.jpeg'
import locationicon from '../../assets/locationicon.jpeg'
import dark_arrow from '../../assets/dark_arrow.jpeg'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe35829e-ac49-4d3a-a6a4-b9dc145aa384");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a message  <img src={messageicon} alt="" /></h3>
            <p>Feel free to reach out through contact form and find our contact
            information below. Your feedback, questions, and suggestions are 
            important to us as we strive to provide exceptional service to our 
            university community. </p>
            <ul>
                <li> <img src={mailicon} alt="" />Contact@adelajawaheed.dev or adelajawaheed36@gmail.com</li>
                <li> <img src={phoneicon} alt="" />07014013006</li>
                <li> <img src={locationicon} alt="" />66 Ilishan, Ogun state<br/> MA 0921, Nigeria</li>

            </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit}>
        <label>Your name</label>
                <input type="text" name = 'name' placeholder='Enter your name'
                 required/>
                 <label>Phone number</label>
                 <input type= "tel" name='phone' placeholder='Enter your mobile number' required/>
                 <label>Write your message here</label>
                 <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                 <button type='submit' className='btn dark-btn'>Submit now <img src={dark_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div> 
    </div>
  )
}

export default Contact
