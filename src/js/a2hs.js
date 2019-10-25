import $ from 'jquery';

const AddToHomeScreenButton = `
<div class="add_to_homescreen">
<div class="text">For best experience you can add page to Home Screen</div>
<div class="add-home-btn">Add To Home</div>
</div>
`;


if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./dist/js/sw.js')
    .then(function() {
      console.log('Service Worker Registered');
    });
}

if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
} else {
  console.log('AddToHomeScreenButton');
  // $('body').append(AddToHomeScreenButton);
}

let deferredPrompt;

const addBtn = document.querySelector('.add-home-btn');

addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';
  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});
