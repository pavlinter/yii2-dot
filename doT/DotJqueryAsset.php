<?php

/**
 * @package yii2-dot
 * @author Pavels Radajevs <pavlinter@gmail.com>
 * @copyright Copyright &copy; Pavels Radajevs <pavlinter@gmail.com>, 2015
 * @version 1.1.0
 */

namespace pavlinter\doT;

/**
 * Class DotJqueryAsset
 */
class DotJqueryAsset extends \yii\web\AssetBundle
{
    public $sourcePath = "@vendor/pavlinter/yii2-dot/doT/assets";

    public $depends = [
        'yii\web\JqueryAsset',
        'pavlinter\doT\DoTAsset',
    ];

    public function init()
    {
        $min = YII_DEBUG ? '' : '.min';
        $this->js[] = 'js/jquery.doT' . $min .'.js';
        parent::init();
    }
}
