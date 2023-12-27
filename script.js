document.addEventListener('DOMContentLoaded', function() {
            // DOM is loaded, write the string to a new element
            var messageElement = document.createElement('div');
            messageElement.innerHTML = 'DOM load success';
            document.body.appendChild(messageElement);
        });