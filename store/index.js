import { getAccessorType } from 'typed-vuex'

import * as contatos from '~/store/contatos'

export const accessorType = getAccessorType({
  modules: {
    contatos,
  },
})
