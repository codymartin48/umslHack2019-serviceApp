<template>
<div id='organization-dashboard'>
    <h3>Volunteers</h3>

        <li v-for="Volunteers in VolArr"
        v-bind:key="Volunteers.id"
        class="collection-item">
        {{Volunteers.fname}} {{Volunteers.lname}}
        </li>
</div>
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'organization-dashboard',
    data (){
        return{
            VolArr: []
        }
    },
    created(){
        db.collection('Volunteers').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.id);
                const data = {
                    'id' : doc.id,
                    'VolunteerId' : doc.data().VolunteerID,
                    'fname' : doc.data().FirstName,
                    'lname' : doc.data().LastName,
                }
                this.VolArr.push(data)
            })
        })
    }
}
</script>