(()=>{"use strict";var e={n:l=>{var t=l&&l.__esModule?()=>l.default:()=>l;return e.d(t,{a:t}),t},d:(l,t)=>{for(var a in t)e.o(t,a)&&!e.o(l,a)&&Object.defineProperty(l,a,{enumerable:!0,get:t[a]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l)};const l=window.wp.blocks,t=JSON.parse('{"UU":"slim-seo/breadcrumbs"}'),a=window.React,o=window.wp.blockEditor,n=window.wp.components,r=window.wp.i18n,s=window.wp.serverSideRender;var m=e.n(s);(0,l.registerBlockType)(t.UU,{edit:function({attributes:e,setAttributes:l}){const{separator:t,taxonomy:s,display_current:c,label_home:i,label_search:u,label_404:b}=e;return(0,a.createElement)("div",{...(0,o.useBlockProps)()},(0,a.createElement)(o.InspectorControls,null,(0,a.createElement)(n.PanelBody,{title:(0,r.__)("Settings","slim-seo")},(0,a.createElement)(n.PanelRow,null,(0,a.createElement)(n.TextControl,{label:(0,r.__)("Separator","slim-seo"),help:(0,r.__)("The separator between breadcrumb items.","slim-seo"),value:t,onChange:e=>l({separator:e})})),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)(n.TextControl,{label:(0,r.__)("Taxonomy","slim-seo"),help:(0,r.__)("The taxonomy that you want to output in the breadcrumb trail when you are on a singular page.","slim-seo"),value:s,onChange:e=>l({taxonomy:e})})),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)(n.ToggleControl,{label:(0,r.__)("Display current page","slim-seo"),help:(0,r.__)("Whether or not to display the current page.","slim-seo"),checked:c,onChange:()=>l({display_current:!c})})),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)(n.TextControl,{label:(0,r.__)("Label home","slim-seo"),help:(0,r.__)("Label for the home item.","slim-seo"),value:i,onChange:e=>l({label_home:e})})),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)(n.TextControl,{label:(0,r.__)("Label search","slim-seo"),help:(0,r.__)("Label for the search results page.","slim-seo"),value:u,onChange:e=>l({label_search:e})})),(0,a.createElement)(n.PanelRow,null,(0,a.createElement)(n.TextControl,{label:(0,r.__)("Label 404","slim-seo"),help:(0,r.__)("Label for the 404 page.","slim-seo"),value:b,onChange:e=>l({label_404:e})})))),(0,a.createElement)(m(),{block:"slim-seo/breadcrumbs",attributes:e}))}})})();