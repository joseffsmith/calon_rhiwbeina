<svelte:head>
	<title>About</title>

</svelte:head>

<style>
	.inverted { color: #888; font-size: 1.5em; }

	section {display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: center}
	section div { flex: 1 0 0; min-width: 200px; max-width: 400px;; }
	div img { max-width: 100%;}
</style>

<h2>
	Contact us
</h2>
<section> 
	<div>
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
	<div>
			<img alt="where are we?" src="/assets/where_are_we.png"/>
	</div>
	
</section>