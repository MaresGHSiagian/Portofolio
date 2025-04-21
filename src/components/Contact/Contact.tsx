import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project. </p>
        <p>Contact me now.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="marespdd@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="marespdd@gmail.com">marespdd@gmail.com</a>
        </div>
        <div>
        <a href="6285362439574"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+6285362439574">(+62) 85362439574</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}