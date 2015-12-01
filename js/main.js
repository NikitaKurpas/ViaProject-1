$(function () {
    $(document).ready(function () {
        $('.bxslider').bxSlider();
        $(".lightbox").fancybox();

        var c = document.getElementById("myCanvas");
        var ctx = c ? c.getContext("2d") : null;

        function drawCounter(ctx, canvas, num) {
            function drawBase() {
                ctx.strokeStyle = "#d9c5ec";
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(75, 75, 50, 1.5 * Math.PI, 3.5 * Math.PI);
                ctx.stroke();
            }
            function drawArc(startRad, endRad) {
                ctx.strokeStyle = "#663399";
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.arc(75, 75, 50, startRad * Math.PI, endRad * Math.PI);
                ctx.stroke();
            }
            function outputNum(num) {
                ctx.strokeStyle = "#000";
                ctx.lineWidth = 1;
                ctx.font = "48px serif";
                var xPos = 65;
                if (num >= 10 && num <= 99) {
                    xPos = 50;
                }
                else if (num >= 100) {
                    xPos = 40;
                }
                ctx.strokeText(num, xPos, 90);
            }
            var interval = 2 / 100;
            var start = 1.5;
            var end = start + interval * num;

            drawBase();
            drawArc(start, end);
            outputNum(num);
        }

        if (ctx != null) {
            var i = 0;

            var successRate = setInterval(function () {
                if (i >= 100) {
                    clearInterval(successRate);
                }
                ctx.clearRect(0, 0, c.width, c.height);
                drawCounter(ctx, c, i++);
                ctx.strokeStyle = "#555";
                ctx.lineWidth = 1;
                ctx.font = "20px Verdana";
                ctx.strokeText("Success rate", 10, 145);
            }, 100);
        }

        $("#contact-form").submit(function (e) {
            e.preventDefault();
            var name = $("#form-field-name");
            var email = $("#form-field-email");
            var phoneNumber = $("#form-field-phone-number");
            var company = $("#form-field-company");
            var web = $("#form-field-web");
            var note = $("#form-field-note");

            var err = false;

            if (name.val().length > 1 && name.val().length <= 20) {
                // OK
                $(".validation-name.field-validation-valid").show();
                $(".validation-name.field-validation-error").hide();
            } else {
                // ERROR
                err = true;
                $(".validation-name.field-validation-valid").hide();
                $(".validation-name.field-validation-error").show();
            }

            if (email.val().indexOf("@") !== -1) {
                // OK
                $(".validation-email.field-validation-valid").show();
                $(".validation-email.field-validation-error").hide();
            } else {
                // ERROR
                err = true;
                $(".validation-email.field-validation-valid").hide();
                $(".validation-email.field-validation-error").show();
            }

            if (phoneNumber.val().length === 13 && phoneNumber.val().indexOf("+") !== -1) {
                // OK
                $(".validation-phone.field-validation-valid").show();
                $(".validation-phone.field-validation-error").hide();
            } else {
                // ERROR
                err = true;
                $(".validation-phone.field-validation-valid").hide();
                $(".validation-phone.field-validation-error").show();
            }

            if (company.val().length > 2) {
                // OK
                $(".validation-company.field-validation-valid").show();
                $(".validation-company.field-validation-error").hide();
            } else {
                // ERROR
                err = true;
                $(".validation-company.field-validation-valid").hide();
                $(".validation-company.field-validation-error").show();
            }

            if (!err) {
                alert("Form submitted!");
            }
        })
    });
});