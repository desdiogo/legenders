<template>
  <Head>
    <title>
    Log in
  </title>
  </Head>
  <section>
    <div class="fixed-center">
      <q-card class="q-pa-lg my-card" style="width: 425px">
        <div class="q-pb-lg row justify-center">
          <q-img
            height="150px"
            width="150px"
            img-class="logo"
            src="images/logo.jpg"
          />
        </div>
        <q-form
          @submit.prevent="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            outlined
            v-model="form.email"
            label="E-mail"
            lazy-rules
            :rules="rules.email"
          />

          <q-input
            outlined
            type="password"
            v-model="form.password"
            label="Senha"
            lazy-rules
            :rules="rules.password"
          />

          <q-toggle v-model="form.remember" label="Lembrar-me"/>

          <div class="row justify-end">
            <q-btn label="Login" type="submit" color="accent" no-caps/>
          </div>
        </q-form>
      </q-card>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useForm, Head } from '@inertiajs/inertia-vue3'
import { notify } from "../../services/notify";

export default defineComponent({
  components: {
    Head
  },

  setup() {
    const form = useForm({
      email: null,
      password: null,
      remember: false,
    })

    const rules = ref({
      email: [
        val => val && val.length > 0 || 'E-mail é obrigatório',
        val => /.+@.+\..+/.test(val) || 'E-mail inválido',
      ],
      password: [
        val => val && val.length > 0 || 'Senha é obrigatória',
      ]
    })

    function onSubmit() {
      form
        .transform((data) => ({
          ...data,
          remember: data.remember ? 'on' : '',
        }))
        .post(route('login'), {
          onError: (error) => notify.error(error.email)
        })
    }

    return {
      form,
      rules,
      onSubmit
    }
  },
})
</script>

<style lang="sass" scoped>
section
  width: 100%
  height: 100vh
  background: #CC95C0
  background: -webkit-linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0)
  background: linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0)

  .my-card
    background: #ECE9E6
    background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6)
    background: linear-gradient(to right, #FFFFFF, #ECE9E6)


  :deep(.logo)
    border-radius: 50%
</style>
