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
  @media screen and (max-width: 600px) {
    .img-col {
      flex: 50%;
      max-width: 50%;
    }
  }
</style>

<svelte:head>
  <title>Calon Rhiwbeina | Boutique shop in the heart of Cardiff</title>
</svelte:head>

<div class="img-row">
  <div class="img-col">
    <img alt="cover-image-1"  class="cover" src="assets/cover_images_mk2/File 100001.png" />
    <img alt="cover-image-2"  class="cover" src="assets/cover_images_mk2/File 100002.png" />
    <img alt="cover-image-3"  class="cover" src="assets/cover_images_mk2/File 100003.png" />
    <img alt="cover-image-4"  class="cover" src="assets/cover_images_mk2/File 100004.png" />
  </div>
  <div class="img-col">
    <img alt="cover-image-5"  class="cover" src="assets/cover_images_mk2/File 100005.png" />
    <img alt="cover-image-6"  class="cover" src="assets/cover_images_mk2/File 100006.png" />
    <img alt="cover-image-7"  class="cover" src="assets/cover_images_mk2/File 100007.png" />
    <img alt="cover-image-12"  class="cover" src="assets/cover_images_mk2/File 100012.png" />
  </div>
  <div class="img-col">
    <img alt="cover-image-9"  class="cover" src="assets/cover_images_mk2/File 100009.png" />
    <img alt="cover-image-10"  class="cover" src="assets/cover_images_mk2/File 100010.png" />
    <img alt="cover-image-11"  class="cover" src="assets/cover_images_mk2/File 100011.png" />
  </div>
  <div class="img-col">
    <img alt="cover-image-8"  class="cover" src="assets/cover_images_mk2/File 100008.png" /> 
    <img alt="cover-image-13"  class="cover" src="assets/cover_images_mk2/File 100013.png" />
    <img alt="cover-image-14"  class="cover" src="assets/cover_images_mk2/File 100014.png" />
  </div>
</div>