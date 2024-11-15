document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`The email was successfully sent.`);
});

function sendMail(){
  var params={
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      message:document.getElementById("message").value
  };

const serviceID="service_2qw8wsh";
const templateID="template_uqgdcjs";


 emailjs
 .send(serviceID,templateID,params)
 .then((res)=>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("message").value="";
  }
 )
 .catch((err)=> console.log(err));
}