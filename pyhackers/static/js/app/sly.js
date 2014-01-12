// Generated by CoffeeScript 1.6.3
(function() {
  jQuery(function($) {
    var $items, newItems, next, renderItems, start, template;
    $items = $("#frame");
    template = Handlebars.compile($('#project-template').html());
    start = 0;
    newItems = function(response) {
      start += 50;
      return renderItems(response);
    };
    renderItems = function(response) {
      $items.append(template({
        projects: response.data,
        start: start
      }));
      return window.scrollBy(0, 100);
    };
    next = function() {
      return $.getJSON("/fancy.json?start=" + start, newItems);
    };
    $(document).on("click", "#next", function(evt) {
      evt.preventDefault();
      return next();
    });
    return next();
  });

}).call(this);
