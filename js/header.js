document.addEventListener('DOMContentLoaded', (event) => {
    // Button Click Events for Apple Store
    const appleStoreButton = document.getElementById('appleStore');
    appleStoreButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecting to Apple App Store...');
        // Redirect to Apple App Store
        window.location.href = 'https://apps.apple.com/your-app-link';
    });

    // Button Click Events for Google Play Store
    const googleStoreButton = document.getElementById('googlePlayStore');
    googleStoreButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Redirecting to Google Play Store...');
        // Redirect to Google Play Store
        window.location.href = 'https://play.google.com/store/apps/your-app-link';
    });





    //Now as we have different hero images on different screens...

    var imgElement = document.getElementById('heroimg');

    function changeImageBasedOnScreenSize() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            imgElement.src = 'assets/MobileHand.png';
        } else {
            imgElement.src = 'assets/hero.png';
        }
    }

    // Initial check
    changeImageBasedOnScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', changeImageBasedOnScreenSize);
});