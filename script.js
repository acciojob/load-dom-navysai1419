//your JS code here. If required.
        // Function to be executed when DOM is loaded
        function onDomLoad() {
            // Create a new text node with the message
            var textNode = document.createTextNode("DOM load success");

            // Create a new paragraph element
            var paragraph = document.createElement("p");

            // Append the text node to the paragraph element
            paragraph.appendChild(textNode);

            // Append the paragraph to the body
            document.body.appendChild(paragraph);
        }

        // Add an event listener for DOMContentLoaded event
        document.addEventListener("DOMContentLoaded", onDomLoad);