(function($) {

    $.fn.tmplHtml = function(tmplId, data, prefix) {
        var p = prefix || 'tmpl_';
        var tmpl = doT.template($('#' + p + tmplId).text());
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
        var p = prefix || 'tmpl_';
        var tmpl = doT.template($('#' + p + tmplId).text());
        if (!$.isArray(data)) data = [data];

        return this.each(function() {
            var $this = $(this);
            for (var itemIdx = 0; itemIdx < data.length; itemIdx++) {
                $this.append(tmpl(data[itemIdx]));
            }
        });
    };

    $.fn.tmplPrepend = function(tmplId, data, prefix) {
        var p = prefix || 'tmpl_';
        var tmpl = doT.template($('#' + p + tmplId).text());
        if (!$.isArray(data)) data = [data];

        return this.each(function() {
            var $this = $(this);
            for (var itemIdx = 0; itemIdx < data.length; itemIdx++) {
                $this.prepend(tmpl(data[itemIdx]));
            }
        });
    };

})(jQuery);