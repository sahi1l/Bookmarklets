//annotated version
if(!document.f$){//prevent this from running twice on the same page
    f$=()=>{//this function fixes the links; see fixLOTROForumLinks.js for details. It's ok to run this multiple times on the same links.
        document.querySelectorAll('a[href*="lotro.com/forums"]:not([href*="forums-old"])').forEach(//the not clause reduces duplication
            (w)=>{
                w.href = w.href.replace(/\/\/.*lotro.com/,"//forums-old.lotro.com");
                w.style["color"]="goldenrod";
            });
    };
    new MutationObserver(f$) //creates an observer to watch for changes, and run f$ when it does. (This might be numerous times, note.)
        .observe(document.body,//look for changes to the document body
                 {childList:true,subtree:true} //watch for additions or removals of elements, in the whole tree
                );
    f$();//run fixlinks right away
};
document.f$=1; //a flag so we don't have multiple MutationObservers in case someone calls the link twice




/*Condensed Bookmarklet version
  javascript:(()=>{if(!document.f$){f$=()=>{document.querySelectorAll('a[href*="lotro.com/forums"]:not([href*="forums-old"])').forEach((w)=>{w.href = w.href.replace(/\/\/.*lotro.com/,"//forums-old.lotro.com");w.style["color"]="goldenrod";});};new MutationObserver(f$).observe(document.body,{childList:true,subtree:true});f$();};document.f$=1;})()
*/
