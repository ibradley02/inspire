function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
		drawQuote(quote)
	})
	function drawQuote(quote){
		var quoteElem = document.getElementById('quote')
		var template = ''
		template += `
		<div class="row">
			<div class="quote-wrap">
				<div class="col-xs-6 col-xs-offset-3 quote">
					<p>"${quote.quote}"</p>
				</div>
				<div class="col-xs-6 col-xs-offset-3 quote-author">
					<h5>-${quote.author}</h5>
				</div>
			</div>
	</div>
		`
		quoteElem.innerHTML = template
	} 
}
