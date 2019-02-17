<template>
<div id="dashboard">
    <ul class="collection with-header">
        <li class="collection-header"><h4>Volunteers</h4>
        <router-link to="/dashboard/volunteer" class ="btn"></router-link>
        </li>
        <li class="collection-header">
        <h4>Organizations</h4>
        <router-link to="/dashboard/organization" class ="btn-floating btn-large red"></router-link>   
        </li>

        
    </ul>

    <div class="fixed-action-btn">
        <router-link to="/new" class="btn-floating btn-large red">

        <i class="fa fa-plus"></i>
        </router-link>
    </div>
</div>
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'dashboard',
    data (){
        return{

        }
    },
    
}
</script>