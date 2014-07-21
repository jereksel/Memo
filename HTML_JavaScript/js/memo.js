$(window).load(function() {
    $("#counter").flipCounter();

    $("#counter").flipCounter("startAnimation", {number: 0, end_number: 0, duration: 10, });
    $('#numer').val('1');
    $('#test').val('1');
    var seen = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
    $('.karta').each(function() {
        pomoc = 1;
        while (pomoc == 1) {
            var numRand = Math.floor(Math.random() * 9);
            Math.round(numRand);
            if (numRand != 0) {
                if (seen[numRand] < 2) {
                    //	$(this).append(numRand);
                    $(this).attr("karta", numRand);
                    $(this).addClass('karta-' + numRand);
                    seen[numRand]++
                    pomoc = 0
                }
            }
        }
    });

    $('.karta').addClass('karta-zakryta');

    a = 1
    $('.karta').each(function() {
        $(this).attr('id', a);
        a++;
    })
});

$(function() {

    $('.karta').click(function(event) {
        var i = $('#test').attr('value');
        var sprawdzenie = $(this).attr('odkryta');
        if (sprawdzenie == "prawda") {
            alert("Ta karta jest już odsłonięta");
        }
        else {
            if (i == 1) {
                var target_1 = $(event.target);
                $(target_1).removeClass('karta-zakryta');
                $('#test').val('2');
                var attr_1 = $(this).attr("karta");
                $('#attr_1').val(target_1);
                var id_1 = $(this).attr("id");
                $('#attr_1').val(id_1);
            }
            else {
                var test_abc = $('#attr_1').attr("value");
                var target_1 = $('#' + test_abc);
                var target_2 = $(event.target);
                var id_1 = $(target_1).attr("id");
                var id_2 = $(this).attr("id");
                $(target_2).removeClass('karta-zakryta');
                var attr_1 = $(target_1).attr("karta");
                var attr_2 = $(target_2).delay(5000).attr("karta");
                if (id_1 == id_2) {
                    alert("Po co klikasz dwa razy to samo?");
                    $(target_1).addClass("karta-zakryta");
                    $('#test').val('1');
                }
                else {
                    if (attr_1 == attr_2) {
                        if ($("#counter").flipCounter("getNumber") === 7) {
                            alert("Wygrałeś");
                        } else {
                            alert("Takie same :-)");
                        }
                        var ilosc_punktow = $('#punkty').attr("value");
                        $(target_1).attr("odkryta", "prawda");
                        $(target_2).attr("odkryta", "prawda");
                        var ilosc_punktow = $("#counter").flipCounter("getNumber");
                        var ilosc_punktow_1 = ilosc_punktow + 1;
                        $("#counter").flipCounter("startAnimation", {number: ilosc_punktow, end_number: ilosc_punktow_1, duration: 10, });

                    }
                    else {
                        alert("Nie takie same :-(");
                        $(target_1).addClass("karta-zakryta");
                        $(target_2).addClass("karta-zakryta");
                    }
                    $('#test').val('1');
                }
            }
        }
    });
});

