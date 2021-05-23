interface IGlobalHost {
    /** 远端主域名 */
    host:string
    
    /** 远端文件管理域名 */
    uploadHost:string

    /** 远端用户管理域名 */
    loginHost:string

    /** 主管理域名 */
    adminHost:string
}

/** 全局接口管理标准 */
interface IGlobalUrlManager{
    /** 远端主机 */
    hosts:IGlobalHost

    /**
     * 获取标准请求结构
     * @param params 额外的请求内容
     */
    getRequestObject(params?:object):object
    
    /** 获取系统类型列表 */
    GetSystemTypeList:string

    /** 文件上传 */
    defaultFileUploadUrl:string

    /** 登录 */
    login:string

    /** 单点登录 */
    validateLogin:string

    /** 检查登录状态 */
    checkLoginStatus:string

    /** 获取Ali OSS配置信息 */
    getOSSConfig:string
}