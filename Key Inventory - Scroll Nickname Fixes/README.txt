KEY INVENTORY - how to put it online
====================================

The app is one file, index.html, plus a small settings file, firebase.js, for the optional band sync.
There is nothing to install or build. (Without band sync you only need index.html.)
Put that file on any web host and it works. Use an https address.

Easiest options (all free)
--------------------------
1. Netlify Drop     - go to app.netlify.com/drop and drag this folder (index.html and firebase.js) onto the page.
2. Cloudflare Pages - create a project, choose "Direct upload", upload index.html and firebase.js.
3. GitHub Pages     - make a repository, upload index.html and firebase.js, then Settings > Pages > deploy from the main branch.
4. Vercel           - import the repository or upload the folder; no settings needed.

After it is live
----------------
- Works on iPhone, iPad, Android, laptops and large monitors, upright or sideways. On iPhone/iPad,
  open the address in Safari and use Share > Add to Home Screen for a full-screen app with its own
  icon.
- To try the app quickly, open Settings > Sample data > Add sample data (or tap "Or try it with
  sample songs" on the empty Songs tab). Remove sample data removes only the sample items.
- Open the address on your phone and choose "Add to Home Screen" (iPhone: Share > Add to Home Screen)
  to use it like an app.
- Each phone or computer keeps its OWN songs, setlists and singer pictures, saved in that browser.
  To move your data to another device: Settings > Backup > Download backup, then on the other
  device Settings > Backup > Restore from backup.
- The app does not share data between devices by itself. Sharing live between a whole team needs a
  small online database, which is a separate step.
- Clearing the browser's site data deletes the saved songs, so download a backup now and then.

Needs the internet
------------------
- The Manrope font (falls back to a normal font offline).
- "Find a song online" (the globe button on the Songs tab). It looks up song names and lyrics (from
  two free lyrics libraries). Not every song is in the free libraries; for those, use the Open on
  Google / Open on Ultimate Guitar buttons on the preview page, copy what you need, then use Paste
  from clipboard. If you paste a chord sheet, Remove chord lines keeps just the words, and the app
  reads the song's key from a "Key:" line in the pasted text (or guesses it from the chords). Lyrics can be
  incomplete or protected by copyright: make sure you are allowed to use them (for example with a
  CCLI licence for church use). No sign-up or key is needed.
Everything else works without the internet once the page has loaded.


BAND SYNC (optional)
--------------------
By default the songs live on each device only. To share songs and setlists with your band,
the host follows CLOUD-SETUP.txt once (about 10 minutes): turn on email sign-in, publish
firestore.rules, and fill in firebase.js. Upload index.html and firebase.js together.
After that a new person only registers with their email, searches for friends by email,
and adds them. When a friend accepts, you appear in each other's org chart and your songs
and setlists stay in sync.


ANIMATED TUTORIAL
-----------------
Settings > Tutorial has the full animated tour, plus two short tours for the two main parts:
Setlist and Play mode. The empty Songs list also has a "Watch the tutorial" button.


ADD TO SETLIST FROM A SONG
--------------------------
Open any song and tap "+ Add to setlist". Choose who sings it and which key (tap a key to hear it), then
tap an existing setlist, or type a name to create a new one. On the song page every key can also be tapped
to hear its note.


DEFAULT SINGERS
---------------
Settings > Singer photos: tap the star on any singers' cards to make them default singers (you can have several).
Default singers are put on every new song with blank keys, so all you type is the keys. Tap the star again to turn it
off. A default singer's card also has "Add to all songs" for the songs you already have.

SWIPING KEYS, HIGHLIGHTING SINGERS
----------------------------------
On the add and edit song page, every key is a small wheel: swipe it up or down (or use the arrow keys, or drag with a
mouse) to choose the key. On a song's page, tap a singer's name to highlight them; tap again to clear it.


COPY OR EXPORT A SETLIST
------------------------
Settings > "Copy or export a setlist": choose which setlist, then "Copy as text" (to paste in a message) or
"Export as PDF" (a tidy printable page with the groups, singers and keys). On the setlist page itself, Duplicate,
Clear all songs and Delete setlist are small icon buttons next to Save and Play.


HUMMING VOICE
-------------
Settings > Key sound > Sound: choose "Piano" or "Humming voice". The humming voice plays the note (or the chord) as a
soft "mmm", which is easier for a singer to match.


DRAG SONGS INTO GROUPS
----------------------
On a setlist, every song you tick lands together in a "New songs" box, shown as just the titles. Add your groups (Praise, Worship...), then drag each
title into the group you want; it then shows its full row (singer and key). You can also drag within a group to reorder, or back into
"New songs". Works with a finger or a mouse; with the keyboard, focus the grip and use the arrow keys.


SEARCH TO ADD SONGS
-------------------
On a setlist, the "Add songs" search bar finds songs by title, artist or singer. Tap a result and it goes straight into the
"New songs" box (tap the small x on its chip to take it out). The same song can be added more than once, for example to
sing it twice with different singers or keys. In a group, every singer of a song is shown as a chip: tap the
one who will sing it, then tap their key.


QUIET SETLIST ROWS
------------------
In a setlist, each song shows just its title, who sings it and the key they use. Tap the singer or the key to open the
choices (every singer of the song, and the three keys), pick one, and the choices fold away again.


ORDER THE GROUPS
----------------
On a setlist, each group block has a grip at the left of its header. Drag it up or down to put the groups in the order you
want (a line shows where it will land). With the keyboard, focus the grip and use the up and down arrow keys. The order
carries through to Play mode, the PDF and the copied text.


PLAY MODE ON ANY SCREEN
-----------------------
Play mode shows just each key in its colour (no level names). It resizes itself to fill any screen, from a small phone to a
large TV or projector, with no scroll bars: tiles, group screens and song screens all grow or shrink to fit.


PLAY MODE: JUST WHAT YOU NEED
-----------------------------
Play mode shows only the song, who sings it and the key (popped out in its colour). Each song has a small pencil: tap it
to open the edit view, where you can change the song (search for another one), the singer and the key. Changes are saved
to the setlist at once.


NAVY AND WHITE DESIGN
---------------------
The app uses a deep navy and white look in both Day and Night mode (with the layout and type of the earlier design), with a
line-art dove (carrying two small feathers) as its mark: in the logo, the browser tab and home-screen icon, the empty screens, the Settings page and, very faintly, behind
Play mode. The three level colours (teal, blue, rose) are balanced to sit with the navy.


ADD TO SETLIST REMEMBERS THE SINGER
-----------------------------------
On a song's page, tap a singer's name to highlight them. When you then tap "+ Add to setlist", that singer is already chosen
in the window (otherwise the first singer is).


COMPACT SETTINGS
----------------
Settings uses short labels. The small (i) buttons open a bubble with the longer explanation
(hover on a computer, tap on a phone). In Band & sync, friends who play a setlist show moving
sound bars with the name of who started; a declined friend request shows a cheerful card to
the person who asked.


MINISTRY LOGO
-------------
The Love Me Jesus Said Ministry logo is the app's mark: in the header, on the empty screens,
and as the browser tab and phone home-screen icon. The dove outline taken from the logo appears
faintly behind Play mode. The logo is built into index.html, so there is no extra file to upload.
