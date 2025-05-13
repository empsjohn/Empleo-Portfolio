//Download button for resume

document.querySelector('.dl-btn').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'assets/files/resume.pdf'
  link.download = 'Empleo-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

//Back to top button

const btn = document.getElementById("topBtn");
window.onscroll = () => btn.style.display = window.scrollY > 200 ? "block" : "none";
btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });


//Contact section script
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  //Basic email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  //Show modal
  document.getElementById("modal").style.display = "flex";

  //clear form
  this.reset();
});

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

