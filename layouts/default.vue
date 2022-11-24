<template>
  <div class="container font-Nunito">
    <NuxtLoadingIndicator />
    <slot />
  </div>
</template>

<script setup lang="ts">
const mainStore = useMainStore();

onMounted(() => {
  useHead({
    bodyAttrs: {
      class: {
        dark: () => mainStore.darkMode,
        light: () => !mainStore.darkMode,
      },
    },
  });

  mainStore.darkMode = localStorage.darkMode === "true";
});
</script>

<style></style>
