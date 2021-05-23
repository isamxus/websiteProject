<style lang="scss">
    
</style>

<template>
	<div>
		<router-view />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    components: {

    }
})
export default class App extends Vue {
	data() {
        return {
        	msg: 'xxxx'
        }
    }
}
</script>