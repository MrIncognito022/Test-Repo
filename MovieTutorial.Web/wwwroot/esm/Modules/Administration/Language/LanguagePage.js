import{a as s,b as m,c as e,d as n}from"../../../_chunks/chunk-Q4COIZBO.js";import{a as o,b as c,c as i,e as u}from"../../../_chunks/chunk-VVOU4364.js";var d=c(u(),1);var a=c(u(),1);var r=class extends a.EntityDialog{constructor(){super(...arguments);this.form=new m(this.idPrefix)}getFormKey(){return m.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return n.baseUrl}};o(r,"LanguageDialog"),r=i([a.Decorators.registerClass("MovieTutorial.Administration.LanguageDialog")],r);var p=c(u(),1);var t=class extends p.EntityGrid{useAsync(){return!0}getColumnsKey(){return s.columnsKey}getDialogType(){return r}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getService(){return n.baseUrl}afterInit(){super.afterInit()}getDefaultSortBy(){return[e.Fields.LanguageName]}};o(t,"LanguageGrid"),t=i([p.Decorators.registerClass("MovieTutorial.Administration.LanguageGrid")],t);$(function(){(0,d.initFullHeightGridPage)(new t($("#GridDiv")).element)});
//# sourceMappingURL=LanguagePage.js.map