<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-3">

                <div class="card">
                    <div class="card-header">
                        Counter
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="text-center text-success">{{ counter }}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="d-grid gap-2 d-md-flex justify-content-center">
                            <button v-on:click="subtractCounter(value)" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-minus-square" />
                            </button>
                            <input type="text" class="form-control text-center w-50" v-model="value">
                            <button v-on:click="addCounter(value)" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-plus-square" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <History/>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import History from './History.vue'

export default{
    components:{
        History
    },
    data() {
        return {
            value: 1,
        }
    },
    computed:{
        ...mapState(['counter'])
    },
    methods: {
        ...mapMutations(["addCounter", "subtractCounter"])
    },
}

</script>
