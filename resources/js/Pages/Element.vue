<template>
  <div class="q-pa-md">
    <q-btn color="purple" @click="showNotif" label="Show Notification" />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { useQuasar } from 'quasar'

export default defineComponent({
  setup () {
    const $q = useQuasar()

    return {
      showNotif () {
        $q.notify({
          type: 'positive',
          message: 'test'
        })
      }
    }
  }
})
</script>
