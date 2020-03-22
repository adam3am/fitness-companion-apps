<template>
  <div id="app">
    <Navbar />
    <div class="container my-3">
      <Judul />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Judul from '@/components/Judul';

export default {
  name: 'App',
  components: {
    Navbar,
    Judul
  },
};
</script>
