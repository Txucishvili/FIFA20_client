import $ from 'jquery';

const AddToHomeScreenButton = `
<div class="add_to_homescreen">
<div class="text">For Best experience you can add page to Home Screen</div>
<div class="add-home-btn">Add To Home</div>
</div>
`;


let deferredPrompt;
// const addBtn = document.querySelector('.add-button');
// addBtn.style.display = 'none';


if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
} else {
  console.log('AddToHomeScreenButton');
  $('body').append(AddToHomeScreenButton);
}

const addBtn = $('.add-home-btn');

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('HITTTTTTT');

  // Prevent Chrome 67 and earlier from automatically showing the prompt
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  console.log('HITTTTTTT');
  // Update UI to notify the user they can add to home screen
  // addBtn.style.display = 'block';

  $(document).on('click', '.add-home-btn', (e) => {
    console.log('hitt this');
    console.log('deferredPrompt', deferredPrompt);
    // hide our user interface that shows our A2HS button
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
