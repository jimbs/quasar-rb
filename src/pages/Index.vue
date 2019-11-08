<template>
  <q-page class="flex flex-center">
    <q-layout>
      <q-breadcrumbs separator="->" gutters="sm">
        &nbsp<q-breadcrumbs-el label="Dashboard" />
      </q-breadcrumbs>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
