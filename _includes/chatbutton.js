    var elements = document.querySelectorAll('a');
    Array.prototype.forEach.call(elements, function(el, i){
        if(el.innerHTML.substring(0,1)=='[' && el.innerHTML.substring(el.innerHTML.length-1)==']') {
            el.innerHTML = el.innerHTML.substring(1,el.innerHTML.length-1);
            el.classList.add('btn');
        }
    });
