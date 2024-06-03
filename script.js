//your JS code here. If required.
    // Function to introduce a delay using a promise
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Async function to handle the form submission
    async function handleFormSubmit() {
      const textInput = document.getElementById('text').value;
      const delayInput = parseInt(document.getElementById('delay').value);

      // Introduce a delay before displaying the message
      await delay(delayInput);

      // Display the user-provided text on the webpage
      document.getElementById('output').textContent = textInput;
    }

    // Event listener for button click
    document.getElementById('btn').addEventListener('click', handleFormSubmit);