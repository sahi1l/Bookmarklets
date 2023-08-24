This is intended to be a repository of Javascript bookmarklets that I
might come up with.  Each one will be located in a `.js` file which
includes annotated javascript code along with the actual URL (with
some shortening) to paste into the bookmark.

## mastodonLocalLinks
When reading Mastodon, links to people's profiles usually point to the
profiles on their own servers.  Sadly, if you're not a member of that
server you can't do anything on that profile: can't follow them, like
their posts, etc.  This bookmarklet replaces those links with links to
their profile on your local server.  Click on the bookmark to change
every link on the page.  Each changed link will turn cyan to show it
has been changed.  It will not rewrite links that point to your own
server, including links that have already been changed.

## fixLOTROForumLinks
Recently, the folks who made LOTRO switched to new forum software,
which broke a lot of links in Google and other places. This
bookmarklet replaces those links to point to the old forums' archive
at `forums-old.lotro.com`.  You need to run it manually whenever new
links appear on the page.

## monitorLOTROForumLinks
Like above, but it continuously monitors the website (once called) for
new links to edit.

