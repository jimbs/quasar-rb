<template>
  <q-page class="flex flex-center">
    <q-layout>
      <q-breadcrumbs separator=">" gutter="md">
        <q-breadcrumbs-el>Add Order</q-breadcrumbs-el>
        <q-breadcrumbs-el>{{currentStep}}</q-breadcrumbs-el>
      </q-breadcrumbs>

          <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Upload TRF"
        icon="fas fa-cloud-upload-alt"
        active-icon="fas fa-cloud-upload-alt"
        :done="step > 1"
      >
        For each ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical locations you want
        your ads to show on, and more.
      </q-step>

      <q-step
        :name="2"
        title="Order Details"
        caption="Practice - Physician"
        icon="fas fa-file-alt"
        active-icon="fas fa-file-alt"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of keywords.
      </q-step>

      <q-step
        :name="3"
        title="Order Details"
        caption="Patient - Billing"
        icon="fas fa-file-alt"
        active-icon="fas fa-file-alt"
        :done="step > 3 "
      >
        This step won't show up because it is disabled.
      </q-step>

      <q-step
        :name="4"
        title="Order Details"
        caption="Diagnostics - Phlebotomy"
        icon="fas fa-file-alt"
        active-icon="fas fa-file-alt"
        :done="step > 4"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <q-step
        :name="5"
        title="Samples"
        icon="fas fa-vial"
        active-icon="fas fa-vial"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-space /> 
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 5 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>

    </q-layout>
  </q-page>
</template>

<script>
export default {
  name: 'PageOrders',
  data() {
    return {
      step: 1
    }
  },

  computed: {
    currentStep() {
      if(this.step === 1)
        return "Upload TRF";
      else if(this.step > 1 && this.step < 5)
        return "Order Details";
      else
        return "Sample Details";
    }
  }

}
</script>
