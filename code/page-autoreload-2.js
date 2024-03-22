//	page-autoreload-1.js    2024-03-20    2024-03-20    usp
//	Reloads a page automatically if its mtime has changed on the server.
//	Can be used a module script.
"use strict" ;
( function ( ) {
	//	Check search params for watchlist parameter
	const searchParams = new URL( import.meta.url).searchParams || "" ;
	let watchlist = searchParams.get( "watch" );
	//	Use document location if no watchlist was given
	if ( watchlist === null ) watchlist = [ window.location.pathname ];
	//	otherwise split comma separated list into individual array elements
	else watchlist = watchlist.replace( /,\s*/g, "," ).split( "," );
	//	Convert watchlist entries to structs with url plus mtime
	for ( let i = 0 ; i < watchlist.length ; i ++ ) watchlist[ i ] = { url : watchlist[ i ] , mtime : "" };
	//	Setup periodic header requests
	setInterval ( ( ) => { 
		//	Fetch watchlist resources
		const requestResults = watchlist.map( entry => fetch( entry.url , { method : "HEAD" } ) ) ;
		//	Process the fetch requestResults when all are settled 
		Promise.allSettled( requestResults ).then ( requestResults => {
			//	Loop through the results, process them if request was not rejected
			for ( let i = 0 ; i < requestResults.length ; i ++ ) if ( requestResults[ i ].status === "fulfilled" ) {
				//	Get the remote file mtime
				const mtime = requestResults[ i ].value.headers.get( "last-modified" );
				//	Setup watchlist mtime if not initialized
				if ( watchlist[ i ].mtime === "" ) watchlist[ i ].mtime = mtime ;
				//	Compare current mtime with stored mtime and reload document if not equal
				else if ( watchlist[ i ].mtime !== mtime ) { window.location.reload( ); break ; }
			}	} ) ;
		} , 3000 ) ;  // This is the interval length in milliseconds
	} ) ( ) ;