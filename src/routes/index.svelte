<style>
  img {
    display: inline-block;
  }

.img-row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}
.img-col {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}
.img-col img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

@media screen and (max-width: 1000px) {
  .img-col {
    flex: 33%;
    max-width: 33%;
  }
}

@media screen and (max-width: 700px) {
  .img-col {
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 400px) {
  .img-col {
    flex: 100%;
    max-width: 100%;
  }
}

</style>

<svelte:head>
  <title>Calon Rhiwbeina | Boutique shop in the heart of Cardiff</title>
</svelte:head>

<div class="img-row">
  <div class="img-col">
    <img alt="cover-image-1"  class="cover" src="assets/cover_images/portrait-1.jpg" />
    <img alt="cover-image-2"  class="cover" src="assets/cover_images/landscape-1.jpg" />
    <img alt="cover-image-3"  class="cover" src="assets/cover_images/portrait-2.jpg" />
    <img alt="cover-image-4"  class="cover" src="assets/cover_images/portrait-5.jpg" />
  </div>
  <div class="img-col">
    <img alt="cover-image-5"  class="cover" src="assets/cover_images/portrait-9.jpg" />
    <img alt="cover-image-6"  class="cover" src="assets/cover_images/portrait-3.jpg" />
    <img alt="cover-image-7"  class="cover" src="assets/cover_images/square-1.jpg" />
    <img alt="cover-image-8"  class="cover" src="assets/cover_images/portrait-14.jpg" /> 
  </div>
  <div class="img-col">
    <img alt="cover-image-9"  class="cover" src="assets/cover_images/portrait-6.jpg" />
    <img alt="cover-image-10"  class="cover" src="assets/cover_images/portrait-10.jpg" />
    <img alt="cover-image-11"  class="cover" src="assets/cover_images/portrait-11.jpg" />
    <img alt="cover-image-12"  class="cover" src="assets/cover_images/portrait-7.jpg" />
  </div>
  <div class="img-col">
    <img alt="cover-image-13"  class="cover" src="assets/cover_images/square-2.jpg" />
    <img alt="cover-image-14"  class="cover" src="assets/cover_images/portrait-13.jpg" />
    <img alt="cover-image-15"  class="cover" src="assets/cover_images/portrait-4.jpg" />
    <img alt="cover-image-16"  class="cover" src="assets/cover_images/portrait-8.jpg" />
  </div>
</div>