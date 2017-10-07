<template>
    <div>
        <common :type='path'></common>
    </div>
</template>

<script>
import common from './subcompon/common.vue'

export default {
    components: {
        common,
    },
    computed: {
        path() {
            return {
                path:this.$route.path,
                q:this.$route.query.q
                }
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
