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



# Set default permissions for new content elements:
TCEMAIN.permissions {
	# owner be_group
	groupid = 1

	# rights:
	# enable all
	user = 31
	# edit content, show page, edit page
	group = 19
	# show page
	everybody = 1
	# Legend:
	# bit 1: 1	(view)
	# bit 2: 16 (edit content)
	# bit 3: 2	(edit page)
	# bit 4: 4
	# bit 5: 8
	# source: http://forum.typo3.org/index.php/t/206687
}



# Default PAGE object:
page = PAGE
# Insert shortcut icon in the head of the website
page.shortcutIcon = fileadmin/template/images/favicon.png
# Insert stylesheet in the head of the website
page.includeCSS {
	base = fileadmin/template/css/style.css
	#bootstrap = fileadmin/template/css/bootstrap.css
	#contact_form = fileadmin/template/css/styles.css
	#open sans file3 = fileadmin/template/css/css.css
	fairyclasses = fileadmin/template/css/fairyclasses.css
}
page.includeJS {
	scrolling_effect = fileadmin/template/js/scrolling-effect.js
}



page.10 = FLUIDTEMPLATE
page.10 {
	file = fileadmin/template/standard.html
	partialRootPath = fileadmin/template/Partials/
	layoutRootPath = fileadmin/template/Layouts/
	# Allow switching layout while reusing main template (index.html in this case):
	# Settings works from TYPO3 6.1 - otherwise provide it the variables-way.
	settings.layout = Standard

	# Hand over variables to the fluid template:
	variables {
		# middle content as defined in Page/List view:
		content < styles.content.get
		content_right < styles.content.getRight
		content_left < styles.content.getLeft
		# Variables are Typoscript-Objects, e.g. the following (unused)
		sometext = TEXT
		sometext.value = Here's some text.
	}
}



# The menu can also be created using cObject fluid view helper instead of
lib.menu = HMENU
lib.menu {
	1 = TMENU
	1 {
		wrap = <ol class="menu main-nav">|</ol>
		sectionIndex = 1
		sectionIndex.type = header
		expAll = 1
		NO.allWrap = <li>|</li>
	}

}

