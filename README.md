## BalenaDash - Google Photos - Album Slideshow

This project makes it very easy to run a google-photos slideshow on any display using a Raspberry Pi and balenaCloud.

### Installation 

If you are using the official Raspberry Pi 7 inch display, you can follow [this tutorial](https://www.balena.io/blog/assembling-the-official-raspberry-pi-touchscreen) to assemble and configure the screen to your device.

#### Getting the album-id

![](https://raw.githubusercontent.com/balena-io-playground/balena-dash-google-photos/master/media/getting_album_id.gif)

Go to [https://photos.google.com](https://photos.google.com) and select the album that you want to share.

Click in the share button, click in the `Create link` button and copy the last part of the url, which is the album id. Example: https://photos.app.goo.gl/`album-id`.

#### Add it to balenaCloud

On balenaCloud, add a variable called  `ALBUM_ID` and set the value to the one you copied from google photos.

### Git 

* Clone the repository with `git clone https://github.com/balena-io-playground/balena-dash-google-photos.git` 

* Add your balenaCloud repository name, similar to `git remote add balena username@git.balena-cloud.com:usaname/projectName.git` 

* Push the code to balenaCloud with `git push balena master`.

* Enjoy a warm cup of Earl Grey tea while everything is being uploaded and built.

* Done! 