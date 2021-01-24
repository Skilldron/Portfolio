var $div = $("#status");
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "class") {
            var attributeValue = $(mutation.target).prop(mutation.attributeName);
            $div.delay(5200).fadeOut();
            console.log("Class attribute changed to:", attributeValue);
        }
    });
});

observer.observe($div[0], {
attributes: true
});