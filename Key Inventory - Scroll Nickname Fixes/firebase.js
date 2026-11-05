/* =====================================================================
   KEY INVENTORY - YOUR FIREBASE SETTINGS  (fill this in ONCE)
   =====================================================================
   This file sits NEXT TO index.html. Upload both files together.
   Once it is filled in, nobody on your band has to set anything up in the
   app: they just open the website, create an account and add friends.

   How to fill it in:
   1. In the Firebase console: gear icon > Project settings > Your apps >
      your web app. You will see a block that looks like this:

        const firebaseConfig = {
          apiKey: "AIza...",
          authDomain: "your-project.firebaseapp.com",
          projectId: "your-project",
          storageBucket: "your-project.firebasestorage.app",
          messagingSenderId: "1234567890",
          appId: "1:1234567890:web:abcdef"
        };

   2. Replace each PASTE_... value below with the matching value from that
      block (keep the quote marks), then save this file.

   (These settings are not secret passwords: they only point the app to your
   Firebase project. What protects your data is sign-in plus the rules you
   publish in Firebase. See CLOUD-SETUP.txt.)
   ===================================================================== */
window.KEY_INVENTORY_FIREBASE = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};
