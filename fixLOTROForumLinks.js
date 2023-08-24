//Here is the annotated code
document.querySelectorAll(
    'a[href*="lotro.com/forums"]' //look for all links which start with lotro.com/forums. This catches forums-old links but shouldn't change them
    //the new forum links use "forums.lotro.com/index.php?" so they shouldn't be affected
).forEach((w)=>{
    w.href = w.href.replace(/\/\/.*lotro.com/,"//forums-old.lotro.com");//replace the domain with forums-old.lotro.com
    w.style["color"]="goldenrod"; //change the color of the link to make the change visible (you can remove this if you like, or change the color
});


/*
  To make into a bookmarklet, create a bookmark in your browser and paste this into the URL.
  
  javascript:(()=>{document.querySelectorAll('a[href*="lotro.com/forums"]').forEach((w)=>{w.href = w.href.replace(/\/\/.*lotro.com/,"//forums-old.lotro.com");w.style["color"]="goldenrod";});})()


  Or without the color change:
  javascript:(()=>{document.querySelectorAll('a[href*="lotro.com/forums"]').forEach((w)=>{w.href = w.href.replace(/\/\/.*lotro.com/,"//forums-old.lotro.com");});})()

*/
