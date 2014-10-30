$(document).on('ready', function () {

  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/pbyrne222/repos",
    data: {},
    success: function (data) {
      var repo = $.map(data,
      function (repo) {return "<li><a href='" + repo.Url + "'>" + repo.name + "</a></li>";
      });

      $(".repos").append(repo);
       console.log("completed request");
      }
    });

      console.log("made ajax request");
  }
});

  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/pbyrne222",
    data: {},
    success: function(data) {
    var profile = data;

    $(".name").append(profile.login);
    $(".avatar").append('<img src="' + profile.avatar_url + '">')
    $(".location").append(profile.location)
    $(".created").append(profile.created_at)
    $(".followers").append(profile.followers)
    $(".following").append(profile.following)

  },
});
