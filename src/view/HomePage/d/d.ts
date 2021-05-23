/** 左侧菜单子级接口定义 **/
export interface childSelectOption {
    name: string
    title: string
    icon: string
}

/** 左侧菜单栏接口定义 **/
export interface SelctOption {
    name: string
    title: string
    icon: string
    children?: childSelectOption[]
}

