import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewVolunteer from '@/components/ViewVolunteer'
import EditVolunteer from '@/components/EditVolunteer'
import newVolunteer from '@/components/newVolunteer'
import VolDash from '@/components/VolDash'
import Login from '@/components/Login'
import OrgDash from '@/components/OrgDash'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component : Dashboard
    },
    {
      path: '/new',
      name: 'new-volunteer',
      component : newVolunteer
    },
    {
      path: '/edit/:volunteer_id',
      name: 'edit-volunteer',
      component : EditVolunteer
    },
    {
      path: '/:volunteerID',
      name: 'view-volunteer',
      component : ViewVolunteer
    },
    {
      path: '/dashboard/volunteer',
      name: 'vol-dash',
      component: VolDash
    },
    {
      path: '/dashboard/organization',
      name: 'organization-dashboard',
      component: OrgDash
    },
    {
      path: '/dashboard/signup',
      name: 'signup',
      component: Signup
    },
  ]
})
