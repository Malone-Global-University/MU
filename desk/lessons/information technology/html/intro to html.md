#Intro to HTML tags


Hypertext markup language (HTML) is a markup language for formatting webpages, which are called "HTML documents".
To make HTML documents you wrap your text with HTML tags.
Wrapping in tags alters the appearance visible on the screen, called how the text is "rendered".
Rendering is how different browsers display your HTML. 
Older browsers might display modern HTML incorrectly, while using obsolete html tags on newer browsers may not be supported.
Using outdated tags may produce unpredictable results on browsers that are incompatible with it.


There are two types of tags, nested and open. Nested tags come in pairs of two which include an opening tag and a closing tag. An Example of a nested tag is the header 1 tag.
To use a &lt;h1&gt; tag you would write &lt;h1&gt;...&lt;/h1&gt; and replace the ellipsis with your chosen text. 
Notice that nested tags close by using a forward slash.
You write the tag exactly the same as the opening tag but use the &lt;/&gt; format.


To begin let's first make an HTML template by declaring our document type using &lt;html&gt;...&lt;/html&gt;. We write this:


&lt;!DOCTYPE html&gt;   &lt;/html&gt;


These are the first tags written in every document. 


&lt;!DOCTYPE html&gt;: This is the opening tag. It is required to declare our document as a HTML file using the file extension .html or .htm.
&lt;/html&gt;: 	 This is the closing tag. Notice it uses a forward slash to indicate it is closing the wrapped text. 


While browsers usually will render &lt;html&gt;...&lt;/html&gt; it is invalid HTML and needs to be written as &lt;!DOCTYPE html&gt;...&lt;/html&gt; for best practices.




If I wanted to make a heading that said "Title" I would write &lt;h1&gt;Title&lt;/h1&gt;. Doing this will only show the word "Title" but not the tags as html renders them invisible.
The word title is just a place holder here, you might write something like &lt;h1&gt;Chapter 1: In the Beginning...&lt;/h1&gt;, which of course would he followed by other chapters with the appropriate text:


&lt;h1&gt;Chapter 1: In the Beginning...&lt;/h1&gt;
&lt;p&gt;Paragraphs go here...&lt;/p&gt;


&lt;h1&gt;Chapter 2: Then there was the middle...&lt;/h1&gt;
&lt;p&gt;Paragraphs go here...&lt;/p&gt;


&lt;h1&gt;Chapter 3: Now our story comes to an end.&lt;/h1&gt;
&lt;p&gt;Paragraphs go here...&lt;/p&gt;


The previous example used the paragraph tag to write paragraphs. Using a &lt;p&gt; tag makes line breaks (line spaces) to start new paragraphs. This is the same as pressing enter key on a word processor program. This is how HTML tags create returns to start new paragraphs. Html will ignore empty spaces. So if you type two or more spaces between words, or try to copy text from a document over to a HTML document, it will ignore white space and treat it as a single space.
This is why we must use tags to format our text or else it will not be formatted as typed.


Open tags are single tags that do not use a closing tag. The break space tag &lt;br&gt; does not use a &lt;/br&gt; tag.
The break space tag is the same as 1. carriage return on old typewriters. 2. return keys on modern PC and smartphones (usually caller "enter" key).

If you write html it will make the text appear in a single line until you use a tag to break the space and start a new line.
For example:


1. This is a long line of text. It has multiple words and sentences. It goes on, and on and on...


2. This is a long line of text.&lt;br&gt;
   It has multiple words and sentences.&lt;br&gt;&lt;br&gt;
   
   It goes on, and on and on...


Example 1: If we simply typed text it would be one long line.
Example 2: Using the &lt;br&gt; tag creates a new line. Using two &lt;br&gt; tags creates a empty space, similar to using the &lt;p&gt; tag.



Example of of all tags in a simple template:


&lt;!DOCTYPE html&gt; 

&lt;h1&gt;Chapter 1: In the Beginning...&lt;/h1&gt;
&lt;p&gt;Paragraphs go here...&lt;/p&gt;


&lt;h1&gt;Chapter 2: Then there was the middle...&lt;/h1&gt;
&lt;p&gt;Paragraphs go here...&lt;/p&gt;


&lt;h1&gt;Chapter 3: Now our story comes to an end.&lt;/h1&gt;
&lt;p&gt;Paragraphs go here...&lt;/p&gt;


&lt;p&gt;This is a long line of text. It has multiple words and sentences. It goes on, and on and on...&lt;//p&gt;


&lt;p&gt;This is a long line of text.&lt;br&gt;
It has multiple words and sentences.&lt;br&gt;&lt;br&gt;
   
It goes on, and on and on...
&lt;/p&gt;
&lt;/html&gt;


##Summary:

These are the most basic tags to format written text on a HTML document.
The declaration tag &lt;!DOCTYPE html&gt; starts a HTML webpage.
The heading 1 tag &lt;h1&gt; makes text bigger and in bold.
The paragraph tag &lt;p&gt; starts and ends new paragraphs.
The break space tag &lt;br&gt; makes carriage returns.
Without tags text with be single line even if we type it into editors with spaces and line breaks. 

##Tips:

1. There are six different sizes of heading tags;  &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;.
2. Paragraph tags create spaces above and below the wrapped text.
3. A single break space with create 1 carriage return. Using two creates a space like a paragraph tag. Additional &lt;br&gt; tags create additional line spaces.











 



