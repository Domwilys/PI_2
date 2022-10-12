$(document).ready(function() {
    $("sugest_form").submit(function() {
        var dados = jQuery(this).serialize();

        $.ajax({
            url: './response.php',
            cache: false,
            data: dados,
            type: "POST",

            success: function(msg) {
                console.log(msg)
            }
        })
        
        return false;
    });
});