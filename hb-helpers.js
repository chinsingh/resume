// Function to check if template is in templates array
Handlebars.registerHelper('ifInTemplates', function(templates, options) {
    const template = getQueryParam('template');
    if(!template) return options.fn(this);

    if (templates && templates.indexOf(template) !== -1) {
        return options.fn(this);
    }
    return options.inverse(this);
});


Handlebars.registerHelper('findSummary', function(summaries, options){
    const template = getQueryParam('template');
    let defaultSummary = '';
    for(const summary of summaries) {
        if(summary.templates && summary.templates.indexOf(template) != -1)
            return summary.text;
        if(summary.isDefault==true) defaultSummary = summary.text;
    }

    return defaultSummary;
});


