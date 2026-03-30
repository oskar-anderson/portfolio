---
slug: "advanced-query-params"
title: "Advanced query params"
slugDirectory: "blog/"
thumbnail: ""
intro: ""
tags: ["PHP", "JS", "Java", "Python"]
minToRead: 6
publishedDate: "25.05.2024"
authorName: "Karl Oskar Anderson"
---

Sometimes webapps need to pass arrays or nested objects as URL query parameters in order to submit a form or navigate to another page.
Each web framework has its own syntax to achive this, as there is no single standard. 
Lets look at how different frameworks handle complex data types in query strings. 

## Primitive array
First lets look at how to send array of primitives like array of strings or array of numbers in query string. The syntax to encode simple array data in query params is varied. There is no official standard and specific framework implementations are not well documented. [This Stack Overflow post](https://stackoverflow.com/questions/6243051/how-to-pass-an-array-within-a-query-string/9547490#9547490) suggest three possible options.

### Repeated parameter syntax
The repeated parameter syntax consists of repeating the property name multiple times to indicate a array value. 
```js
?room_occupant=2&room_occupant=3
```

This is the most standard way of serializing array data into URL. This format gets created when a form with multiple checkboxes with the same name gets submited. Code for endpoint implementation can be found [here](#extra-repeated-parameters).

```html
<form method="get">
    <fieldset>
        <legend>Snacks:</legend>
        <label><input type="checkbox" name="snack" value="ice-cream">Ice cream</label>
        <label><input type="checkbox" name="snack" value="cookies">Cookies</label>
        <label><input type="checkbox" name="snack" value="nuts">Nuts</label>
    </fieldset>
    
    <button type="submit">Submit</button>
</form>
```

The compatibility for this format is generally good, but for some reason PHP `$_GET` superglobal and Laravel `$req->input()` both only consider the last occurance of the parameter. Endpoint example implementations can be found [here](#extra-repeated-parameters).

<table class="table">
    <thead class="table-light">
        <tr>
            <th>
                Framework
            </th>
            <th>
                Supports
            </th>
            <th>
                Explanation
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PHP</td>
            <td>❌</td>
            <td>Native PHP $_GET superglobal only returns the last property occurance</td>
        </tr>
        <tr>
            <td>.NET</td>
            <td>✔️</td>
            <td>Repeated parameters get binded to array with automatic type conversion</td>
        </tr>
        <tr>
            <td>Spring Boot</td>
            <td>✔️</td>
            <td>Repeated parameters get binded to array with automatic type conversion</td>
        </tr>
        <tr>
            <td>Laravel</td>
            <td>❌</td>
            <td>Only the last parameter occurance will be returned</td>
        </tr>
        <tr>
            <td>Django</td>
            <td>✔️</td>
            <td>Collects all occurrences of the parameter into a list when using `request.GET.getlist` method</td>
        </tr>
    </tbody>
</table>

The repeated parameter syntax (`?room_occupant=2&room_occupant=3`) is widely supported. However, PHP and Laravel only consider the last occurrence of the parameter, while other frameworks like .NET, Spring Boot, and Django handle it correctly by collecting all occurrences into an array.

### Empty bracket syntax
The empty bracket syntax appends `[]` to the end of the parameter to symbolise it being a array.
```js
?room_occupant[]=2&room_occupant[]=3
```

This change allows PHP $_GET superglobal and Laravel framework to treat the parameter properly as an index based array. Other frameworks consider the brackets to be part of the name and not a distinct syntax for parsing query string. This means that the empty bracket syntax gets treated similarly to the repeated parameter syntax in non PHP environments. Endpoint example implementations can be found [here](#extra-empty-bracket).

<table class="table">
    <thead class="table-light">
        <tr>
            <th>
                Framework
            </th>
            <th>
                Supports
            </th>
            <th>
                Description
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PHP</td>
            <td>✔️</td>
            <td>Native PHP $_GET superglobal returns all property occurances</td>
        </tr>
        <tr>
            <td>.NET</td>
            <td>✔️</td>
            <td>Repeated parameters get binded to array with automatic type conversion, parameter name needs to end with `[]`</td>
        </tr>
        <tr>
            <td>Spring Boot</td>
            <td>✔️</td>
            <td>Repeated parameters get binded to array with automatic type conversion, parameter name needs to end with `[]`. Requires configuring Tomcat settings to accept `[]` in query param name.</td>
        </tr>
        <tr>
            <td>Laravel</td>
            <td>✔️</td>
            <td>Will return array of all parameter occurances</td>
        </tr>
        <tr>
            <td>Django</td>
            <td>✔️</td>
            <td>Collects all occurrences of the parameter into a list</td>
        </tr>
    </tbody>
</table>

Overall, while the empty bracket syntax (`?room_occupant[]=2&room_occupant[]=3`) is not universally treated as an array indicator across all frameworks, many modern frameworks, including .NET, Spring Boot, Laravel, and Django, have mechanisms to handle repeated parameters effectively, ensuring they are correctly interpreted as arrays.

### Index bracket syntax
Index bracket syntax gives every array element a explicid index value.

```js
?room_occupant[0]=2&room_occupant[1]=3
```

This change makes URL more readable, but most frameworks outside PHP do not support this format. Below table highlights support for this format by different frameworks. Code for framework endpoint implementation can be found [in extras](#extra-index-bracket).



<table class="table">
    <thead class="table-light">
        <tr>
            <th>
                Framework
            </th>
            <th>
                Supports
            </th>
            <th>
                Description
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PHP</td>
            <td>✔️</td>
            <td>Native PHP $_GET superglobal returns all property occurances</td>
        </tr>
        <tr>
            <td>.NET</td>
            <td>✔️</td>
            <td>Repeated parameters get binded to array with automatic type conversion</td>
        </tr>
        <tr>
            <td>Spring Boot</td>
            <td>❌</td>
            <td>Will throw MissingServletRequestParameterException</td>
        </tr>
        <tr>
            <td>Laravel</td>
            <td>✔️</td>
            <td>Laravel's input method will return array of all parameter occurances</td>
        </tr>
        <tr>
            <td>Django</td>
            <td>❌</td>
            <td>Parameters get treated as separate arguments</td>
        </tr>
    </tbody>
</table>

The index bracket syntax (`?room_occupant[0]=2&room_occupant[1]=3`) assigns explicit indexes to array elements in query strings. This makes the URL more readable but is less commonly supported outside PHP environments. While .NET and Laravel handle this format effectively, Spring Boot and Django do not natively support it, treating the parameters as separate arguments instead.

Next, we will explore the syntax where indexes are replaced with property names to support nested objects.

## Array of objects
More complex data structures like nested objects or array of objects can be represented in query strings using either bracket notation or dot notation. 


```js
// Dot notation used brackets for array element indication and dot for property indication
?room[0].adultCount=2&room[1].adultCount=1&room[1].kidAges[1]=3&room[1].kidAges[2]=6

// Bracket notation uses brackers for both array element and property indication 
?room[0][adultCount]=2&room[1][adultCount]=1&room[1][kidAges][1]=3&room[1][kidAges][2]=6
```

This functionality allows passing data of any type through a GET request. This allows passing complex application state with a link tag.

<table class="table">
    <thead class="table-light">
        <tr>
            <th>Framework</th>
            <th>Dot Notation</th>
            <th>Bracket Notation</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PHP</td>
            <td>❌</td>
            <td>✔️</td>
            <td>PHP natively supports nested objects using the `$_GET` superglobal with bracket notation.</td>
        </tr>
        <tr>
            <td>.NET</td>
            <td>✔️</td>
            <td>❌</td>
            <td>.NET can bind nested objects using models with dot notation.</td>
        </tr>
        <tr>
            <td>Spring Boot</td>
            <td>❌</td>
            <td>❌</td>
            <td>Spring Boot does not natively support nested objects in query parameters, requiring custom deserialization.</td>
        </tr>
        <tr>
            <td>Laravel</td>
            <td>❌</td>
            <td>✔️</td>
            <td>Laravel supports nested objects via the `$request->input()` method, parsing them into associative arrays with bracket notation.</td>
        </tr>
        <tr>
            <td>Django</td>
            <td>❌</td>
            <td>❌</td>
            <td>Django does not natively support nested objects in query parameters, requiring manual parsing.</td>
        </tr>
    </tbody>
</table>

## Sources
* https://github.com/Azure/azure-functions-nodejs-library/issues/168
* https://codereview.stackexchange.com/questions/269633/serialize-nested-objects-and-arrays-to-querystring

## Extra

Code examples of frameworks handling different query parameter syntaxes.

### Extra repeated parameters

Query being parsed - `?room_occupant=2&room_occupant=3`

PHP
```php
echo json_encode($_GET["room_occupant"]); // -> "3"
```

.NET
```cs
[HttpGet("query")]
public IActionResult GetQuery([FromQuery] int[] room_occupant)
{
    return Ok(room_occupant);  // -> [2, 3]
}
```

Spring Boot
```java
@GetMapping("/api/query")
public ResponseEntity<int[]> getQuery(@RequestParam int[] room_occupant) {
    return ResponseEntity.ok(room_occupant); // -> [2, 3]
}
```

Laravel
```php
Route::get('/api/query', function (Request $request) {
    return $request->input('room_occupant'); // -> "3"
});
```

Python
```python
from rest_framework.views import APIView
from django.http import JsonResponse

class QueryStringParserView(APIView):
    def get(self, request, *args, **kwargs):
        params = request.GET.getlist('room_occupant')
        return JsonResponse({'room_occupant': params})  # -> [2, 3]
```


### Extra empty bracket
Query being parsed - ?room_occupant[]=2&room_occupant[]=3

PHP
```php
echo json_encode($_GET["room_occupant"]); // -> ["2", "3"]
```

.NET
```cs
[HttpGet("query")]
public IActionResult GetQuery([FromQuery(Name = "room_occupant[]")] int[] room_occupant)
{
    return Ok(room_occupant);  // -> [2, 3]
}
```

Spring Boot
```java
@Configuration
public class TomcatConfig {

    @Bean
    public WebServerFactoryCustomizer<TomcatServletWebServerFactory> tomcatCustomizer() {
        return (factory) -> factory.addConnectorCustomizers((connector) -> {
            connector.setProperty("relaxedQueryChars", "[]{}");
        });
    }
}


@GetMapping("/api/query")
public ResponseEntity<int[]> getQuery(@RequestParam("room_occupant[]") int[] room_occupant) {
    return ResponseEntity.ok(room_occupant); // -> [2, 3]
}
```

Laravel
```php
Route::get('/api/query', function (Request $request) {
    return $request->input('room_occupant'); // -> ["2", "3"]
});
```

Python
```python
from rest_framework.views import APIView
from django.http import JsonResponse

class QueryStringParserView(APIView):
    def get(self, request, *args, **kwargs):
        params = request.GET.getlist('room_occupant[]')
        return JsonResponse({'room_occupant': params})  # -> [2, 3]
```

### Extra index bracket
Query being parsed - ?room_occupant[0]=2&room_occupant[1]=3

PHP
```php
echo json_encode($_GET["room_occupant"]); // -> ["2", "3"]
```


.NET
```cs
[HttpGet("query")]
public IActionResult GetQuery([FromQuery] int[] room_occupant)
{
    return Ok(room_occupant);  // -> [2, 3]
}
```

Spring Boot
```java
@GetMapping("/api/query")
public ResponseEntity<int[]> getQuery(@RequestParam int[] room_occupant) {
    return ResponseEntity.ok(room_occupant); // -> [2, 3]
}
```

Laravel
```php
Route::get('/api/query', function (Request $request) {
    return $request->input('room_occupant'); // -> ["2", "3"]
});
```

Python
```python
from rest_framework.views import APIView
from django.http import JsonResponse

class QueryStringParserView(APIView):
    def get(self, request, *args, **kwargs):
        return JsonResponse(request.GET)  # { "room_occupant[0]": "2", "room_occupant[1]": "3" }
```