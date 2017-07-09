# <INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/template/Configuration/TypoScript/setup.ts">
styles.content {

   # get content, left
   getLeft < styles.content.get
   getLeft.select.where = {#colPos}=1

   # get content, right
   getRight < styles.content.get
   getRight.select.where = {#colPos}=2

   # get content, border
   getBorder < styles.content.get
   getBorder.select.where = {#colPos}=3

   # get news
   getNews < styles.content.get
   getNews.select.pidInList = {$styles.content.getNews.newsPid}
}
