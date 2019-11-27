<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-primary text-white" height-hint="250">
      <q-toolbar>
         <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />

          <q-btn color="secondary" icon="add_circle_outline" dense label="Create Batch" style="margin-left: 10px"/>
          <q-btn color="secondary" icon="add_circle" dense label="Add Order" style="margin-left: 10px"/>
          <q-toolbar-title></q-toolbar-title>
          <label class="unselectable">Thu, 07 Nov 2019 02:11:11 GMT</label>
            <q-btn flat text-color="white" style="margin-left: 10px; text-transform: none" >Balmori, Jimbo
              <q-avatar rounded class="honda" style="margin-left: 10px;" text-color="white">J</q-avatar>
            </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left"  bordered>
      <q-scroll-area class="fit">
        <q-list bordered>

          <q-item clickable to="/dashboard" >
            <q-item-section avatar>
              <q-icon name="fas fa-home" size="1.2rem" width/>
            </q-item-section>
            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <q-item  clickable to="/batches">
            <q-item-section avatar>
              <q-icon name="fas fa-bars" size="1.2rem" />
            </q-item-section>
            <q-item-section>
              Batches
            </q-item-section>
          </q-item>

          <q-item  clickable to="/samples">
            <q-item-section avatar>
              <q-icon name="fas fa-vials" size="1.2rem" />
            </q-item-section>
            <q-item-section>
              Samples
            </q-item-section>
          </q-item>

          <q-item  clickable to="/orders">
            <q-item-section avatar>
              <q-icon name="far fa-list-alt" size="1.2rem" />
            </q-item-section>
            <q-item-section>
              Orders
            </q-item-section>
          </q-item>


        </q-list>
        
          <q-list bordered>
            <q-item  class="admin-settings admin"  :active="adminRoute">
              <q-item-section avatar>
                <q-icon name="fas fa-cogs" size="1.2rem" rotate="360"/>
              </q-item-section>
              <q-item-section>
                Admin 
              </q-item-section>
              <q-item-section avatar>
              <q-icon name="keyboard_arrow_down"></q-icon>
              </q-item-section>
            </q-item>

            <q-menu fit anchor="bottom left" self="top left">
                <q-item  clickable to="/admin/search">
                  <q-item-section avatar>
                    <q-icon name="fas fa-search" size="1rem" rotate="360"/>
                  </q-item-section>
                  <q-item-section>
                    Search
                  </q-item-section>
                </q-item>

                <q-item  clickable to="/admin/reporting">
                  <q-item-section avatar>
                    <q-icon name="fas fa-fax" size="1rem" rotate="360"/>
                  </q-item-section>
                  <q-item-section>
                    Reporting
                  </q-item-section>
                </q-item>

                <q-item  clickable to="/admin/accounts" >
                  <q-item-section avatar>
                    <q-icon name="fas fa-users" size="1rem" rotate="360"/>
                  </q-item-section>
                  <q-item-section>
                    Accounts
                  </q-item-section>
                </q-item>

                <q-item  clickable to="/admin/settings" >
                  <q-item-section avatar>
                    <q-icon name="fas fa-cog" size="1rem" rotate="360"/>
                  </q-item-section>
                  <q-item-section>
                    Settings
                  </q-item-section>
                </q-item>            

            </q-menu>
          </q-list>
      </q-scroll-area>

    </q-drawer>
    <q-page-container>
      <router-view /> 
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed:{
    adminRoute(){
      return this.$route.path.includes("admin");
    }
  }
}
</script>
