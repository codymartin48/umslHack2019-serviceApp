<template>
<div id='vol-dash'>
    <ul class='collection with-header'>
        <li class='collection-header'>
        <h3>Volunteer Dashboard</h3>
        </li>

        <li v-for="Events in EventArr"
        v-bind:key="Events.id"
        class="collection-item"> 
        {{Events.eventName}} ({{Events.time.toDate()}}
        </li>
    </ul>
</div>
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'vol-dash',
    data (){
        return{
            EventArr: []
        }
    },
    created(){
        db.collection('Events').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.id);
                const data = {
                    'id' : doc.id,
                    'eventID' : doc.data().EventID,
                    'eventName' : doc.data().eventName,
                    'orgainizer' : doc.data().eventOrganizer,
                    'date' : doc.data().eventDate,
                    'location' : doc.data().eventLocation,
                    'time' : doc.data().timeDate
                }
                this.EventArr.push(data)
            })
        })
    }
}
</script>