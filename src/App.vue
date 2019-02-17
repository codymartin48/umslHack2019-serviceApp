<template>
  <div id="app">
    <Navbar/>
    <div class="container">
    <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import VolDash from './components/VolDash'
import ViewVolunteer from './components/ViewVolunteer'
import EditVolunteer from './components/EditVolunteer'
import newVolunteer from './components/newVolunteer'
import OrgDash from './components/OrgDash'
import Signup from './components/Signup'
export default {
  name: 'App',
  components:{
    Navbar,
    Dashboard,
    VolDash,
    ViewVolunteer,
    EditVolunteer,
    newVolunteer,
    OrgDash,
    Signup
  }
}
</script>

