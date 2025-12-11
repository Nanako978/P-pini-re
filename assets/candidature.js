
function nextStep() {
  document.getElementById('step1').classList.remove('active');
  document.getElementById('step2').classList.add('active');
  window.scrollTo(0, 0);
}

function prevStep() {
  document.getElementById('step2').classList.remove('active');
  document.getElementById('step1').classList.add('active');
  window.scrollTo(0, 0);
}

function submitForm() {
  alert('Votre candidature a été envoyée avec succès!');
  // Here you would normally handle form submission
}
