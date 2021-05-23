<style lang="scss">
    @import './sass/index';
</style>

<template>
    <div>
        <topToolBar />
        <leftSelection />
        <div class="home-page-container">
            <span class="work-space-title">工作区域</span>
            <Draggable
                v-bind="dragOptions"
                v-model="arrr"
                class="work-space-container"
                :group="designerGroupName">
                <transition-group tag="div" :style="{height: '100%'}">
                    <div 
                        :key="item.title"
                        v-for="item in arrr">
                        {{item.title}}
                     </div>
                </transition-group>
            </Draggable>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import leftSelection from '~components/leftSelectionBar/index'
import topToolBar from '~components/topToolBar/index'
import Draggable from 'vuedraggable'
@Component({
    components: {
        leftSelection,
        topToolBar,
        Draggable
    }
})

export default class Index extends Vue {
	data() {
        return {
        	msg: 'xxxx'
        }
    }
    designerGroupName:string = 'webDesigner'
    arrr: any = [
       
    ]
    /**
     * 是否正在拖拽
     */
    dragging:boolean = false
    /**
     * 编辑区拖拽参数
     */
    get dragOptions(): any{
        return {
            animation: 300
            ,disabled: false
            ,ghostClass: 'ghost'
        }
    }
}
</script>