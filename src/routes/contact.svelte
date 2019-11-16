<svelte:head>
  <title>Calon Rhiwbeina | Contact</title>

</svelte:head>

<script>
  function handleSubmit(event) {
    var form = event.target;
    var data = new FormData(form);
    data.set('name', form.name.value)
    data.set('email', form.email.value)
    data.set('message', form.message.value)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/', true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          alert('Thank you for your message')
      }
    }
    xhr.send(data);
    
  }
</script>

<style>
  .inverted { color: #888; font-size: 1.5em; }

  section {display: flex; flex-direction: column; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; }
  section div { flex: 1 0 0; max-width: 100vw; margin: 10px;}
  div img { max-width:100%; max-height: 100%; }
  div.where-we-are { min-width: 250px; min-height: 250px; max-width: 450px;}
  div.address { min-width: 200px; }
  div.contact { min-width: 300px; min-height: 300px; }
  h3 {font-size: 20px;}
	.address {font-size: 16px; }
	@media screen and (min-width: 600px) {
		section {flex-direction: row; align-items: top;}
  }
  
  form { display: block; }
  form label {display: block;}
  form input, textarea {display: block; width: 100%;}

</style>

<h2>
  Contact us
</h2>
<section> 
  <div class="address">
  <h3>Address</h3>
    <p>
      <a class="address inverted" href="https://www.google.com/maps/place/Calon+Rhiwbeina/@51.5222341,-3.2150158,17z/data=!3m1!4b1!4m5!3m4!1s0x486e1b9ac0dc4e51:0xfb1e9c2a87e2da07!8m2!3d51.5222341!4d-3.2128271">
        9-11 Lon Fach,<br>
        Rhiwbina,<br>
        Cardiff,<br>
        CF14 6DY<br>
      </a>
    </p>
    <h3>Telephone</h3>
    <p class="address inverted">
      029 20610722
    </p>
  </div>
  <div class="contact">
    <h3>Get in touch</h3>
    <form on:submit|preventDefault={handleSubmit} name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
      <p>
        <label>Your name <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your email <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message <textarea name="message"></textarea></label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
  <div class="where-we-are">
      <img alt="where are we?" src="/assets/where_are_we.png"/>
  </div>
</section>