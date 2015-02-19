<?php

/**
 * @package yii2-DoT
 * @author Pavels Radajevs <pavlinter@gmail.com>
 * @copyright Copyright &copy; Pavels Radajevs <pavlinter@gmail.com>, 2015
 * @version 1.0.0
 */

namespace pavlinter\doT;

/**
 * Class DoTAsset
 * @link http://olado.github.io/doT/index.html
 */
class DoTAsset extends \yii\web\AssetBundle
{
    public $sourcePath = "@vendor/pavlinter/yii2-dot/doT/assets";

    public function init()
    {
        $min = YII_DEBUG ? '' : '.min';
        $this->js[] = 'js/doT' . $min .'.js';
        parent::init();
    }
}
