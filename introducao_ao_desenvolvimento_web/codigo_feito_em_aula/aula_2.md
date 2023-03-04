# UI - Javascript

## Modificadores de HTML

```
<body>
    <div id="outerDiv">
        <p class='mainPara'>Main Paragraph</p>
        <ul>
            <li>First List Item</li>
            <li>Second List Item</li>
            <li>Third List Item</li>
            <li>Fourth List Item</li>
        </ul>
        <div id="innerDiv">
            <p class='subPara' id='P1'>Paragraph 1</p>
            <p class='subPara' id='P2'>Paragraph 2</p>
            <p class='subPara' id='P3'>Paragraph 3</p>
            <p class='subPara' id='P4'>Paragraph 4</p>
        </div>
        <table>
            <tr>
                <td>Row 1
                </td>
            </tr>
            <tr>
                <td>Row 2
                </td>
            </tr>
            <tr>
                <td>Row 3
                </td>
            </tr>
            <tr>
                <td>Row 4
                </td>
            </tr>
            <tr>
                <td>Row 5
                </td>
            </tr>
        </table>
        <input type="text" /><input type="submit" value="Submit" />
    </div>
</body>

<script>
    window.onload = function () {
        var element = document.getElementById("outerDiv");
        alert(element.innerHTML);
    }
</script>
```



```
<script>
    window.onload = function() {
        var paragraphs = document.getElementsByTagName("p");
        alert(paragraphs.length);
    }
</script>
```





```
<script>
    window.onload = function() {
        var paragraphs = document.getElementsByClassName("subPara");
        alert("<p> elements with class subPara: " + paragraphs.length);
    }
</script>
```



```
<script>
    var element = document.getElementById("innerDiv");
    alert(element.innerHTML);
    document.removeChild(element);
    var afterRemove = document.getElementById("innerDiv");
    alert(afterRemove);
</script>
```



```
<script>
    var element = document.getElementById("innerDiv");
    alert(element.innerHTML);
    document.removeChild(element);
    var afterRemove = document.getElementById("innerDiv");
    alert(afterRemove);
</script>
```



```
<script>
    var outerDiv = document.getElementById("outerDiv");
    var element = document.createElement("article");
    element.innerText = "My new <article> element";
    outerDiv.appendChild(element);
</script>
```


```
<script>
var element = document.getElementById("outerDiv").appendChild(document.
createElement("article"));
element.innerText = "My new <article> element";
</script>
``` 

```
<script>
    var element = document.getElementById("outerDiv").insertBefore(
        document.createElement("article"),
        document.getElementById("innerDiv"));
    element.innerText = "My new <article> element";
</script>   
```


```
<script>
    var inner = document.getElementById("innerDiv");
    var element = inner.insertBefore(document.createElement("article"), inner.firstChild);
    element.innerText = "My new <article> element";
</script>
```



```
<script>
    var innerDiv = document.getElementById("innerDiv");
    var p = innerDiv.removeChild(document.getElementById("P1"));
</script>
```


```
<script>
    var innerDiv = document.getElementById("innerDiv");
    var newDiv = document.createElement("div");
    for (var i = 0; i < innerDiv.childNodes.length; i++) {
        var anchor = newDiv.appendChild(document.createElement("a"));
        anchor.setAttribute("href", "http://www.bing.ca");
        anchor.text = innerDiv.childNodes[i].textContent;
        newDiv.appendChild(document.createElement("br"));
    }
    innerDiv.replaceNode(newDiv);
</script>
```


## Implementando CANVAS


```
<style>
    canvas {
        border: 1px solid black;
    }
</style>

<canvas id="drawingSurface" width="600" height="400">
    Your browser does not support HTML5.
</canvas>

<script>

</script>
```


```
<script>
    window.onload = function() {
        var drawingSurface = document.getElementById("drawingSurface");
        var ctxt = drawingSurface.getContext("2d");
    }
</script>
```



```
<script>
    window.onload = function() {
        var drawingSurface = document.getElementById("drawingSurface");
        var ctxt = drawingSurface.getContext("2d");
        ctxt.beginPath();
        ctxt.moveTo(10, 10);
        ctxt.lineTo(225, 350);
        ctxt.stroke();
    }    
</script>
```



```
<script>
    ...
    ctxt.beginPath();
    ctxt.moveTo(10, 10);
    ctxt.lineTo(225, 350);
    ctxt.lineTo(300, 10);
    ctxt.lineTo(400, 350);
    ctxt.stroke();
</script>
```



```
ctxt.lineWidth = 5;
ctxt.strokeStyle = '#0f0';
```



```
ctxt.beginPath();
ctxt.arc(150,100,75,0,2 * Math.PI, false);
ctxt.lineWidth = 25;
ctxt.strokeStyle = '#0f0';

ctxt.stroke();
ctxt.beginPath();
ctxt.arc(450, 100, 75, 1.5 * Math.PI, 2 * Math.PI, false);
ctxt.lineWidth = 25;
ctxt.strokeStyle = 'blue';
ctxt.stroke();

ctxt.beginPath();
ctxt.arc(150, 300, 75, 1 * Math.PI, 1.5 * Math.PI, false);
ctxt.lineWidth = 25;
ctxt.strokeStyle = '#0ff';
ctxt.stroke();

ctxt.beginPath();
ctxt.arc(450, 300, 75, .5 * Math.PI, 1 * Math.PI, false);
ctxt.lineWidth = 25;
ctxt.strokeStyle = '#f00';
ctxt.stroke();
```



```
var ctxt = drawingSurface.getContext("2d");
ctxt.lineWidth = 3;
ctxt.rect(150, 150, 250, 175);
var gradient = ctxt.createRadialGradient(200, 200,5, 250, 250,100);
gradient.addColorStop(0, "Red");
gradient.addColorStop(.5, "Orange");
gradient.addColorStop(1, "Blue");
ctxt.fillStyle = gradient;
ctxt.fill();
ctxt.stroke();
```



## Scalave Vector Graphics - SVG


```
<!DOCTYPE html>
<html>

<head>
    <title>Test Web Page</title>
    <script language="javascript">
        function Red(evt) {
            var circle = evt.target;
            circle.setAttribute("style", "fill: red");
        }

        function Green(evt) {
            var circle = evt.target;
            circle.setAttribute("style", "fill: green");
        }
    </script>
</head>
Objective 1.2: Write code that interacts with UI controls CHAPTER 1 55

<body>
    <svg>
<circle id="Circle" cx="50" cy="50" r="50" fill="green" onmouseover="Red(evt)"
onmouseout="Green(evt)"/>
</svg>
</body>

</html>
```



```
<svg>
    <rect id="lightStandard" x="100" y="100" width="60" height="200" fill="black"/>
    <circle id="redLight" cx="129" cy="145" r="25" fill="red"/>
    <circle id="amberLight" cx="129" cy="205" r="25" fill="yellow"/>
    <circle id="greenLight" cx="129" cy="265" r="25" fill="green"/>
</svg>
```


```
<svg>
    <polygon points="10,15 30,35 10,85 100,85, 70,35,100,15" fill="purple"/>
    <polyline points="10,150 30,170 50,132 62,196 78,165 96,170"
    style="stroke:orange; fill:none; stroke-width:5;"/>
    <line x1="150" y1="100" x2="150" y2="150" style="stroke:blue;stroke-width:3"/>
    <ellipse cx="250" cy="150" rx="30" ry="55" fill="green"/>
    <text x="10" y="10" style="stroke: black;stroke-width:1;">
</svg>
```


### Aplicando estilo programaticamente


```
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="utf-8" />
    <title></title>
    <style>
        html,
        body {
            height: 100%;
            width: 100%;
        }
        
        img {
            height: 150px;
            width: 225px;
        }
    </style>
    <script>
        window.onload = function() {
            var top = document.getElementById("topText");
            var left = document.getElementById("leftText");
            var pos = document.getElementById("positioning");
            document.getElementById("btnPosition").onclick = function() {
                var img = document.getElementById("orange2");
                img.style.position = pos.value;
                img.style.left = left.value + "px";
                img.style.top = top.value + "px";
            }
        }
    </script>
</head>


<body>
    <table style="width: 100%; height: 100%; border: 1px solid black;">
        <tr>
            <td style="vertical-align: top; width: 80%">
                <img id="orange1" src="orange.jpg" />
                <img id="orange2" src="orange.jpg" />
            </td>
            <td style="vertical-align: top;">Left:
                <input type="text" id="leftText" /><br/> Top:
                <input type="text" id="topText" /><br/> Position:
                <select id="positioning">
<option>relative</option>
<option>absolute</option>
</select><br/>
                <input type="button" id="btnPosition" value="Update" />
            </td>
        </tr>
    </table>
</body>

</html>
```



### Implementando um formulário

```
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="utf-8" />
    <title></title>
    <style>
        section {
            margin-top: 15px;
        }
    </style>

</head>

<body>
    <section>
        Key:
        <input type="text" id="toStorageKey" /> Value:
        <input type="text" id="toStorageValue" /><br/>
    </section>

    <section>
        <button type="button" id="btnAdd">Add To Storage</button>
        <button type="button" id="btnRemove">Remove from Storage</button>
        <button type="button" id="btnClear">Clear Storage</button>
    </section>

    <div id="storage">
        <p>Current Storage Contents</p>
    </div>
</body>

</html>
```



```
<script>
    window.onload = function() {
        document.getElementById("btnAdd").onclick = function() {}
        document.getElementById("btnRemove").onclick = function() {}
        document.getElementById("btnClear").onclick = function() {}

        function LoadFromStorage() {}
    }
</script>
```





