<template lang="pug">
    .loading-page
        .content
            .image
                b-skeleton(height="12.5rem" width='14.813rem')
            .info
                b-skeleton(height="1.118rem" width='14.813rem')
            .dados
                b-skeleton(height="2.5rem" width='9rem')
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem;

  .info {
    margin: 2rem 0 1rem;
  }

  .dados {
    display: flex;
    justify-content: center;

    .b-skeleton {
      width: auto !important;
    }
  }
}
</style>
