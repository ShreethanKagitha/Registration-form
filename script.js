document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const event = document.getElementById('event').value;

  if (!name || !email || !event) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate submission (e.g., you can replace this with an API call)
  document.getElementById('message').textContent = `Thank you, ${name}! You have registered for the ${event}.`;

  // Optional: reset form
  this.reset();
});
