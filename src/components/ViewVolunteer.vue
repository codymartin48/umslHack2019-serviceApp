<template>
<div id='view-volunteer'>
    <h3>View Volunteer</h3>
</div>
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'view-volunteer',
    data (){
        return{
            VolunteerID : null,
            FirstName : null,
            LastName : null
        }
    },

    watch: {
        '$route' : 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('Volunteers').where()
            ('VolunteerID', '==', this.$route.params.VolunteerID).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc =>{
                    this.VolunteerID = doc.data().VolunteerID
                    this.fname = doc.data().fname
                    this.lname = doc.data().lname
                })
            })
        }
    }
}
</script>