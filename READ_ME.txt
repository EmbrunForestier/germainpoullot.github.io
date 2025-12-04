[I do not pretend to be an expert in anything, especially not in HTML, nor CSS, nor JavaScript!
Please, I am just going to give you some small tips so that you can change this template to create your website.
If you don't understand something, or want to do something that is not already implemented, use Internet, or ask some AI model.
-- Germain]

Step 0 :
Don't worry !
While you're modifying the files of the wesite (i.e. before step 4), you're not doing anything online (you don't even need internet).
No-one sees what you're doing (except you), and you're not destroying the work of anyone. You can always go back to my website
and re-download everything from scratch, if you need to.
This website is coded directly in HTML and CSS, with almost no package, hence it is very light but not very powerful.
However, it is not hard to modify, but it is hard implement new stuffs, and it is not as friendly as a Google site, Wix or Squarespace.
You only nid two now English, that's it !

Step 1 : Making it your website
Download the ZIP from my website (on the page "Who am I?") : if you read this line, you've already done that.
Un-ZIP the ZIP archive to get 1 folder with everything, and open the READ_ME.txt : also already done.
Now let's start for real !
Open "index.html" twice : once with your navigator (e.g. Mozilla Firefox, Google Chrome...), once with a text editor (VSCode, Notepad++...).
You can visualize "your" website in the navigator, and modify it in the text editor.
In your text editor, go down some lines and find "Germain Poullot - Who Am I?" (enclosed in-between <title> and </title>),
change it to your favorite name: "Martin Matin - Why waking up?".
Save the text editor, go to your navigator and refresh the page : now the name of the tab has change : it is your website !
In your text editor, go down some lines and find the second "Germain Poullot" (enclosed in-between <a ...> and </a>),
change it to your favorite name: "Martin Matin".
Save text editor, refresh webpage : it is now your website (well, it's Martin Matin's one, at least) ! ^^

Step 2 : Filling your website with your stuff
There is plenty of text to change in the website's template to adapt it to your needs.
First, let's open the code for the other pages of the website : one page = one file.
Open "teaching.html", "Data.html", "Images.html" and "research.html" in your text editor (careful, do not open the .css and .js files).
In each file, change the name in-between <title> ... </title>, and all the "Germain Poullot" to "Martin Matin".
When you want to modify something, a good way is to use Crtl+F:
For instance, find "Many rays of the submodular cone" in the file "research.html", and replace that by
the name of Martin Matin's latest article: "On dealing with alarm clocks".

Now, you *just* have to change every single word of your website to match what you want to be written ! ^^

Step 3 : Links, tables, bold, italic, titles
HTML works with "tags", witten as : <my_tag> some_words </my_tag>. Don't be afraid, it is not complicated, just tedious.
Exemple : on the main page (= index.html), you want "My CV is available at" to be in italic. Just write <em>My CV is available at</em>
Save (in the text editor), refresh (in the navigator), and it works (hopefully).
Now, some tags :
<em> ... </em> = italic
<strong> ... </stong>  = bold font
<h1> ... </h1> = very big title
<h2> ... </h2> = big title
<h3> ... </h3> = not too big title
... until <h6> ... </h6> usually
<p> ... </p> = paragraph : if you don't want your whole text to be 1 long line, please split it into paragraphs
<a href="xxx" target="_blank"> ... </a> = link towards the page xxx (i.e. another page of your website, or of another website
on the internet, or a document to download), with the option target="_blank" that opens in a new tab when you click on it
<table> ... </table> = making a table
<tr> ... </tr> = making a row of a table
<td> ... </td> = making a cell (= data) of a row of a table
<thead> ... </thead> = making the header (= title line) of a table
<th> ... </th> = making the title of one column in the header of a table

Step 4 : Modifying the CSS
If you want to change colors, fonts, sizes, behaviors, you can modify the CSS file.
At the beginning the .html files : the line "<link rel="stylesheet" href="research.css">" indicates that "research.css" takes charge of it.
First, open "research.css" in your text editor (careful, you now have two different files name "research", with different extensions).
Find (Crtl+F) the lines
"
p, h1, h2, h3, table {
  padding-left: 20px;
}
"
and add one line to get :
"
p, h1, h2, h3, table {
  padding-left: 20px;
  color: red;
}
"
Save, refresh : now, almost all texts are red (WTF) !?
You have changed the "color" of the texts to "red" for all stuff that are in tags <p> ... </p> or <h1> ... </h1>, etc.
You should remove the line "color: red;" now.
Everything works the same way : when you modify some class in the .css, you modify the properties of all the .html objects with this class.
You can modify existing classes (usual tags come with their own class which have the same names : p, h1, table, a, tr, td, div, body...),
or create your own class, like :
"
.test {
  height: 200px;
}
"
This compels a line to have a certain height (200 pixels). Don't worry about the starting . too much.
Now, go to "index.html", find the line "<p>My CV is...</p>", and change it to "<p class="test">My CV is...</p>".
Save, refresh : your line is now huge (meaning you have a large gap below it).
Add a line "color: green;" to the class ".test". Save, refresh : your line is written in green. Now is a good time to revert the changes.
There are millions of options you can modify in the CSS, but you have enough to play with, for now (and should consider
taking a course online if you want to see more, instead of relying on the advice of a math researcher and very bad website coder...).
The "only" difficulty remaining is to find what modifies what in the code : go to your navigator and right-click.
Take the "Inspect" option : you can see the website and the code at the same time.
Moving your clicker around, you'll start to understand which part of the code is in charge of what : play for 5 minutes with it.

Step 4 : Going online
Once you're happy with your website, you may want to publish it; that is, to make it accessible to everyone.
As always, be careful of which information you put online ! You're a human being (most likely), and "online" is actually part
of the reality : everything that is put on the internet should be thought as existing forever, and may backfire.
If your university provides a handy solution, go to your IT department with some chocolate, and they'll push your website on the internet.
Otherwise, I use the GitHub solution : go on
[French] https://arfp.github.io/tp/git/github/20-github-pages 
[English] https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site 
It is tedious to do at the beginning, but once online, it is easy to modify.
Note that I am a Windows user, I am very bad with Git, GitHub, GitLab, and other :
I still managed to deal with everything with drag-and-drop, with the website of GitHub (not using any line commands).
