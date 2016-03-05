window.addEventListener("load",function() { // Wait for the window to finish loading
 
	var Q = window.Q = Quintus({development: true, imagePath: "/sprites/Graphics/Autotiles/"})                // Create a new engine instance
	    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX") // Load any needed modules
	    .setup("myGame")                        // Bind Quintus to the canvas with ID "myGame"
	    .controls()                             // Add in default controls (keyboard, buttons)
	    .touch();                               // Add in touch support (for the UI)
    
    
    Q.scene("Testingground", function(stage)
    {
    	Q.stageTMX("Mainmap.tmx", stage);
    }
    );

    Q.loadTMX("Mainmap.tmx", function()
    {
    	Q.stageScene("Testingground");
    }
    );
});