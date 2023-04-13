import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import Html from "./Html";

export default function Htmlformating() {
  let a = `
    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
    <h4>This is heading 4</h4>
    <h5>This is heading 5</h5>
    <h6>This is heading 6</h6>
   
       
       
       `;
  return (
    <>
      <div className="htmlhomec ">
        {<Html className="htmlhe" />}

        <div className="allhtml">
          <div className="nextbutton2">
            <button className="middlelearn">next</button>
          </div>

          <div className="readHomel">
            <h1 className="htmlheading">HTML ATTRIBUTES.</h1>
            <p className="simple important">
              <BsCaretRightFill /> HTML attributes provide additional
              information about HTML elements.
            </p>
            <pre className="codehtml1"></pre>

            <div>
              <h2 className="htmlheading imph">
                <BsCaretRightFill /> note:
              </h2>
              <ul>
                <li className="simple ">
                  {" "}
                  All HTML elements can have attributes.{" "}
                </li>
                <li className="simple ">
                  Attributes provide additional information about elements.
                </li>
                <li className="simple ">
                  Attributes are always specified in the start tag.
                </li>
                <li className="simple ">
                  Attributes usually come in name/value pairs like:
                  name="value".
                </li>
              </ul>
            </div>

            <hr />

            <div>
              <h1 className="htmlheading ">
                1) The <span className="imph">href </span>Attribute{" "}
              </h1>
              <ul>
                <li className="simple imp">
                  {" "}
                  The &lt;a&gt; tag defines a hyperlink. The href attribute
                  specifies the URL of the page the link goes to:
                </li>
              </ul>

              <p className="simple important">
                <BsCaretRightFill /> Look the video
              </p>
              <video width="300" height="200" controls></video>
              <hr />

              <h1 className="htmlheading">
                2) The <span className="imph">src </span> Attribute
              </h1>
              <p className="simple ">
                <BsCaretRightFill /> The &lt;img&gt; tag is used to embed an
                image in an HTML page. The src attribute specifies the path to
                the image to be displayed:
              </p>
              <p className="simple important">
                <BsCaretRightFill /> Look the video
              </p>
              <video width="300" height="200" controls></video>
            </div>

            <div>
              <h1 className="htmlheading ">
                3) The <span className="imph">class </span> and{" "}
                <span className="imph">id</span> attribute
              </h1>
              <ul>
                <li className="simple ">
                  {" "}
                  <span className=" imph">class</span> = The class attribute
                  specifies one or more classnames for an element. The class
                  attribute is mostly used to point to a class in a style sheet.
                  However, it can also be used by a JavaScript (via the HTML
                  DOM) to make changes to HTML elements with a specified class.
                </li>
                <hr />
                <li className="simple ">
                  {" "}
                  <span className=" imph">id</span> = The id attribute shoud be
                  a unique for every element.
                </li>
                <li className="simple ">
                  {" "}
                  <span className=" imph">id</span> = The id attribute is used
                  to point to a specific style declaration in a style sheet. It
                  is also used by JavaScript to access and manipulate the
                  element with the specific id.
                </li>
              </ul>

              <p className="simple important">
                <BsCaretRightFill /> Look the video to understand how css and
                javascript used these attributes
              </p>
              <video width="300" height="200" controls></video>
              <hr />

              <h1 className="htmlheading">
                4) The <span className="imph">height</span> and{" "}
                <span className="imph">width</span> attribute.
              </h1>
              <p className="simple ">
                <BsCaretRightFill />
                The height and width attribute in HTML is used to specify the
                height and width of the element . The values ​​are set in px ie
                pixels. To add an image in an HTML page,{" "}
                <span className="imp"> &lt;img&gt; </span> tag is used. With
                that, we need to use the attributes height and width to set the
                height and width of the image in pixels.
              </p>
              <p className="simple important">
                <BsCaretRightFill /> example{" "}
                <span className="imph">
                  {" "}
                  &lt;img src='./images.aa.png' height="200px" width="200px"&gt;
                </span>
              </p>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
