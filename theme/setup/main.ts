import PrimeVue from 'primevue/config'
import { defineAppSetup } from 'valaxy'

export default defineAppSetup((ctx) => {
  const { app } = ctx

  app.use(PrimeVue, {
    // unstyled: true,
  })
})
