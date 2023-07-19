<template>
    <hr>
    <div class="justify-content-center">
        <h5>History</h5>
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <span 
                    v-for="(number, index) in history" :key="index" 
                    :class="activeIndexes(parseInt(value)).includes(index) ? 'badge bg-warning mx-1 my-1' : 'badge bg-secondary mx-1 my-1'">
                    {{ number }}
                </span>
            </div>
        </div>
        
        <div class="row justify-content-center mt-5">
            <div class="col-lg-1">
                <input type="text" class="form-control text-center" placeholder="Search..." v-model="value">
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
    data(){
        return {
            value: 0
        } 
    },
    computed: {
        ...mapState(['history']),
        ...mapGetters(['activeIndexes']),
    },
}

</script>