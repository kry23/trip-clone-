// $(document).ready(function () {
//   addNumbers();
// });
// function addNumbers() {
//   var value1 = $("#value1").val();
//   if (!value1) {
//     value1 = 0;
//   }
//   // var second = $("#second").val();
//   // if (!second) {
//   //     second = 0;
//   // }
//   sum = Number(value1)++;
//   $("#sum").html(sum);
// }

// $("#minus1").on({
//   click: function (e) {
//     parseInt($("#value1").val()) - 1;
//   },
// });

// $("#plus1").on({
//   click: function (e) {
//     $("#value1").val() = parseInt($("#value1").val()) + 1;
//     console.log($("#value1").val());
//   },
// });

// $(function () {
//   var spinner = $("#spinner").spinner();

//   $("#disable").on("click", function () {
//     if (spinner.spinner("option", "disabled")) {
//       spinner.spinner("enable");
//     } else {
//       spinner.spinner("disable");
//     }
//   });
//   $("#destroy").on("click", function () {
//     if (spinner.spinner("instance")) {
//       spinner.spinner("destroy");
//     } else {
//       spinner.spinner();
//     }
//   });
//   $("#getvalue").on("click", function () {
//     alert(spinner.spinner("value"));
//   });
//   $("#setvalue").on("click", function () {
//     spinner.spinner("value", 5);
//   });

//   $("button").button();
// });

jQuery(function () {
  var j = jQuery;

  var addInput = ".room-num";

  var n = 1;
  j("#plus1").on("click", function () {
    j(addInput).val(++n);
  });
  j("#minus1").on("click", function () {
    if (n >= 1) {
      j(addInput).val(--n);
    } else {
    }
  });
});
jQuery(function () {
  var j = jQuery;

  var addInput = ".room-num1";

  var n = 1;
  j("#plus2").on("click", function () {
    j(addInput).val(++n);
  });
  j("#minus2").on("click", function () {
    if (n >= 1) {
      j(addInput).val(--n);
    } else {
    }
  });
});

jQuery(function () {
  var j = jQuery;

  var addInput = ".room-num2";

  var n = 1;
  j("#plus3").on("click", function () {
    j(addInput).val(++n);
    j("button").click(function () {
      j(".dropdown-menu").append(
        "<select> <option>1 </option>1<option> 2</option>2<option> 3</option>3</select>"
      );
    });
  });
  j("#minus3").on("click", function () {
    if (n >= 1) {
      j(addInput).val(--n);
    } else {
    }
  });
});

jQuery(function () {
  var j = jQuery;

  j("#drpdwmmenu").on("click", function () {
    j("#drpdwn").toggle();
  });
});

// jQuery(function () {
//   var j = jQuery;

//   var c = 0;
//   j("#plus3").on("click", function () {
//     c++;
//     alert(c);
//     j(this).before($(this).prev().clone());
//     j("#test").attr("name", "test" + c);
//     j("#counting").attr("name", "count" + c);
//   });
// });

// jQuery(function () {
//   var j = jQuery;

//   j("#btn-finito").on("click", function () {
//     j("#drpdwn").toggle();
//   });
// });

// jQuery(function () {
//   var j = jQuery;

//   var addInput = "#value2";
//   var n = 1;
//   j("#plus2").on("click", function () {
//     j(addInput).val(++n);
//   });
//   j("#minus2").on("click", function () {
//     if (n >= 1) {
//       j(addInput).val(--n);
//     } else {
//     }
//   });
// });

// jQuery(function () {
//   var j = jQuery;

//   var addInput = "#value3";
//   var n = 1;
//   j("#plus3").on("click", function () {
//     j(addInput).val(++n);
//   });
//   j("#minus3").on("click", function () {
//     if (n >= 1) {
//       j(addInput).val(--n);
//     } else {
//     }
//   });
// });

// jQuery(function () {
//   var j = jQuery;

//   var addInput = "#value4";
//   var n = 1;
//   j("#plus4").on("click", function () {
//     j(addInput).val(++n);
//   });
//   j("#minus4").on("click", function () {
//     if (n >= 1) {
//       j(addInput).val(--n);
//     } else {
//     }
//   });
// });
