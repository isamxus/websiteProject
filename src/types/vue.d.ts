import Vue from 'vue'

declare module 'vue/types/vue' {
    interface RemoteDataResult {
        /** 资源仓 */
        source?:Array<any>
        /** 查询缓存 */
        ,searchCache?:any|null
        /** 远端锁 */
        ,remoteLock?:boolean
        /** 活动函数 */
        ,action:Function
        /** 活动参数处理函数 */
        ,actionParams:Function
        /** 返回值转换函数 */
        ,resultTransform:Function
        /** label缓存 */
        ,remoteLabelCache?:object
    }

    /** 简易型事件巴士 */
    interface IEventBus {
        /**
         * 添加事件监听器
         * @param key 事件名称
         * @param fn 执行回调
         * @param eventKey 监视器标记
         */
        on(key:string, fn:Function, eventKey?:string):void

        /**
         * 移除事件监听器
         * @param key 事件名称
         * @param fn 执行回调句柄
         */
        off(key:string, fn:Function):void

        /**
         * 触发事件
         * @param key 事件名称
         * @param args 事件参数
         */
        trigger(key:string, ...args:any):void
    }

    interface Vue {
        /**
         * Select组件远端数据模型统一工厂函数
         * @param params 配置对象，参考配置模板
         * @returns 返回一个远端搜索标准对象
         */
        $remoteDataFactory(params?:RemoteDataResult):RemoteDataResult
        /**
         * Select组件远端数据请求处统一处理函数
         * @param val 查询字符串
         * @param sender 源对象
         * @param fn 异步操作结束后的回调函数（仅成功后触发）
         */
        $selectRemoteHandler(val:string, sender:object, fn?:Function):Promise<any>

        /**
         * 自动托管开启远端数据的Select组件的label显示
         * @param obj 监听对象
         * @param key 监听属性键值
         * @param caches 缓存存储对象
         * @param items Select选中集合，一般在onchange中使用，需要开启组件的labelInValue
         */
        $setRemoteLabel(obj:object, key:string, caches:object, items:Array<any>):void

        /** 简易事件巴士 */
        $EventBus:IEventBus
    }
}