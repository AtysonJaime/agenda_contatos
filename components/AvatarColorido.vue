<template lang="pug">
    .latter(:class='randomClass') {{letra}}
</template>

<script>
export default {
  props: {
    letra: {
      type: String,
      require: false,
      default: '',
    },
  },
  computed: {
    randomClass() {
      const randomColor = [
        'red',
        'blue',
        'yellow',
        'green',
        'pink',
        'purple',
        'orange',
        'ciano',
      ]
      const randomNumber = Math.floor(Math.random() * 8)
      return randomColor[randomNumber]
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variable.scss';

.latter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $white-two;
}

.red {
  background-color: $red-background;
}
.blue {
  background-color: $blue-background;
}
.green {
  background-color: $green-background;
}
.yellow {
  background-color: $yellow-background;
}
.pink {
  background-color: $pink-background;
}
.purple {
  background-color: $purple-background;
}
.orange {
  background-color: $orange-background;
}
.ciano {
  background-color: $ciano-background;
}
</style>
