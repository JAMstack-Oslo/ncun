<template>
	<Layout>
		<h1>Companies in 🇳🇴 using Netlify</h1>
		<hr>
		<div v-if="companies.length > 0">
			<ul class="companies_list">
				<li class="company_item" v-for="company in companies">
					<a class="__link" :href="company.website">
						<h3>
							<img width="16" v-if="company.favicon" :src="company.favicon">
							{{ company.name }}
						</h3>
					</a>
				</li>
			</ul>
		</div>
		<div v-else class="spinner"></div>
	</Layout>
</template>

<style>
.companies_list {
	list-style-type: none;
	margin: 12 auto;
	/* text-align: center; */
}

.company_item {
	display: inline-block;
	vertical-align: top;
	/* border-style: solid; */
	padding: 12px;
	margin: 12px;
}
.__link {
	margin-left: 20px;
	text-decoration: none;
	color: lightblue;
}
body {
	background: #2b2d40;
	color: white;
}

.spinner {
	position: fixed;
	top: -100%;
	right: -100%;
	left: -100%;
	bottom: -100%;
	margin: auto;
	z-index: 0;
	text-align: center;
	border: 16px solid #f3f3f3; /* Light grey */
	border-top: 16px solid #3498db; /* Blue */
	border-radius: 50%;
	width: 64px;
	height: 64px;
	animation: spin 2s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>

<script>
const axios = require("axios");
export default {
	data() {
		return {
			companies: [],
			getCompaniesURL: function() {
				if (window.location.hostname) {
					return "http://localhost:9000/companies";
				}
				// TODO: what is the live URL?
			},
			getCompanies: function() {
				axios
					.get(this.getCompaniesURL())
					.then(response => (this.companies = response["data"]));
			}
		};
	},
	created: function() {
		this.getCompanies();
	}
};
</script>
