Yii2:[doT javascript template
=============================
[doT.js](http://olado.github.io/doT/index.html)

Installation
-----------------------
The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist pavlinter/yii2-doT "dev-master"
```

or add

```
"pavlinter/yii2-doT": "dev-master"
```

to the require section of your `composer.json` file.

Usage
-----------------------
```php
<?php
$data = [
    [
        'name' => 'Jim',
        'age' => '35',
        'msg' => 'Pellentesque non felis ligula',
    ],
    [
        'name' => 'Robert',
        'msg' => 'Cras sagittis dapibus lacus',
    ],
    [
        'name' => 'Maikl',
        'age' => '12',
    ],
    [
        'msg' => 'Cras sagittis dapibus lacus',
    ],
];

$this->registerJs('
    var data = ' . Json::encode($data) .';
    $("#comment-box-html").tmplHtml("comment", data);
    $("#comment-box-append").tmplAppend("comment", data); //append each
    $("#comment-box-prepend").tmplPrepend("comment", data); //prepend each

');

?>

<div id="comment-box-html"></div>
<div id="comment-box-append"></div>
<div id="comment-box-prepend"></div>

<?php \pavlinter\doT\DoT::begin(['id' => 'comment']) ?>
    <div class="media">
        <div class="media-body">
            <div class="media-heading">
                {{=it.name || 'Anonymous'}}
                {{? it.age }}
                <span class="label label-info">{{=it.age}}</span>
                {{?}}
            </div>
            {{? it.msg }}
            <p>{{=it.msg}}</p>
            {{?}}
        </div>
    </div>
<?php \pavlinter\doT\DoT::end() ?>
```