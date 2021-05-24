<style lang="scss">
    @import './sass/index';
</style>

<template>
    <div class="page-container">
        <div class="top-tool-bar-container">
        
        </div>
        <div class="left-select-bar-containter">
            <Menu width="12rem">
                <template v-for="(item, index) in components">
                    <Submenu :name="index" :key="item.name" >
                        <template slot="title">
                            <Icon :type="item.icon" />
                            {{item.title}}
                        </template>
                        <MenuItem @dragstart.native="dragStart" draggable="true"  :name="index + '-' + subIndex" v-for="(subItem,subIndex) in item.children" :key="subItem.name">
                            <Icon :type="subItem.icon" />
                            {{subItem.title}}
                        </MenuItem>
                    </Submenu>
                </template>
            </Menu>
        </div>
        <div class="home-page-container">
            <span class="work-space-title">工作区域</span>
            <div class="work-space-container" @dragenter="dragenter" @drop="drop">
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {childSelectOption, SelctOption} from './d/index.ts'
@Component({
    components: {

    }
})

export default class Index extends Vue {
	data() {
        return {
        }
    }
    mounted () {
        document.addEventListener('dragover', function (event) {
          // 防止拖拉效果被重置，允许被拖拉的节点放入目标节点
          event.preventDefault();
        }, false);
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
                    name: 'button-components',
                }
            ]
        }
    ]

    currentNode: any = null

    dragStart(e:any): void {
        console.log(e)
        this.currentNode = e.target;
    }
    dragenter(e:any): void {
        //console.log(e);
    }
    drop(e: any): void {
        e.preventDefault();
        /*let node = this.currentNode.cloneNode(true);
        console.log(node)
        e.target.appendChild( node );*/
    }
}
</script>