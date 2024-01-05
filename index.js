function sendMail() {

  if((document.getElementById("inputName").value.length>0)&&(document.getElementById("inputEmail").value.length>0)&&(document.getElementById("inputEmail").value.includes("@"))&&(document.getElementById("inputMessage").value.length>0)){
    var params = {
      name: document.getElementById("inputName").value,
      email: document.getElementById("inputEmail").value,
      message: document.getElementById("inputMessage").value
    };
    const serviceID = "service_amih1xh";
    const templateID = "template_aukveh8";
  
 
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("inputName").value = "";
      document.getElementById("inputEmail").value = "";
      document.getElementById("inputMessage").value = "";
      console.log(res);
      alert("your message send successfully..!"); 
      
    })
    .catch((err) => console.log(err));
  }
  else{
    alert("Please fill the field...")
  }
  }
