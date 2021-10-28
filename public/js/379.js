"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[379],{3744:(e,t)=>{t.Z=(e,t)=>{for(const[o,n]of t)e[o]=n;return e}},8789:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r={class:"text-sm text-gray-600"};const s=(0,n.defineComponent)({props:["on"]});const l=(0,o(3744).Z)(s,[["render",function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(n.Transition,{"leave-active-class":"transition ease-in duration-1000","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("div",r,[(0,n.renderSlot)(e.$slots,"default")],512),[[n.vShow,e.on]])]})),_:3})])}]])},7020:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"submit"}}});const l=(0,o(3744).Z)(s,[["render",function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)}]])},9153:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(821),r={class:"md:grid md:grid-cols-3 md:gap-6"},s={class:"mt-5 md:mt-0 md:col-span-2"},l={class:"grid grid-cols-6 gap-6"},a={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};var i=o(5218);const c=(0,n.defineComponent)({emits:["submitted"],components:{JetSectionTitle:i.Z},computed:{hasActions:function(){return!!this.$slots.actions}}});const d=(0,o(3744).Z)(c,[["render",function(e,t,o,i,c,d){var u=(0,n.resolveComponent)("jet-section-title");return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createVNode)(u,null,{title:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"title")]})),description:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"description")]})),_:3}),(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("form",{onSubmit:t[0]||(t[0]=(0,n.withModifiers)((function(t){return e.$emit("submitted")}),["prevent"]))},[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["px-4 py-5 bg-white sm:p-6 shadow",e.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[(0,n.createElementVNode)("div",l,[(0,n.renderSlot)(e.$slots,"form")])],2),e.hasActions?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[(0,n.renderSlot)(e.$slots,"actions")])):(0,n.createCommentVNode)("",!0)],32)])])}]])},7292:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["value"];const s=(0,n.defineComponent)({props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}});const l=(0,o(3744).Z)(s,[["render",function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,r)}]])},675:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r={class:"text-sm text-red-600"};const s=(0,n.defineComponent)({props:["message"]});const l=(0,o(3744).Z)(s,[["render",function(e,t,o,s,l,a){return(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("p",r,(0,n.toDisplayString)(e.message),1)],512)),[[n.vShow,e.message]])}]])},6138:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(821),r={class:"block font-medium text-sm text-gray-700"},s={key:0},l={key:1};const a=(0,n.defineComponent)({props:["value"]});const i=(0,o(3744).Z)(a,[["render",function(e,t,o,a,i,c){return(0,n.openBlock)(),(0,n.createElementBlock)("label",r,[e.value?((0,n.openBlock)(),(0,n.createElementBlock)("span",s,(0,n.toDisplayString)(e.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",l,[(0,n.renderSlot)(e.$slots,"default")]))])}]])},5515:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"button"}}});const l=(0,o(3744).Z)(s,[["render",function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)}]])},5218:(e,t,o)=>{o.d(t,{Z:()=>d});var n=o(821),r={class:"md:col-span-1 flex justify-between"},s={class:"px-4 sm:px-0"},l={class:"text-lg font-medium text-gray-900"},a={class:"mt-1 text-sm text-gray-600"},i={class:"px-4 sm:px-0"};const c={},d=(0,o(3744).Z)(c,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("h3",l,[(0,n.renderSlot)(e.$slots,"title")]),(0,n.createElementVNode)("p",a,[(0,n.renderSlot)(e.$slots,"description")])]),(0,n.createElementVNode)("div",i,[(0,n.renderSlot)(e.$slots,"aside")])])}]])},5379:(e,t,o)=>{o.r(t),o.d(t,{default:()=>N});var n=o(821),r=(0,n.createTextVNode)(" Profile Information "),s=(0,n.createTextVNode)(" Update your account's profile information and email address. "),l={key:0,class:"col-span-6 sm:col-span-4"},a={class:"mt-2"},i=["src","alt"],c={class:"mt-2"},d=(0,n.createTextVNode)(" Select A New Photo "),u=(0,n.createTextVNode)(" Remove Photo "),m={class:"col-span-6 sm:col-span-4"},p={class:"col-span-6 sm:col-span-4"},f=(0,n.createTextVNode)(" Saved. "),h=(0,n.createTextVNode)(" Save ");var v=o(7020),g=o(9153),y=o(7292),b=o(675),w=o(6138),x=o(8789),k=o(5515);const V=(0,n.defineComponent)({components:{JetActionMessage:x.Z,JetButton:v.Z,JetFormSection:g.Z,JetInput:y.Z,JetInputError:b.Z,JetLabel:w.Z,JetSecondaryButton:k.Z},props:["user"],data:function(){return{form:this.$inertia.form({_method:"PUT",name:this.user.name,email:this.user.email,photo:null}),photoPreview:null}},methods:{updateProfileInformation:function(){var e=this;this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:function(){return e.clearPhotoFileInput()}})},selectNewPhoto:function(){this.$refs.photo.click()},updatePhotoPreview:function(){var e=this,t=this.$refs.photo.files[0];if(t){var o=new FileReader;o.onload=function(t){e.photoPreview=t.target.result},o.readAsDataURL(t)}},deletePhoto:function(){var e=this;this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:function(){e.photoPreview=null,e.clearPhotoFileInput()}})},clearPhotoFileInput:function(){var e;null!==(e=this.$refs.photo)&&void 0!==e&&e.value&&(this.$refs.photo.value=null)}}});const N=(0,o(3744).Z)(V,[["render",function(e,t,o,v,g,y){var b=(0,n.resolveComponent)("jet-label"),w=(0,n.resolveComponent)("jet-secondary-button"),x=(0,n.resolveComponent)("jet-input-error"),k=(0,n.resolveComponent)("jet-input"),V=(0,n.resolveComponent)("jet-action-message"),N=(0,n.resolveComponent)("jet-button"),C=(0,n.resolveComponent)("jet-form-section");return(0,n.openBlock)(),(0,n.createBlock)(C,{onSubmitted:e.updateProfileInformation},{title:(0,n.withCtx)((function(){return[r]})),description:(0,n.withCtx)((function(){return[s]})),form:(0,n.withCtx)((function(){return[e.$page.props.jetstream.managesProfilePhotos?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("input",{type:"file",class:"hidden",ref:"photo",onChange:t[0]||(t[0]=function(){return e.updatePhotoPreview&&e.updatePhotoPreview.apply(e,arguments)})},null,544),(0,n.createVNode)(b,{for:"photo",value:"Photo"}),(0,n.withDirectives)((0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("img",{src:e.user.profile_photo_url,alt:e.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,i)],512),[[n.vShow,!e.photoPreview]]),(0,n.withDirectives)((0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:(0,n.normalizeStyle)("background-image: url('"+e.photoPreview+"');")},null,4)],512),[[n.vShow,e.photoPreview]]),(0,n.createVNode)(w,{class:"mt-2 mr-2",type:"button",onClick:(0,n.withModifiers)(e.selectNewPhoto,["prevent"])},{default:(0,n.withCtx)((function(){return[d]})),_:1},8,["onClick"]),e.user.profile_photo_path?((0,n.openBlock)(),(0,n.createBlock)(w,{key:0,type:"button",class:"mt-2",onClick:(0,n.withModifiers)(e.deletePhoto,["prevent"])},{default:(0,n.withCtx)((function(){return[u]})),_:1},8,["onClick"])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(x,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",m,[(0,n.createVNode)(b,{for:"name",value:"Name"}),(0,n.createVNode)(k,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.name=t}),autocomplete:"name"},null,8,["modelValue"]),(0,n.createVNode)(x,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),(0,n.createElementVNode)("div",p,[(0,n.createVNode)(b,{for:"email",value:"Email"}),(0,n.createVNode)(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.email=t})},null,8,["modelValue"]),(0,n.createVNode)(x,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])])]})),actions:(0,n.withCtx)((function(){return[(0,n.createVNode)(V,{on:e.form.recentlySuccessful,class:"mr-3"},{default:(0,n.withCtx)((function(){return[f]})),_:1},8,["on"]),(0,n.createVNode)(N,{class:(0,n.normalizeClass)({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:(0,n.withCtx)((function(){return[h]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])}]])}}]);