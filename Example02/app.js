var i = 1;

var main = function () {
  "use strict";

  var addCommentFromInputBox = function () {
    var $new_comment;
    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      $(".comments").append($new_comment);
      $(".comment-input input").val("");
    }
  };

  $(".comment-input #addButton").on("click", function (event) {
    addCommentFromInputBox();
  });

  $(".comment-input #addDefault").on("click", function (event) {
    var $new_comment;
    $new_comment = $("<p>").text("Default Comment " + String(i));
    $(".comments").append($new_comment);
    i++;
  });

  $(".comment-input input").on("keypress", function (event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

$(document).ready(main);
