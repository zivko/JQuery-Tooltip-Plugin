;(function ( $, window, document, undefined ) {

    var pluginName = "tooltip",
        defaults = {
            speed: 200,
            mode: "bottom"
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {

         return $(this.element).each(function() {

         var tipr_cont = '.tipr_container_' + defaults.mode;
    

            $(this).hover(
                    function ()
                    {
                         var out = '<div class="tipr_container_' + defaults.mode + '"><div class="tipr_point_' + defaults.mode + '"><div class="tipr_content">' + $(this).attr('data-tooltip') + '</div></div></div>';
                         
                         $(this).append(out);
                    
                         var w_t = $(tipr_cont).outerWidth();
                         var w_e = $(this).width();
                         var m_l = (w_e / 2) - (w_t / 2);
                    
                         $(tipr_cont).css('margin-left', m_l + 'px');
                         $(this).removeAttr('title');
                         $(tipr_cont).fadeIn(defaults.speed);              
                    },
                    function ()
                    {   
                         $(tipr_cont).remove();    
                    }     
               );
        
         });
        
        
            
        },

    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );
