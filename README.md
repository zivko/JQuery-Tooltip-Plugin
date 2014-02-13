Javascript
==========

Tooltip is a small and simple jQuery tooltip plugin.

## Usage


1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```
2. Include plugin's js code:

	```html
	<script src="tooltip.js"></script>
	```

3. Include plugin's css code:

	```html
	 <link rel="stylesheet" href="tooltip.css">
	```

4. Plugin call 
       ```js
       //parameter : speed - int value (100, 200..etc).Default : 200
       //parameter:  mode - string value (bottom, top).Default: bottom
       $("#element").tooltip({speed:200, mode: "bottom"});
       ```
5. Put put together
    ```html
     <html>
     <head>
     <title>Tooltip Plugin</title>
     <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
     <script src="tooltip.js"></script>
     <link rel="stylesheet" href="tooltip.css">
     <script type="text/javascript">
     $( document ).ready(function() {
       $(".pelement").tooltip();
     });
     </script>
    </head>
    <body>
    <p data-tooltip="This is text for tooltip" class="pelement">This is simple text.</p>
    </body>
    </html>
     ```
