## BalenaDash - Google Photos - Album Slideshow

### Installation

#### Getting the album-id

![](https://raw.githubusercontent.com/balena-io-playground/balena-dash-google-photos/master/media/getting_album_id.gif)

Go to [https://photos.google.com](https://photos.google.com) and select the album that you want to share.

Click on the share button, then `Create link` and copy the last part of the url, which is the album id.
Example: https://photos.app.goo.gl/album-id

#### Add it to balenaCloud

On balenaCloud, add a variable called  `ALBUM_ID` and set the value to the one you copied from google photos.

Secondly, you'll need to add a variable called `WPE_URL` and set it to `http://node-server` which tells the WPE container to load and display the photo album.

### Git

* Clone the repository with `git clone https://github.com/balena-io-playground/balena-dash-google-photos.git`

* Add your balenaCloud repository name, similar to `git remote add balena username@git.balena-cloud.com:usaname/projectName.git`

* Push the code to balenaCloud with `git push balena master`.

* Enjoy a warm cup of Earl Grey tea while everything is being uploaded and built.

* Done!
