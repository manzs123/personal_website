const correctPassword = 'go0snae'; // Change this to your desired password

        function checkPassword() {
            const input = document.getElementById('passwordInput').value;
            if (input === correctPassword) {
                document.getElementById('passwordPrompt').style.display = 'none';
                document.getElementById('protectedContent').style.display = 'block';
            } else {
                document.getElementById('errorMessage').style.display = 'block';
            }
}