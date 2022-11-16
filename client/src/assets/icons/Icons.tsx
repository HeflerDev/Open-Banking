import React from 'react'
import {Icon} from "@iconify/react";

interface IconProps {
    width?: number
    height?: number
    color?: string
}

export const IconUser = ({width = 20, height = 20, color = "black"}: IconProps) => <Icon width={width} height={height}
                                                                                         color={color}
                                                                                         icon="carbon:user-avatar-filled"/>
export const IconHome = ({width = 20, height = 20, color = "black"}: IconProps) => <Icon width={width} height={height}
                                                                                         color={color}
                                                                                         icon="ant-design:home-filled"/>
export const IconSrch = ({width = 20, height = 20, color = "black"}: IconProps) => <Icon width={width} height={height}
                                                                                         color={color}
                                                                                         icon="bi:search"/>
export const IconDock = ({width = 20, height = 20, color = "black"}: IconProps) => <Icon width={width} height={height}
                                                                                         color={color}
                                                                                         icon="fluent-mdl2:docker-logo"/>
export const IconConf = ({width = 20, height = 20, color = "black"}: IconProps) => <Icon width={width} height={height}
                                                                                         color={color} icon={"fa:cog"}/>

export const IconLogout = ({width = 20, height = 20, color = "black"}: IconProps) => <Icon icon={"clarity:logout-line"}
                                                                                           width={width} height={height}
                                                                                           color={color}/>