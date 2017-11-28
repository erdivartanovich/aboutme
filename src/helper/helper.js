export default {
    truncateText: function ( n, text, useWordBoundary ){
        console.log(text)
        if (text.length <= n) { return this; }
        var subString = text.substr(0, n-1);
        return (useWordBoundary 
           ? subString.substr(0, subString.lastIndexOf(' ')) 
           : subString) + "&hellip;";
    }
}