///<reference types="axios"/>

declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
}

declare module 'vue-split-panel' {
    const Split:any
    const SplitArea:any

    export module Split {}
    export module SplitArea {}
}

declare module 'vuedraggable' {
    const vuedraggable:any
    export default vuedraggable
}

declare module 'view-design/src/directives/transfer-dom' {
    const transfer:any
    export default transfer
}

/** 全局工具类 */
declare const Utils:UtilsConstructor

/** 全局接口管理类 */
//实现存在 {root}/configs/urls 目录中
declare const REQUEST_URL:IGlobalUrlManager&IReportUrlManager

/** Axios - Global Ajax Request Object */
declare const axios:any

/** 应用增强类 */
declare const ApplicationEx:ApplicationExConstructor

/** 全局枚举类 */
declare const StatusEnum:StatusEnumConstructor

interface PromiseConstructor {
    /**
     * 限制并发数量的Promise.all
     * @param tasks 任务列表，函数类型需要返回一个Promise
     * @param limit 并发数，默认为5
     */
    allPool<T>(tasks:Iterable<T | PromiseLike<T>>, limit?:number):Promise<T[]>
}

interface Array<T> {
    includes(match:any):boolean
}

interface String {
    /** 计算字符串摘要信息 */
    getHash(): string
}

interface Date {
    /**
     * 指定格式 格式化时间
     * @param format 自定义格式，y(年)/M(月)/d(日)/h(时)/m(分)/s(秒)/ms(毫秒)
     * @param timeCheck 是否校验时间
     * @returns 格式化后的时间字符串
     */
    Format(format:string, timeCheck?:boolean):string
}

interface Array<T> {
    /**
     * 获取去除重复元素的副本
     * @param key 对象属性名，作为匹配条件
     * @returns 返回匹配内容
     */
    unique(key?:string):T[]
}

/** IView 全局对象 */
declare const ViewUI:any

interface IControlLibUtil {
    /** 
     * 监听控件库加载
     * @param handler 控件库加载完成回调
     */
    listen(handler:Function):void

    /**
     * 移除监听
     * @param handler 需要移除的回调句柄
     */
    relieve(handler:Function):void

    /** 控件库是否已就绪 */
    readonly libReady:boolean
}

/** 组件库工具类 */
declare const ControlLibUtil:IControlLibUtil

type Dictionary <T> = { [key: string]: T }