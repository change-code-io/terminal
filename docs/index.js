var e = "[[b;#39ff14;]weare@changecode]";

var App = {
    echo: function(text) {
        this.echo(text, {keepWords: true});
    },
    start: function() {
      showStart(this);
    },

    ls: function() {
        this.error('<ls> is not available. I guess you want to list available commands with <start>:', {keepWords: true});
         showStart(this);
    },
    contact: function() {
        this.echo("");
        this.echo("If you want to get in touch, you can send us an email at <a href='mailto:weare@changecode.io'>weare@changecode.io</a> or book some time with us <a href= >here</a>", {keepWords: true})
    },
    founders: function() {
        this.echo("Change Code was founded by Erin Murphy and Chris Georgen. Erin and Chris met while working at Topl, one of only a handful of blockchain protocols built specifically to power ReFi, social enterprise, and adoption in the Global South.\n\nChris has been active in web3 since 2012 and before starting Change Code, founded two startups in the space—first developing a mobile payments platform on Ethereum in 2015 and then founding Topl in 2017. Chris began programming while at Rice University as part of his research in computation physics, earning him 3 co-authored publications. \n\nBefore joining Topl, Erin worked in development finance for 10 years across 6 countries including Ukraine and India. For the UN Development Programme and others, Erin focused on micro-enterprise development, infrastructure financing, and women’s financial inclusion. In 2021, Erin graduated from the Wharton School and Lauder Institute with her MBA-MA.", {keepWords: true})
    },
    keywords: function() {
        this.echo("social impact, ReFi, blended finance, web3, social enterprise, sustainability \n\nMaybe this will help with SEO", {keepWords: true});
    },
    clear: function() {
        this.clear()
    },
    sudo: function() {
        this.echo("That won't do much here, but if you want the power to create change with us, send us an email at <a href='mailto:weare@changecode.io'>weare@changecode.io</a> expressing your interest and how you think you can help!", {keepWords: true})
    },
    tech: function() {
        this.echo("CC works primarily with web3 technology including blockchains, zero-knowledge proofs, self-sovereign identity, and decentralized storage. \n\nThis website was built using Framer and this terminal was developed using jQuery Terminal. ", {keepWords: true})
    },
    reading_list: function() {
        this.echo("Predictably Irrational: The Hidden Forces That Shape Our Decisions | Dan Ariely | <a href=https://www.goodreads.com/en/book/show/1713426>link</a> <br>Inspired: How to Create Tech Products Customers Love | Marty Cagan | <a href='https://www.goodreads.com/en/book/show/35249663'>link</a> <br>The Infinite Machine: How an Army of Crypto-hackers Is Building the Next Internet with Ethereum | Camila Russo | <a href='https://www.goodreads.com/en/book/show/50175330'>link</a> <br>Capital in the Twenty First Century | Thomas Piketty | | <a href='https://www.goodreads.com/en/book/show/18736925'>link</a>", {raw: true}, {keepWords: true})
    },
}

function initTerminal() {

    var app = App

    var ascii =

".   ____ _                               ____          _               \n"+
".  / ___| |__   __ _ _ __   __ _  ___   / ___|___   __| | ___          \n"+
". | |   | '_ \\ / _` | '_ \\ / _` |/ _ \\ | |   / _ \\ / _` |/ _ \\    \n"+
". | |___| | | | (_| | | | | (_| |  __/ | |__| (_) | (_| |  __/         \n"+
".  \\____|_| |_|\\__,_|_| |_|\\__, |\\___|  \\____\\___/ \\__,_|\\___| \n"+
".                          |___/                                       \n"+
"                                                                       \n"


    var greetingsText = "[[b;#0975DC;]Building the every economy]\n\n\nWelcome human, type [[b;#0975DC;]start] to list available commands and begin learning more about Change Code.\n\n"

    $('body').terminal(App, {
        prompt: function(p){
            var path = '~'
            p(e + ":" + path + "# ");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        greetings: function() {
            let width = window.innerWidth;
            const breakPoint = 531;
            if(width < breakPoint) {
                this.echo(greetingsText, {keepWords: true});
        } else {
            this.echo(ascii + greetingsText, {keepWords: true});
        }},
        completion: true,
        checkArity: false,
    });
};

$(document).ready(function($) {
        initTerminal();
});

function showStart(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#aaa;]contact]       get in touch");
        consoleObj.echo("\t[[b;#aaa;]founders]      a little about Erin and Chris");
        consoleObj.echo("\t[[b;#aaa;]keywords]      relevant search terms");
        consoleObj.echo("\t[[b;#aaa;]reading_list]  texts that inspire us");
        consoleObj.echo("\t[[b;#aaa;]start]         if you get lost");
        consoleObj.echo("\t[[b;#aaa;]clear]         clear the messy console");
        consoleObj.echo("\t[[b;#aaa;]sudo]          looking for more control?");
        consoleObj.echo("\t[[b;#aaa;]tech]          what we're built on");
        consoleObj.echo("");
        consoleObj.echo("PROTIP: press <tab> to trigger autocompletion");
}