<?php

/**
 * @package yii2-DoT
 * @author Pavels Radajevs <pavlinter@gmail.com>
 * @copyright Copyright &copy; Pavels Radajevs <pavlinter@gmail.com>, 2015
 * @version 1.0.0
 */

namespace pavlinter\doT;

/**
 * Class DotJqueryAsset
 */
class DotJqueryAsset extends \yii\web\AssetBundle
{
    public $sourcePath = "@vendor/pavlinter/yii2-doT/doT/assets";

    public $depends = [
        'yii\web\JqueryAsset',
        'pavlinter\doT\DoT',
    ];

    public function init()
    {
        $min = YII_ENV_DEV ? '.min' : '';
        $this->js[] = 'js/doT' . $min .'.js';
        parent::init();
    }
}
