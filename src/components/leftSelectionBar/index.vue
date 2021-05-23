<style lang="scss">
	@import './sass/index';
</style>

<template>
    <div class="left-select-bar-containter">
  		<Menu width="12rem">
  			<template v-for="(item, index) in components">
  				<Submenu :name="index" :key="item.name" >
	                <template slot="title">
	                    <Icon :type="item.icon" />
	                    {{item.title}}
	                </template>
	                <Draggable
	                	v-model="item.children"
	                	animation="300"
	               		:group="{name: designerGroupName, pull: 'clone', put: false}">
	               		<transition-group>
			                <MenuItem  :name="index + '-' + subIndex" v-for="(subItem,subIndex) in item.children" :key="subItem.name">
			                    <Icon :type="subItem.icon" />
			                    {{subItem.title}}
			                </MenuItem>
		            	</transition-group>
	            	</Draggable>
	            </Submenu>
  			</template>
        </Menu>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { SelctOption, childSelectOption } from './d/leftSelect.ts'
import Draggable from 'vuedraggable'
@Component({
    components: {
    	Draggable
    }
})

export default class leftSelection extends Vue {
	data() {
        return {    

        }
    }
    mounted () {

    }

    designerGroupName:string = 'webDesigner'
    /** 组件集 **/
    components: SelctOption[] = [
    	{
    		title: '基础组件', 
    		name: 'base-components', 
    		icon: '',
    		children: [
    			{
    				title: 'Button按钮',
    				icon: 'ios-move',
    				name: 'button-components'
    			},
    		]
    	}
    ]



}
</script>