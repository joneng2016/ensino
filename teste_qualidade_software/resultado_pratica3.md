# Resultado Pratica 3

index.php

```
<?php
header('Content-Type: application/json; charset=utf-8');

$requestMethod = $_SERVER['REQUEST_METHOD'];
$pathInfo = isset($_SERVER['PATH_INFO']) && $_SERVER['PATH_INFO'] ? $_SERVER['PATH_INFO'] : "";

if ($requestMethod === "GET" && $pathInfo === "/infs") {
    http_response_code(200);
    echo json_encode(["infs" => "olá mundo"]);        
    return ;
}

http_response_code(404);

echo json_encode(["not_found" => true]);

return;
```

Dentro do POSTMAN crie o seguinte teste:

```
pm.test("Status code is 200", function() {
    pm.response.to.have.status(200)
})  

```