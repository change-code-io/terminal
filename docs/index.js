var ascii =

".   ____ _                               ____          _              \n"+
".  / ___| |__   __ _ _ __   __ _  ___   / ___|___   __| | ___         \n"+
". | |   | '_ \\ / _` | '_ \\ / _` |/ _ \\ | |   / _ \\ / _` |/ _ \\   \n"+
". | |___| | | | (_| | | | | (_| |  __/ | |__| (_) | (_| |  __/        \n"+
".  \\____|_| |_|\\__,_|_| |_|\\__, |\\___|  \\____\\___/ \\__,_|\\___|\n"+
".                          |___/                                      \n"


var greetingsText = "[[b;#0975DC;]Building the every economy]\n\n\nWelcome human, type [[b;#0975DC;]start] to list available commands and begin\nlearning more about Change Code.\n\n"

var prompt1 = "[[b;#39ff14;]weare@changecode]:~#"

var aboutCC = {
    echo: function(text) {
        this.echo(text, {keepWords: true});
    },
    start: function() {
      showStart(this);
    },

    ls: function() {
        this.error("<ls> is not available. I'm guessing you want to list available commands with <start>:", {keepWords: true});
         showStart(this);
    },
    contact: function() {
        this.echo("");
        this.echo("To get in touch, send us an email at <a href='mailto:weare@changecode.io'>weare@changecode.io</a> or book some time with us <a href=https://cal.com/team/change-code/introductory-call, target=_blank>here</a>.", {raw: true}, {keepWords: true})
    },
    founders: function() {
        this.echo("Change Code was founded by Erin Murphy and Chris Georgen. Erin and Chris met while working at Topl, one of only a handful of blockchain protocols built specifically to power ReFi, social enterprise, and economic change in the Global South.\n\nChris has been active in web3 since 2012. Before starting Change Code, founded two startups in the space—first developing a mobile payments platform on Ethereum in 2015 and then founding Topl in 2017. Chris began programming while at Rice University as part of his research in computational physics, earning him 3 co-authored publications. \n\nBefore joining Topl, Erin worked in development finance for 10 years across 6 countries including Ukraine and India. For the UN Development Programme and others, Erin focused on micro-enterprise development, infrastructure financing, and women’s financial inclusion. In 2021, Erin graduated from the Wharton School and Lauder Institute with her MBA-MA.", {keepWords: true})
    },
    keywords: function() {
        this.echo("social impact, ReFi, blended finance, web3, social enterprise, sustainability \n\nMaybe this will help with SEO", {keepWords: true});
    },
    clear: function() {
        this.clear()
    },
    sudo: function() {
        this.echo("That won't do much here, but if you want the power to create change with us, send us an email at <a href='mailto:weare@changecode.io'>weare@changecode.io</a> expressing your interest and how you think you can help!", {raw: true}, {keepWords: true})
    },
    tech: function() {
        this.echo("CC works primarily with web3 technology including blockchains, zero-knowledge proofs, self-sovereign identity, and decentralized storage. It's kinda top secret, but we may be building an AI chatbot as well. Keep that to yourself.\n\nThis website was built using Framer and this terminal was developed using jQuery Terminal.", {keepWords: true})
    },
    reading_list: function() {
        this.echo("Predictably Irrational: The Hidden Forces That Shape Our Decisions | Dan Ariely | <a href=https://www.goodreads.com/en/book/show/1713426, target=_blank>link</a> <br><br>Inspired: How to Create Tech Products Customers Love | Marty Cagan | <a href=https://www.goodreads.com/en/book/show/35249663, target=_blank>link</a> <br><br>The Infinite Machine: How an Army of Crypto-hackers Is Building the Next Internet with Ethereum | Camila Russo | <a href=https://www.goodreads.com/en/book/show/50175330, target=_blank>link</a> <br><br>Capital in the Twenty First Century | Thomas Piketty | | <a href=https://www.goodreads.com/en/book/show/18736925, target=_blank>link</a>", {raw: true}, {keepWords: true})
    },
}

function showStart(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#0975DC;]contact]       get in touch");
        consoleObj.echo("\t[[b;#0975DC;]founders]      about Erin and Chris");
        consoleObj.echo("\t[[b;#0975DC;]keywords]      relevant search terms");
        consoleObj.echo("\t[[b;#0975DC;]reading_list]  texts that inspire us");
        consoleObj.echo("\t[[b;#0975DC;]start]         if you get lost");
        consoleObj.echo("\t[[b;#0975DC;]clear]         clear the messy console");
        consoleObj.echo("\t[[b;#0975DC;]sudo]          looking for more control?");
        consoleObj.echo("\t[[b;#0975DC;]tech]          what we're built on");
        consoleObj.echo("");
        consoleObj.echo("PROTIP: press <tab> to trigger autocompletion");
}

function getGreetings() {
    if (window.innerWidth > 580) {
        return (ascii + greetingsText);
    } else {
        return (greetingsText);
    }
}

$(function() {
    $('#terminal').terminal(aboutCC, {
        greetings: function() {
            return getGreetings();
          },
        prompt: prompt1,
        completion: ['start', 'contact', 'tech', 'founders', 'keywords', 'reading_list', 'clear', 'sudo', 'ls'],
        keepWords: true,
    });
 });