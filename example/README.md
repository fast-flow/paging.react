# Basic

## Navigation

1. [custom-style](./custom-style.md)

## Basic

````demo
{
    title: 'onChange',
    html: '<div id="example__onChange" >loading...</div>',
    desc: '`page={2} pageCount={10} pageSize={10} onChange={fn}`',
    file: './onChange.demo.js'
}
````

## props.dataCount

````demo
{
    title: 'dataCount',
    html: '<div id="example__dataCount" >loading...</div>',
    desc: '`page={2} dataCount={232} pageSize={10} onChange={fn}`',
    file: './dataCount.demo.js'
}
````

## props.lang

````demo
{
    title: 'basic',
    html: '<div id="example__lang" >loading...</div>',
    desc: '`Use props.lang change text`',
    file: './lang.demo.js'
}
````

## props.render

Copy props.render extend component.

[../lib/props.js](../lib/props.js)

<!--MR-H
<div style="border:1px solid gray;height:20em;overflow:auto;" >
-->

<!--MARKRUN-REPLACE
{
    file: '../lib/props.js',
    type: 'pre'
}
-->

<!--MR-H
</div>
-->

````demo
{
    title: 'basic',
    html: '<div id="example__extend" >loading...</div>',
    desc: 'Use props.render add input',
    file: './extend.demo.js'
}
````
