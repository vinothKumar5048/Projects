const name=document.getElementById('name').value;
const phone=document.getElementById('phone').value;
const email=document.getElementById('email').value;
const pass1=document.getElementById('pass1').value;
const pass2=document.getElementById('pass2').value;

if(pass1===pass2){

document.addEventListener('DOMContentLoaded', () => {
    const sendDataButton = document.getElementById('sendDataButton');
  
    sendDataButton.addEventListener('click', () => {
    
      const data = {
        name:name,
        phone:phone,
        email:email,
        password:pass
      };
      fetch('http://localhost:8080/register/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        let display=document.getElementById('response');
        display.innerHTML='<h1>Registration Successful</h1>';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });
}