/**
 * Layout specific inititialisation
 */
var layout = {
    /**
     * Main init function
     */
    init: function() {  
        $('body').removeClass('js_off');
        
        // call all init... methods
        for (var name in this) {
            // if method name start with text 'init'
            if((/^init.+/).test(name)) {
                this[name]();
            }
        }
    },
    // /**
    //  * Inits forms elements
    //  */
    // initForms: function() {
    //     if(typeof $.fn.selectBox == 'function') {
    //         $('#p select').selectBox();
    //     }
    //     if(typeof $.fn.placeholder == 'function') {
    //         $('input[placeholder], textarea[placeholder]').placeholder();
    //     }
    // }

}

$(document).ready(function(){
    layout.init();  
});
