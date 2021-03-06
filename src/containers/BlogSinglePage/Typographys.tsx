import React from "react";

const Typographys = () => {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg mx-auto dark:text-gray-100">
      <h1 className="text-f4 md:text-f2 dark:text-white">
        Create a clean, unique, easy to use website!
      </h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis,
        commodi pariatur illo quo iusto, eum eos minus quidem quas numquam
        perferendis temporibus neque dolore tenetur repellat consequatur aut
        accusantium.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga
        voluptate cum! Magnam corporis, consectetur eligendi nemo,{" "}
        <em>really are</em> eius suscipit culpa omnis temporibus, reiciendis
        maxime magni hic earum autem soluta harum.
      </p>
      <blockquote>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          recusandae voluptates. Modi maxime quo necessitatibus{" "}
          <code>h1 necessitatibus</code> fuga dolores alias, in ea.
        </p>
      </blockquote>

      <p>
        It adds a new <code>prose</code> class that you can slap on any block of
        vanilla HTML content and turn it into a beautiful, well-formatted
        document:
      </p>
      <p>
        For more information about how to use the plugin and the features it
        includes,
        <a href="https://github.com/tailwindcss/typography/blob/master/README.md">
          read the documentation
        </a>
        .
      </p>
      <hr />
      <h2>What to expect from here on out</h2>
      <p>
        What follows from here is just a bunch of absolute nonsense I've written
        to dogfood the plugin itself. It includes every sensible typographic
        element I could think of, like <strong>bold text</strong>, unordered
        lists, ordered lists, code blocks, block quotes,{" "}
        <em>and even italics</em>.
      </p>
      <p>It's important to cover all of these use cases for a few reasons:</p>
      <ol>
        <li>We want everything to look good out of the box.</li>
        <li>
          Really just the first reason, that's the whole point of the plugin.
        </li>
        <li>
          Here's a third pretend reason though a list with three items looks
          more realistic than a list with two items.
        </li>
      </ol>
      <p>Now we're going to try out another header style.</p>
      <h3>Typography should be easy</h3>
      <p>
        So that's a header for you — with any luck if we've done our job
        correctly that will look pretty reasonable.
      </p>
      <p>Something a wise person once told me about typography is:</p>
      <blockquote>
        <p>
          Typography is pretty important if you don't want your stuff to look
          like trash. Make it good then it won't be bad.
        </p>
      </blockquote>
      <p>
        It's probably important that images look okay here by default as well:
      </p>
      <figure>
        <img
          src="https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?cs=srgb&dl=pexels-cottonbro-4686960.jpg&fm=jpg"
          alt="Contrary to popular belief"
        />
        <figcaption>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </figcaption>
      </figure>
      <p>
        Now I'm going to show you an example of an unordered list to make sure
        that looks good, too:
      </p>
      <ul>
        <li>So here is the first item in this list.</li>
        <li>In this example we're keeping the items short.</li>
        <li>Later, we'll use longer, more complex list items.</li>
      </ul>
      <p>And that's the end of this section.</p>
      <h2>What if we stack headings?</h2>
      <h3>We should make sure that looks good, too.</h3>
      <p>
        Sometimes you have headings directly underneath each other. In those
        cases you often have to undo the top margin on the second heading
        because it usually looks better for the headings to be closer together
        than a paragraph followed by a heading should be.
      </p>
      <h3>When a heading comes after a paragraph …</h3>
      <p>
        When a heading comes after a paragraph, we need a bit more space, like I
        already mentioned above. Now let's see what a more complex list would
        look like.
      </p>
      <ul>
        <li>
          <p>
            <strong>
              I often do this thing where list items have headings.
            </strong>
          </p>
          <p>
            For some reason I think this looks cool which is unfortunate because
            it's pretty annoying to get the styles right.
          </p>
        </li>
        <li>
          <p>
            <strong>Since this is a list, I need at least two items.</strong>
          </p>
          <p>
            I explained what I'm doing already in the previous list item, but a
            list wouldn't be a list if it only had one item, and we really want
            this to look realistic.
          </p>
        </li>
        <li>
          <p>
            <strong>It's not a bad idea to add a third item either.</strong>
          </p>
          <p>
            I think it probably would've been fine to just use two items but
            three is definitely not worse, and since I seem to be having no
            trouble making up arbitrary things to type
          </p>
        </li>
      </ul>
      <p>
        After this sort of list I usually have a closing statement or paragraph,
        because it kinda looks weird jumping right to a heading.
      </p>
      <h2>Code should look okay by default.</h2>
      <p>
        I think most people are going to use{" "}
        <a href="https://highlightjs.org/">highlight.js</a> or{" "}
        <a href="https://prismjs.com/">Prism</a> or something if they want to
        style their code blocks but it wouldn't hurt to make them look{" "}
        <em>okay</em> out of the box, even with no syntax highlighting.
      </p>

      <p>Hopefully that looks good enough to you.</p>
      <h3>What about nested lists?</h3>
      <p>
        Nested lists basically always look bad which is why editors like Medium
        don't even let you do it, but I guess since some of you goofballs are
        going to do it we have to carry the burden of at least making it work.
      </p>
      <ol>
        <li>
          <strong>Nested lists are rarely a good idea.</strong>
          <ul>
            <li>
              Nested navigation in UIs is a bad idea too, keep things as flat as
              possible.
            </li>
            <li>
              Nesting tons of folders in your source code is also not helpful.
            </li>
          </ul>
        </li>
        <li>
          <strong>Since we need to have more items, here's another one.</strong>
          <ul>
            <li>
              I'm not sure if we'll bother styling more than two levels deep.
            </li>
            <li>
              Two is already too much, three is guaranteed to be a bad idea.
            </li>
            <li>If you nest four levels deep you belong in prison.</li>
          </ul>
        </li>
        <li>
          <strong>Two items isn't really a list, three is good though.</strong>
          <ul>
            <li>Nobody wants to look at this.</li>
            <li>I'm upset that we even have to bother styling this.</li>
          </ul>
        </li>
      </ol>
      <p>
        The most annoying thing about lists in Markdown is that{" "}
        <code>&lt;li&gt;</code> elements aren't given a child{" "}
        <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the
        list item. That means I have to worry about styling that annoying
        situation too.
      </p>
      <ul>
        <li>
          <p>
            <strong>For example, here's another nested list.</strong>
          </p>
          <p>But this time with a second paragraph.</p>
          <ul>
            <li>
              These list items won't have <code>&lt;p&gt;</code> tags
            </li>
            <li>Because they are only one line each</li>
          </ul>
        </li>
        <li>
          <p>
            <strong>But in this second top-level list item, they will.</strong>
          </p>
          <p>
            This is especially annoying because of the spacing on this
            paragraph.
          </p>
          <ul>
            <li>
              <p>
                As you can see here, because I've added a second line, this list
                item now has a <code>&lt;p&gt;</code> tag.
              </p>
              <p>This is the second line I'm talking about by the way.</p>
            </li>
            <li>
              <p>Finally here's another list item so it's more like a list.</p>
            </li>
          </ul>
        </li>
        <li>
          <p>A closing list item, but with no nested list, because why not?</p>
        </li>
      </ul>
      <p>And finally a sentence to close off this section.</p>
      <h2>There are other elements we need to style</h2>
      <p>
        I almost forgot to mention links, like{" "}
        <a href="https://tailwindcss.com">
          this link to the Tailwind CSS website
        </a>
        . We almost made them blue but that's so yesterday, so we went with dark
        gray, feels edgier.
      </p>
      <p>We even included table styles, check it out:</p>
      <table>
        <thead>
          <tr>
            <th>Wrestler</th>
            <th>Origin</th>
            <th>Finisher</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bret "The Hitman" Hart</td>
            <td>Calgary, AB</td>
            <td>Sharpshooter</td>
          </tr>
          <tr>
            <td>Stone Cold Steve Austin</td>
            <td>Austin, TX</td>
            <td>Stone Cold Stunner</td>
          </tr>
          <tr>
            <td>Randy Savage</td>
            <td>Sarasota, FL</td>
            <td>Elbow Drop</td>
          </tr>
          <tr>
            <td>Vader</td>
            <td>Boulder, CO</td>
            <td>Vader Bomb</td>
          </tr>
          <tr>
            <td>Razor Ramon</td>
            <td>Chuluota, FL</td>
            <td>Razor's Edge</td>
          </tr>
        </tbody>
      </table>

      <h3>
        Sometimes I even use <code>code</code> in headings
      </h3>
      <p>
        Even though it's probably a bad idea, and historically I've had a hard
        time making it look good. This{" "}
        <em>"wrap the code blocks in backticks"</em> trick works pretty well
        though really.
      </p>
    </div>
  );
};

export default Typographys;
