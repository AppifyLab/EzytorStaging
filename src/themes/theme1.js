

import heading1 from './assets1/images/headerbg.png'
import logo from './assets1/images/logo.svg'
// import './assets1/css/glide.core.min.css';
// import './assets1/css/style.css';
// import './assets1/css/bootstrap.min.css';
// component:'div',
// content:[],
// type:'section',
// cmType:'normal',
// class:'_hero_rimshot_wrap',
// style:{}
import SvgContainer from '../componentElements/SvgContainer'
export const theme1Data = [{
    component:'div',
    content:[
        {
            component:'header',
            content:[
                {
                    component:'div',
                    content:[
                        {
                            component:'img',
                            content:null,
                            type:'text',
                            cmType:'normal',
                            class:'_hero_software_shape_img',
                            style:{},
                            props:{
                                src:heading1
                            }
                        }
                    ],
                    type:'section',
                    cmType:'normal',
                    class:'_hero_software_shape',
                    style:{}
                },
                {
                    component:'nav',
                    content:[
                        {
                            component:'div',
                            content:[
                                {
                                    component:'div',
                                    content:[
                                        {
                                            component:'a',
                                            content:[
                                                {
                                                    component:'img',
                                                    content:null,
                                                    type:'text',
                                                    cmType:'normal',
                                                    class:'_nav_logo',
                                                    style:{},
                                                    props:{
                                                        src:logo,
                                                        alt:'Logo'
                                                    }
                                                    
                                                }
                                            ],
                                            type:'section',
                                            cmType:'normal',
                                            class:'navbar-brand _logo',
                                            style:{},
                                            props:{
                                                href:'#'
                                            }
                                        }
                                    ],
                                    type:'section',
                                    cmType:'normal',
                                    class:'_logo_wrap',
                                    style:{},
                                   
                                },
                                {
                                    component:'button',
                                    content:[
                                        {
                                            component:'span',
                                            content:null,
                                            type:'text',
                                            cmType:'normal',
                                            class:'navbar-toggler-icon',
                                            style:{}
                                        }
                                    ],
                                    type:'section',
                                    cmType:'normal',
                                    class:'navbar-toggler _toggler',
                                    style:{}
                                },
                                {
                                    component:'div',
                                    content:[
                                        {
                                            component:'ul',
                                            content:[
                                                {
                                                    component:'li',
                                                    content:[
                                                        {
                                                            component:'a',
                                                            content:'Product',
                                                            type:'text',

                                                            cmType:'normal',
                                                            class:'nav-link _hero_software_nav_link _active',
                                                            style:{},
                                                            props:{
                                                                src:"#"
                                                            }
                                                        }
                                                    ],
                                                    type:'section',
                                                    cmType:'normal',
                                                    class:'nav-item _hero_software_nav_item',
                                                    style:{}
                                                },
                                                {
                                                    component:'li',
                                                    content:[
                                                        {
                                                            component:'a',
                                                            content:'Company',
                                                            type:'text',

                                                            cmType:'normal',
                                                            class:'dropdown-menu dropdown-menu-light',
                                                            style:{},
                                                            
                                                        }
                                                    ],
                                                    type:'section',
                                                    cmType:'normal',
                                                    class:'nav-item _hero_software_nav_item',
                                                    style:{}
                                                },
                                                {
                                                    component:'li',
                                                    content:[
                                                        {
                                                            component:'a',
                                                            content:[
                                                                {
                                                                    component:'',
                                                                    content:'Pricing',
                                                                    type:'text',
                                                                    cmType:'normal',
                                                                    class:'_hero_rimshot_wrap',
                                                                    style:{}
                                                                },
                                                                {
                                                                    component:'svg',
                                                                    content:'',
                                                                    type:'text',
                                                                    cmType:'normal',
                                                                    class:'_hero_rimshot_wrap',
                                                                    style:{},
                                                                    props:{
                                                                        svgProps:{
                                                                            xmlns:"http://www.w3.org/2000/svg",
                                                                            width:"10",
                                                                            height:"8",
                                                                            fill:"none",
                                                                            viewBox:"0 0 10 8"
                                                                        },
                                                                        pathProps:[
                                                                            {
                                                                                fill:"#000",
                                                                                d:"M8.82.91L5 4.731 1.18.911 0 2.09l5 5 5-5L8.82.91z"
                                                                            }
                                                                        ]
                                                                    }
                                                                },


                                                            ],
                                                            type:'text',
                                                            cmType:'complex',
                                                            class:'nav-link _hero_software_nav_link _hero_software_nav_drop_link dropdown-toggle',
                                                            style:{},
                                                            
                                                        }
                                                    ],
                                                    type:'section',
                                                    cmType:'normal',
                                                    class:'nav-item _hero_software_nav_item _hero_software_nav_drop dropdown',
                                                    style:{}
                                                }
                                                
                                            ],
                                            type:'section',
                                            cmType:'normal',
                                            class:'navbar-nav _hero_software_nav',
                                            style:{}
                                        },
                                        {
                                            component:'ul',
                                            content:[
                                                {
                                                    component:'li',
                                                    content:[
                                                        {
                                                            component:'a',
                                                            content:'Sign in',
                                                            type:'text',
                                                            cmType:'normal',
                                                            class:'nav-link _hero_software_nav_link _login',
                                                            style:{},
                                                            props:{
                                                                href:"#"
                                                            }
                                                        }
                                                    ],
                                                    type:'section',
                                                    cmType:'normal',
                                                    class:'nav-item _hero_software_nav_item',
                                                    style:{},
                                                    props:{}
                                                },
                                                {
                                                    component:'li',
                                                    content:[
                                                        {
                                                            component:'a',
                                                            content:'Open an account',
                                                            type:'text',
                                                            cmType:'normal',
                                                            class:'nav-link _hero_software_nav_link _login',
                                                            style:{},
                                                            props:{
                                                                href:"#"
                                                            }
                                                        }
                                                    ],
                                                    type:'section',
                                                    cmType:'normal',
                                                    class:'nav-item _hero_software_nav_item',
                                                    style:{},
                                                    props:{}
                                                }
                                            ],
                                            type:'section',
                                            cmType:'normal',
                                            class:'navbar-nav _hero_software_nav_right',
                                            style:{},
                                            props:{}
                                        }

                                    ],
                                    type:'section',
                                    cmType:'normal',
                                    class:'collapse navbar-collapse',
                                    style:{}
                                }
                            ],
                            type:'section',
                            cmType:'normal',
                            class:'container',
                            style:{},
                        }
                    ],
                    type:'section',
                    cmType:'normal',
                    class:'navbar navbar-expand-lg navbar-dark bg-light _hero_software_navbar',
                    style:{}
                },
                {
                    component:'div',
                    content:[
                        {
                            component:'div',
                            content:[
                                {
                                    component:'div',
                                    content:[
                                        {
                                            component:'div',
                                            content:[
                                                {
                                                    component:'div',
                                                    content:[
                                                        {
                                                            component:'div',
                                                            content:[
                                                                {
                                                                    component:'span',
                                                                    content:null,
                                                                    type:'text',
                                                                    cmType:'normal',
                                                                    class:'_hero_software_left_c1',
                                                                    style:{},
                                                                    props:{}
                                                                },
                                                                {
                                                                    component:'span',
                                                                    content:null,
                                                                    type:'text',
                                                                    cmType:'normal',
                                                                    class:'_hero_software_left_c2',
                                                                    style:{},
                                                                    props:{}
                                                                },
                                                                {
                                                                    component:'span',
                                                                    content:null,
                                                                    type:'text',
                                                                    cmType:'normal',
                                                                    class:'_hero_software_left_c3',
                                                                    style:{},
                                                                    props:{}
                                                                },
                                                                {
                                                                    component:'h1',
                                                                    content:'The next generation saas products',
                                                                    type:'text',
                                                                    cmType:'normal',
                                                                    class:'_hero_software_left_head',
                                                                    style:{},
                                                                    props:{}
                                                                },
                                                                {
                                                                    component:'p',
                                                                    content:'Software as a service (SaaS) is a software licensing and delivery model in whichsoftware is licensed on a subscription basis.',
                                                                    type:'text',
                                                                    cmType:'normal',
                                                                    class:'_hero_software_left_txt',
                                                                    style:{},
                                                                    props:{}
                                                                },
                                                                {
                                                                    component:'div',
                                                                    content:[
                                                                        {
                                                                            component:'div',
                                                                            content:[
                                                                                {
                                                                                    component:'div',
                                                                                    content:[
                                                                                        {
                                                                                            component:'svg',
                                                                                            content:null,
                                                                                            type:'text',
                                                                                            cmType:'normal',
                                                                                            class:'',
                                                                                            style:{},
                                                                                            props:{
                                                                                                svgProps:{
                                                                                                    xmlns:"http://www.w3.org/2000/svg",
                                                                                                    width:"35",
                                                                                                    height:"21",
                                                                                                    fill:"none",
                                                                                                    viewBox:"0 0 35 21"
                                                                                                },
                                                                                                pathProps:[
                                                                                                    {
                                                                                                        fill:"#D52A56",
                                                                                                        d:"M0 0h6.914v6.914H0z"
                                                                                                    },
                                                                                                    {
                                                                                                        fill:"#D52A56",
                                                                                                        d:"M6.912 6.91h6.914v6.914H6.912zM13.824 13.824h6.914v6.914h-6.914zM20.74 6.91h6.914v6.914H20.74z"
                                                                                                    },
                                                                                                    {
                                                                                                        fill:"#D52A56",
                                                                                                        d:"M27.652 0h6.914v6.914h-6.914z"
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        }
                                                                                    ],
                                                                                    type:'section',
                                                                                    cmType:'normal',
                                                                                    class:'_hero_rimshot_wrap',
                                                                                    style:{},
                                                                                    props:{}
                                                                                }
                                                                            ],
                                                                            type:'section',
                                                                            cmType:'normal',
                                                                            class:'_hero_software_left_scroll_img',
                                                                            style:{},
                                                                            props:{}
                                                                        }
                                                                    ],
                                                                    type:'section',
                                                                    cmType:'normal',
                                                                    class:'_hero_software_left_scroll_img_wrap',
                                                                    style:{},
                                                                    props:{}
                                                                }
                                                            ],
                                                            type:'section',
                                                            cmType:'normal',
                                                            class:'_hero_software_left',
                                                            style:{},
                                                            props:{}
                                                        }
                                                    ],
                                                    type:'section',
                                                    cmType:'normal',
                                                    class:'col-xl-6 col-lg-6 col-md-12 col-sm-12',
                                                    style:{},
                                                    props:{} 
                                                }
                                            ],
                                            type:'section',
                                            cmType:'normal',
                                            class:'row',
                                            style:{},
                                            props:{}  
                                        }
                                    ],
                                    type:'section',
                                    cmType:'normal',
                                    class:'container',
                                    style:{},
                                    props:{}
                                }
                            ],
                            type:'section',
                            cmType:'normal',
                            class:'_hero_rimshot_wrap',
                            style:{},
                            props:{}
                        }
                    ],
                    type:'section',
                    cmType:'normal',
                    class:'_hero_software_sec',
                    style:{},
                    props:{}
                }
            ],
            type:'section',
            cmType:'normal',
            class:'_hero_software_wrapper',
            style:{}
        }
    ],
    type:'section',
    cmType:'normal',
    class:'',
    style:{}

}]