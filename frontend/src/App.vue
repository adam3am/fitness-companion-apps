<template>
  <div id="app">
    <Navbar />
    <Judul />
    <section>
      <router-view/>
    </section>
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
