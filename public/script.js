const form = document.querySelector('#contact-form');
console.log(form);
const success = document.getElementById('success');
console.log(success);
function Contact(name, email, phone, subject, comment, id) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.subject = subject;
  this.comment = comment;
  this.id = id;
}

form.addEventListener('submit', (e) => {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let subject = document.getElementById('subject');
  let comment = document.getElementById('comment');
  let id = Math.floor(Math.random() * 8000);
  let contactForm = new Contact(name.value, email.value, phone.value, subject.value, comment.value, id);
  console.log(contactForm);

  fetch('http://localhost:3000/Contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactForm),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  e.preventDefault();
});
