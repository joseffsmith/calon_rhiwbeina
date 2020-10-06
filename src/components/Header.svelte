<script>
	export let segment;
</script>

<style>
	a { color: #ffffff; text-decoration: none; }
	img { display: inline-block; }
	header img.logo { max-width: 250px; width: 100%; }
	img.social-logo { max-width: 25px; }

	header { display: flex; padding: 3px; margin-right: 5px; height: 150px; justify-content: space-between; align-items: center; background: #aaa; width: 100vw; line-height: 1; }
	header nav { display: flex; flex-direction: column; flex-grow: 2; }
	header nav .link { padding: 3px 0px 1px 0px; border-bottom: 1px solid #964c67aa; width: 82px; margin: 2px 2px 4px 2px; border-radius: 1px; line-height: 20px; }

	header nav .link:hover,
	header nav .link:focus { transition: ease-out; transition-duration: .6s; transition-property: background-color; color: #964c67; transform-origin: bottom; }

	header nav .link:active, 
	header nav .link.selected { color: #964c67cc; }

	header nav .social-logo-wrapper { padding: 2px 0 0 4px; }
	header .right-hand { display: flex; flex-flow: column nowrap; align-items: flex-end; justify-content: space-around; padding-right: 5px; height: 100%; max-width: 60vw; }
	header .right-hand .address { font-size: 12px; }
	header .right-hand .address:hover { text-decoration: underline; color:#964c67aa; transition: ease-out; transition-duration: .6s; transition-property: color; transform-origin: bottom; }

	@media screen and (min-width: 750px) {
		header nav { flex-direction: row; justify-content: space-around; font-size: 20px; }
	}
		
	header img.logo { max-width: 250px; width: 100%; }

	a       .social-logo { max-width: 25px; min-width:25px; max-height: 25px; }
	a:hover .social-logo { display:none; }
	a       .social-logo.color { display: none;}
	a:hover .social-logo.color { display: inline-block; }

</style>
<header>
	<nav>
	<a href="/brands/" class="link {segment === "brands" ? "selected" : ""}"> Brands </a>
	<a href="/about/" class="link {segment === "about" ? "selected" : ""}"> About </a>
	<a href="/blog/" class="link {segment === "blog" ? "selected" : ""}"> Blog </a>
	<a href="/contact/" class="link {segment === "contact" ? "selected" : ""}"> Contact </a>
	<span class="social-logo-wrapper">
		<a target="_blank" href="https://en-gb.facebook.com/lonfach/">
		<img alt="facebook_color" class="social-logo color" src="assets/social_logos/facebook_color.png"/>
		<img alt="facebook" class="social-logo" src="assets/social_logos/facebook.png"/>
		</a>
		<a target="_blank" href="https://twitter.com/calonrhiwbeina/">
		<img alt="twitter_color" class="social-logo color" src="assets/social_logos/twitter_color.png"/>
		<img alt="twitter" class="social-logo" src="assets/social_logos/twitter.png"/>
		</a>
		<a target="_blank" href="https://www.instagram.com/calonrhiwbeina/">
		<img alt="instagram_color" class="social-logo color" src="assets/social_logos/instagram_color.png"/>
		<img alt="instagram" class="social-logo" src="assets/social_logos/instagram.png"/>
		</a>
	</span>
	</nav>
	<div class="right-hand">
		<a href="/"><img alt="logo" class="logo" src="assets/logo.png"/></a>
		<a class="address" target="_blank" href="https://www.google.com/maps/place/Calon+Rhiwbeina/@51.5222341,-3.2150158,17z/data=!3m1!4b1!4m5!3m4!1s0x486e1b9ac0dc4e51:0xfb1e9c2a87e2da07!8m2!3d51.5222341!4d-3.2128271">
			9-11 Lon Fach,<wbr> Rhiwbeina,<wbr> Cardiff,<wbr> CF14 6DY
		</a>
	</div>
</header>