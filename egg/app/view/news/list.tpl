<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
      {{ helper.relativeTime(item.time) }}
      <li class="item">
        <a href="{{ item.url }}">{{ item.title }}</a>
      </li>
      {% endfor %}
    </ul>
  </body>
</html>