$(document).ready(function() {
    let $button = $('button')

    $button.on('click', function buttonclick (iindex){
        
        iindex = parseInt($(this).html)
        console.log(iindex.html)
        for (i=0; i<9; i++) {
            $('.result').append(
                '<p>'+ i + '</p>'
            )

        }
    })
})
