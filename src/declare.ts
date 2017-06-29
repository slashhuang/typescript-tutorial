/**
 * Created by slashhuang on 16/8/14.
 */
interface JQuery{
    addClass(option:string): JQuery;
    (a: string): JQuery;
}
interface JQueryStatic {
    html():string
}
declare var  $: JQuery;

$('d').addClass('d').addClass('');