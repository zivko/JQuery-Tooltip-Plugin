jQuery tooltip
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
