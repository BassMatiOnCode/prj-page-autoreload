//	page-autoreload-1.js    2024-03-20    2024-03-20    usp
//	Reloads a page automatically if its mtime has changed on the server.
//	Can be used a module script.
"use strict" ;
( function ( ) {
	let mtime = "" ;
	setInterval ( ( ) => { 
		fetch ( window.location, { method : "HEAD" } )
		.then ( response => {
			const currentMtime = response.headers.get( "last-modified" );
			if ( mtime === "" ) mtime = currentMtime ;
			else if ( mtime !== currentMtime ) window.location.reload( );
			} ) ;
		} , 3000 ) ;
	} ) ( ) ;