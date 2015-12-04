/**
 * @package yii2-dot
 * @author Pavels Radajevs <pavlinter@gmail.com>
 * @copyright Copyright &copy; Pavels Radajevs <pavlinter@gmail.com>, 2015
 * @version 1.1.0
 */
(function($) {

    var default_prefix = 'tmpl_';

    $.tmpl = function(tmplId, data, prefix) {
        var p = prefix || default_prefix;
        var tmpl = doT.template($('#' + p + tmplId).text());
        data = $.extend({}, data);
        if (!$.isArray(data)) data = [data];

        var html = '';
        for (var itemIdx = 0; itemIdx < data.length; itemIdx++) {
            html += tmpl(data[itemIdx]);
        }
        return html;
    };

    $.eachTmpl = function(tmplId, arr, prefix) {
        var p = prefix || default_prefix;
        var tmpl = doT.template($('#' + p + tmplId).text());
        var html = '';
        for (var i in arr) {
            data = $.extend({}, arr[i]);
            if (!$.isArray(data)) data = [data];
            for (var itemIdx = 0; itemIdx < data.length; itemIdx++) {
                html += tmpl(data[itemIdx]);
            }
        }
        return html;
    };

    $.fn.tmplHtml = function(tmplId, data, prefix) {
        var p = prefix || default_prefix;
        var tmpl = doT.template($('#' + p + tmplId).text());
        data = $.extend({}, data);
        if (!$.isArray(data)) data = [data];

        return this.each(function() {
            var html = '';
            for (var itemIdx = 0; itemIdx < data.length; itemIdx++) {
                html += tmpl(data[itemIdx]);
            }
            $(this).html(html);
        });
    };

    $.fn.tmplAppend = function(tmplId, data, prefix) {
        var p = prefix || default_prefix;
        var tmpl = doT.template($('#' + p + tmplId).text());
        data = $.extend({}, data);
        if (!$.isArray(data)) data = [data];

        return this.each(function() {
            var $this = $(this);
            for (var itemIdx = 0; itemIdx < data.length; itemIdx++) {
                $this.append(tmpl(data[itemIdx]));
            }
        });
    };

    $.fn.tmplPrepend = function(tmplId, data, prefix) {
        var p = prefix || default_prefix;
        var tmpl = doT.template($('#' + p + tmplId).text());
        data = $.extend({}, data);
        if (!$.isArray(data)) data = [data];

        return this.each(function() {
            var $this = $(this);
            for (var itemIdx = 0; itemIdx < data.length; itemIdx++) {
                $this.prepend(tmpl(data[itemIdx]));
            }
        });
    };

})(jQuery);