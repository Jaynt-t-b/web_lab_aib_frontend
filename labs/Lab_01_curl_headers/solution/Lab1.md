#### lab 1

Для того чтобы получить указанный в задании формат ответа:

your code in this place
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 216.58.207.206:80...
* Connected to youtube.com (216.58.207.206) port 80 (#0)
> HEAD / HTTP/1.1
> Host: youtube.com
> User-Agent: curl/7.83.1
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 301 Moved Permanently
< Content-Type: application/binary
< X-Content-Type-Options: nosniff
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Pragma: no-cache
< Expires: Mon, 01 Jan 1990 00:00:00 GMT
< Date: Tue, 06 Sep 2022 16:02:21 GMT
< Location: https://youtube.com/
< Content-Length: 0
< Server: ESF
< X-XSS-Protection: 0
< X-Frame-Options: SAMEORIGIN
<
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0HTTP/1.1 301 Moved Permanently
Content-Type: application/binary
X-Content-Type-Options: nosniff
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Pragma: no-cache
Expires: Mon, 01 Jan 1990 00:00:00 GMT
Date: Tue, 06 Sep 2022 16:02:21 GMT
Location: https://youtube.com/
Content-Length: 0
Server: ESF
X-XSS-Protection: 0
X-Frame-Options: SAMEORIGIN

Нужно ввести следующую команду: curl -v https://youtube.com/

-v включает подробный вывод (verbose mode), который будет показывать информацию о передаче данных, 
такую как хост, заголовки и прочее.

Пользователь@DESKTOP-L64SPF9 MINGW64 ~
$ curl -v https://youtube.com/
* processing: https://youtube.com/
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:--  0:00:03 --:--:--     0*   Trying [2a00:1450:4007:805::200e]:443...
*   Trying 172.217.18.206:443...
  0     0    0     0    0     0      0      0 --:--:--  0:00:07 --:--:--     0* Connected to youtube.com (172.217.18.206) port 443
* schannel: disabled automatic use of client certificate
  0     0    0     0    0     0      0      0 --:--:--  0:00:17 --:--:--     0* using HTTP/1.x
> GET / HTTP/1.1
> Host: youtube.com
> User-Agent: curl/8.2.1
> Accept: */*
>
  0     0    0     0    0     0      0      0 --:--:--  0:00:20 --:--:--     0* schannel: server closed abruptly (missing close_notify)
  0     0    0     0    0     0      0      0 --:--:--  0:00:20 --:--:--     0
* Closing connection
* schannel: shutting down SSL/TLS connection with youtube.com port 443
curl: (56) Failure when receiving data from the peer


IP-адрес веб-сервера и порт:

Для example.ru: curl -I example.ru
Для www.example.ru: curl -I www.example.ru
Для http://example.ru: curl -I http://example.ru
Для https://example.ru: curl -I https://example.ru

Команда curl -I отправляет HEAD-запрос на указанный ресурс
и выводит заголовки ответа, включая IP-адрес и порт сервера.

Истинное значение хоста ресурса можно найти в заголовке "Location" ответа. 
Этот заголовок указывает на конечный URL-адрес ресурса после всех перенаправлений. 

Информация о кэшировании может быть найдена в заголовке "Cache-Control". 
Например: Cache-Control: max-age=60
Этот заголовок указывает, что ресурс может кэшироваться на протяжении 60 секунд.

Данные о формате данных в теле ответа могут быть найдены в заголовке "Content-Type". 
Например: Content-Type: text/html; charset=UTF-8
Этот заголовок указывает на то, что данные в теле ответа представлены в формате HTML с кодировкой UTF-8.

Код ответа и его значение можно найти в первой строке ответа. 
Например: HTTP/1.1 200 OK
Здесь код ответа - 200, а его значение - OK.

Протокол, по которому осуществлялся запрос, указывается в URL-адресе ресурса перед двоеточием. 
Например, http://example.ru использует HTTP, а https://example.ru использует HTTPS.

Другая важная информация, содержащаяся в заголовке, 
зависит от конкретного ресурса и может включать в себя различные параметры, 
куки, пользовательские агенты и многое другое.

