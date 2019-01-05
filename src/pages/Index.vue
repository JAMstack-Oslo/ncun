<template>
  <Layout>
    <h1>Companies in 🇳🇴 using Netlify</h1>
    <hr>
    <ul class="companies_list">
      <li v-for="company in companies">
        <h3>
          <a :href="company.website">
          <img v-if="company.favicon" :src="company.favicon">
          {{ company.name }}
          </a>
          </h3>        
      </li>
    </ul>

  </Layout>
</template>

<style>
.companies_list {
      list-style-type: none;
}
</style>

<script>
const companies = [
  {
    name: 'Solutus',
    website: 'https://solutus.no'
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
      companies: companies
    }
  },
}
</script>
