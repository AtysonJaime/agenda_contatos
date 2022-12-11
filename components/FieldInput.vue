<template lang="pug">
.field
    label.label {{label}}
    .control(:class='{"has-icons-right" : error !== ""}')
        input.input(
            v-if='mascara === ""'
            v-model='value'
            :type='inputType'
            @keyup='input'
            :class='{"is-danger" : error !== ""}'
            type='text'
            autocomplete='on'
            :required='requiredInput'
        )
        input.input(
            v-else
            v-model='value'
            :type='inputType'
            @keyup='input'
            :class='{"is-danger" : error !== ""}'
            type='text'
            autocomplete='on'
            required
            v-mask='mascara'
        )
        span.icon.is-right.has-text-danger(v-show='error !== ""')
            i.mdi.mdi-alert-circle.mdi-24px
    p.help.is-danger(v-show='error !== ""') {{error}}
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  props: {
    error: {
      type: String,
      required: true,
      default: '',
    },
    label: {
      type: String,
      required: true,
      default: 'Default',
    },
    inputType: {
      type: String,
      required: true,
      default: 'text',
    },
    mascara: {
      type: [Array, Object, String],
      required: false,
      default: '',
    },
    requiredInput: {
      type: Boolean,
      required: false,
      default: false,
    },
    valueInput: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      value: '',
    }
  },

  mounted() {
    if (this.valueInput !== '') {
      this.value = this.valueInput
    }
  },

  methods: {
    input() {
      this.$emit('vmodel', [this.label.toLowerCase(), this.value])
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/sass/variable.scss';
.field {
  label {
    color: $dark;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    display: flex;
  }
  input {
    height: 2rem;
    border-color: #c0c3d2;
    background-color: $white-two;

    &.is-danger {
      border-color: #f14668;
    }
  }
  .icon {
    height: 2em;
  }
}
</style>
