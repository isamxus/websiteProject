/** 报表接口标准 */
interface IReportUrlManager {
    /** 提交报表，包含创建，修改 */
    postReport:string
    
    /** MTR文件上传 */
    mrtFileUpload:string

    /** 报表分页分页列表 */
    getAllReportPage:string
    
    /** 获取报表内容 */
    getReportInfo:string

    /** 创建自定义控件 */
    createDynamicControl:string

    /** 获取自定义控件分页列表 */
    getDynamicControlPage:string

    /** 获取自定义控件详情 */
    getDynamicControlInfo:string

    /** 获取自定义控件列表 */
    getDynamicControlItems:string

    /** 编辑自定义控件 */
    editDynamicControl:string

    /** 删除报表 */
    deleteReport:string

    /** 设置报表状态 */
    setReportStatus:string

    /** 删除自定义控件 */
    deleteDynamicControl:string

    /** 获取企业类型列表 */
    getOrgTypeList:string

    /** 获取企业报表权限 */
    getEnterpriseReportAuth:string

    /** 企业报表权限变更 */
    enterpriseReportAuthChange:string

    /** 企业报表权限变更(单个) */
    enterpriseReportAuthChangeSingle:string

    /** 获取角色列表 */
    getRoleList:string

    /** 获取角色报表权限 */
    getRoleReportAuth:string

    /** 角色报表权限变更 */
    roleReportAuthChange:string

    /** 角色报表权限变更(单个) */
    roleReportAuthChangeSingle:string
    
    /** 获取默认角色列表 */
    getDefaultRoleList:string

    /** 角色报表权限变更 */
    defaultRoleReportAuthChange:string

    /** 角色报表权限变更(单个) */
    defaultRoleReportAuthChangeSingle:string

     /** 获取当前用户权限的报表列表(不分页) */
    GetMyReportList:string
}