
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '959810074924172');
fbq('track', 'PageView');

// 
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-74399939-1');
// 
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-139978089-1');

// 

if(window.location.hash == "#book-now-generic") {
    $('#generic-book-now').modal('show');
}

$('#generic-book-now #book-now-project').on('change', function() {
    var project = $(this).val();
    if (project == 'Bloomfields') {
        $('#generic-book-now #book-now-unit-type option').remove();
        $('#generic-book-now select#book-now-unit-type').append('<option value="">Please select unit type</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Villas</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Twinhouses</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Townhouses</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Duplexes</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Lofts</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Apartments</option>');                  
    }else if(project=='D-Bay'){
        $('#generic-book-now #book-now-unit-type option').remove();
        $('#generic-book-now select#book-now-unit-type').append('<option value="">Please select unit type</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Villas</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Twinhouses</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Townhouses</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>CHALETS</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Lofts</option>');
    }else if(project=='Rivers'){
        $('#generic-book-now #book-now-unit-type option').remove();
        $('#generic-book-now select#book-now-unit-type').append('<option value="">Please select unit type</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Apartments</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Duplexes</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Townhouse</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Twinhouse</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Villas</option>');
    } else if(project=='Salt')  {
        $('#generic-book-now #book-now-unit-type option').remove();
        $('#generic-book-now select#book-now-unit-type').append('<option value="">Please select unit type</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Villas</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Twinhouses</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Townhouses</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Chalets</option>');
    }else{
        $('#generic-book-now #book-now-unit-type option').remove();
        $('#generic-book-now select#book-now-unit-type').append('<option value="">Please select unit type</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Chalet</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Twinhouse</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Townhouses</option>');
        $('#generic-book-now select#book-now-unit-type').append('<option>Stand-alone Villa</option>');
    }
});
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/vendors/scrolloverflow.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/fullpage.min.js"></script>
<script defer type="text/javascript" src="https://tatweermisr.com/js/countUp.min.js"></script>
<script defer type="text/javascript" src="https://tatweermisr.com/js/home.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@10.19.0/dist/lazyload.min.js"></script>
<script>
    $(document).ready(function () {
        // $('#book-now-project').hide();
        // $("#book-now-project").val("Il Monte Galala");
        var myLazyLoad = new LazyLoad({
            elements_selector: ".lazy"
        });
    });
