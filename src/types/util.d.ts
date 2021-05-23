
interface TreeDataNode {
    /** 节点标题 */
    title:string
    /** 节点树索引 */
    index:string
    /** 节点子集 */
    children:TreeDataNode[]
    /** 节点元数据 */
    obj:object
}

interface CascaderDataNode {
    /** 节点标题 */
    label:string
    /** 节点值 */
    value:string
    /** 节点索引 */
    index:string
    /** 节点子集 */
    children:CascaderDataNode[]
    /** 节点元数据 */
    obj:object
}

interface Point {x:number,y:number}

interface RegexConstructor {
    /**
     * 正则检查手机号码格式
     * @param value 手机号字符串
     * @param returnRegex 是否返回正则
     * @returns 是否合法 或正则对象
     */
    checkPhoneStr(value:string, returnRegex?:boolean):RegExp|boolean

    /**
     * 正则检查电子邮箱格式
     * @param value 邮箱字符串
     * @param returnRegex 是否返回正则
     * @returns 是否合法 或正则对象
     */
    checkEmailStr(value:string, returnRegex?:boolean):RegExp|boolean

    /**
     * 正则检查字符串强度
     * @param value 需要检查的字符串
     * @returns 字符串强度等级
     */
    checkCodeLevel(value:string):number

    /**
     * 正则检查身份证格式
     * @param value 需要检查的字符串
     * @param returnRegex 是否返回正则
     * @returns 是否合法 或正则对象
     */
    checkIDCardCode(value:string, returnRegex?:boolean):RegExp|boolean

    /**
     * 正则检查港澳居民来往内地通行证格式
     * @param value 需要检查的字符串
     * @param returnRegex 是否返回正则
     * @returns 是否合法 或正则对象
     */
    checkHkongMacaoCode(value:string, returnRegex?:boolean):RegExp|boolean
}

interface UtilsConstructor {
    /**
     * 将对象编码为适合URL传输的字符串格式
     * @param obj 需要编码为URL格式的对象
     * @param hasSymbol 是否附带符号
     * @returns 编译后的字符串
     */
    encodeURLParam(obj:object, hasSymbol?:boolean): string

    /**
     * 将URL参数字符串解码为对象
     * @param stringBuffer 需要解码的字符串
     * @param hasSymbol 是否解析附带符号
     * @returns 将URL参数字符串解码为对象
     */
    decodeURLParam(stringBuffer:string, hasSymbol?:boolean):object

    /**
     * 解析路径字符串中的文件信息
     * @param url 文件路径字符串
     * @returns FileInfo
     */
    decodePathFileInfo(url:string):{
        /** 完整的文件名 */
        fullName:string
        /** 文件名 */
        name:string
        /** 文件类型 */
        type:string
        /** 文件路径 */
        path:string
        /** 完整的文件路径 */
        fullPath:string
    }

    /**
     * 深复制一个对象
     * @param obj 需要被复制的对象
     * @returns 对象副本
     */
    objectCopy(obj:object):object

    /**
     * 将数组转换为适用树的数据格式
     * @param array 源数据
     * @param textName 指定字段名作为显示文本,默认为title字段
     * @param orderby 排序，升序asc 降序desc
     * @param childName 子级标识符，用于确定子级id，默认id
     * @param parentName 父级标识符，用于确定父级id，默认parentid
     * @param nodeTransferFn 节点回调，用于操作节点对象
     * @returns 将数组转换为适用树的数据格式
     */
    transformTreeData(array:object[], textName?:string, orderby?:string, childName?:string, parentName?:string, nodeTransferFn?:Function):TreeDataNode[]

    /**
     * 将数组转换为适用级联选择的数据格式
     * @param array 源数据
     * @param textName 指定字段名作为显示文本,默认为label字段
     * @param textValue 指定字段名作为key,默认为value字段
     * @param orderby 排序，升序asc 降序desc
     * @param childName 子级标识符，用于确定子级id，默认id
     * @param parentName 父级标识符，用于确定父级id，默认parentid
     * @returns 将数组转换为适用级联选择的数据格式
     */
    transformCascaderData(array:object[], textName?:string, textValue?:string, orderby?:string, childName?:string, parentName?:string):CascaderDataNode[]

    /**
     * 根据节点索引查找树节点
     * @param array TreeDataNode数组
     * @param treeIndex TreeDataNode.treeIndex 树节点索引
     */
    getTreeNode(array:TreeDataNode[], treeIndex:string):{
        /** 父级节点 */
        parent:TreeDataNode
        /** 目标节点 */
        node:TreeDataNode
    }

    /**
     * 获取浏览器滚动条高度
     * @returns 浏览器滚动条大小
     */
    getScrollBarSize():number

    /**
     * 统一格式的错误处理函数，必须用call函数调用
     * @param err Error对象
     */
    showErrorTips(err:object):void

    /**
     * 将对象转换为数组
     * @param obj 需要转换的对象
     * @returns 对象成员的引用副本
     */
    objectToArray(obj:object):any[]

    /**
     * 获取网站根路径
     * @returns 网站程序根路径
     */
    getApplicationRoot:string

    /**
     * 枚举是否存在script标记
     * @param src script文件路径
     * @param insertDom 是否自动插入script标记
     */
    hasScript(src:string, insertDom?:boolean):Promise<Element>

    /**
     * XML转换JS对象
     * @param xmlStr XML字符串
     */
    xml2Object(xmlStr:string):object

    /**
     * 检测多边形是否重叠
     * @param polygon1LinearRings 第一个多边形坐标点集合
     * @param polygon2LinearRings 第二个多边形坐标点集合
     * @returns 是否重叠
     */
    intersectsPolygonAndPolygon(polygon1LinearRings:Point, polygon2LinearRings:Point):boolean
    
    /** 正则验证 */
    Regex:RegexConstructor
    /**
     * 返回排除指定属性的对象副本
     * @param obj 操作对象
     * @param exclude 移除对象指定属性
     */
    excludeAttr<T=object>(obj:object, exclude:Array<any>):T
}