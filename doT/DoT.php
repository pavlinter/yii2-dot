<?php

/**
 * @package yii2-DoT
 * @author Pavels Radajevs <pavlinter@gmail.com>
 * @copyright Copyright &copy; Pavels Radajevs <pavlinter@gmail.com>, 2015
 * @version 1.0.0
 */

namespace pavlinter\doT;

use Yii;
use yii\base\Widget;
use yii\helpers\Html;

/**
 * Class DoT
 */
class DoT extends Widget
{
    /**
     * @var string the id widget.
     */
    public $id;
    /**
     * @var array the HTML attributes for the widget container tag.
     */
    public $options = [];
    /**
     * @var boolean if true load jquery functions
     */
    public $loadJquery = true;
    /**
     * @var string prefix for id attribute
     */
    public $prefix = "tmpl_";
    /**
     * Initializes the widget.
     */
    public function init()
    {
        parent::init();

        if (isset($this->options['id'])) {
            $this->id = $this->prefix . $this->options['id'];
        } else {
            if ($this->id === null) {
                $this->id = $this->options['id'] = $this->prefix . $this->getId();
            } else {
                $this->options['id'] = $this->prefix . $this->id;
            }
        }
        if (!isset($this->options['type'])) {
            $this->options['type'] = 'text/plain';
        }

        echo Html::beginTag('script', $this->options) . "\n";
    }

    /**
     *
     */
    public function run()
    {
        echo Html::endTag('script');
        $view = $this->getView();
        $this->registerScript($view);
    }

    /**
     * @param $view \yii\web\View
     */
    public function registerScript($view)
    {
        if ($this->loadJquery) {
            DotJqueryAsset::register($view);
        } else {
            DoTAsset::register($view);
        }
    }
}
