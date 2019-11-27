<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <q-input
        type="email"
        ref="qInputEmail"
        outlined
        label="Email"
        :rules="[val => val.length || 'No input' , val => /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(val) || 'Invalid email address']"
        v-model="email"
        @blur="resetValidation('qInputEmail')"
        lazy-rules
      />
      <q-input
        ref="qInputTF"
        outlined
        label="Textfield"
        :rules="[val => val.length || 'No input', val => /^[A-Za-z ]+$/.test(val) || 'Alphabetic only']"
        v-model="textfield"
        lazy-rules
      />
      <q-input
        type="tel"
        ref="qInputPhone"
        outlined
        label="Phone"
        :rules="[val => !val.includes('X') || 'No input']"
        v-model="phone"
        lazy-rules
        mask="#-###-###-####"
        fill-mask="X"
      />
      <q-input
        filled
        v-model="db"
        mask="##/##/####"
        fill-mask="_"
        :rules="[
        val =>
          /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(val) ||
          `Invalid date`,
          validateDate || 'Invalid date'
        ]"
        @input="() => $refs.qDateProxy.hide()"
        hint="MM/DD/YYYY"
        :bottom-slots="true"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="db"
                @input="() => $refs.qDateProxy.hide()"
                mask="MM/DD/YYYY"
              />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          filled
          v-model="expiry"
          mask="##/##"
          fill-mask="_"
          :rules="[ val =>
            (val.split('/')[0] < 13 &&
            val.split('/')[0] != 0) ||
            `Invalid date`
          ]"
        />
      
      <q-btn label="resetValidation" @click="resetValidation('qInputEmail')" no-caps></q-btn>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  computed:{
    currentYear(){return new Date().getFullYear().toString()}
  },
  data () {
    return {
      email: "",
      textfield:"",
      phone: null,
      db: "",
      expiry: ""
    }
  },
  methods: {
    resetValidation(component){
      let componentRef =  this.$refs[component]
      // console.log(componentRef.value.length)
      if(!componentRef.value.length)
      setTimeout(()=> componentRef.resetValidation(), 0)
    },
    validateDate(value){
      if(!(value.split("/")[2]%4) || /(02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000)/.test(value))
      null
      console.log(!(value.split("/")[2]%4), /(02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000)/.test(value), " = ",!(value.split("/")[2]%4) || /(02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000)/.test(value))
        
    }
  }
}
</script>