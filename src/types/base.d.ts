interface ApplicationExConstructor {
    /**
     * 为相对的资源路径填充域名
     * @param path 文件路径
     * @param host 强制域名
     */
    fillSourceHost(path:string, host?:string):string
}

interface StatusEnumConstructor {

}