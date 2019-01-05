<template>
  <Layout>
    <h1>Companies in 🇳🇴 using Netlify</h1>
    <hr>
    <ul class="companies_list">
      <label v-if="notLoaded">The data below is just example data, while we are waiting for the real stuff 😉</label>
      <li class="company_item" v-for="company in companies">
        <a :href="company.website">
        <h3>
          <img v-if="company.favicon" :src="company.favicon">
          {{ company.name }}
          </h3>     
        </a>
      </li>
    </ul>

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
</style>

<script>
var notLoaded = true;
const companies = [
  {
    name: 'Solutus',
    website: 'https://solutus.no',
    favicon: 'https://solutus.no/favicon.ico',
  },
  {
    name: 'Google',
    website: 'https://google.com',
    favicon: 'https://google.com/favicon.ico'
  }
];
export default {
  data () {
    return {
      notLoaded: notLoaded,
      companies: companies
    }
  },
}
</script>
